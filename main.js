// Node.js script to create index.html

// Requirements
const ejs = require('ejs');
const http = require('http');
const {
    Octokit
} = require("@octokit/rest");
const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;
const minify = require('minify');

var octokit;

// Initialize Octokit
if (process.env.GITHUB_TOKEN !== "undefined" && process.env.GITHUB_TOKEN) {
    console.log("GitHub Mode: Authenticated");
    octokit = new Octokit({
        auth: process.env.GITHUB_TOKEN,
    });
} else {
    console.log("GitHub Mode: Unauthenticated");
    octokit = new Octokit();
}


// Items
const shortlook_providers = require(path.join(__dirname, 'items', 'shortlook_providers.json'));
const tweaks = require(path.join(__dirname, 'items', 'tweaks.json'));
const widgets = require(path.join(__dirname, 'items', 'widgets.json'));
const articles = require(path.join(__dirname, 'items', 'articles.json'));

const githubRunNumber = process.env.GITHUB_RUN_NUMBER || 0;

// Generate ShortLook Providers HTML Function
function generate_shortlook_providers_html(cb) {
    var providers = [];
    shortlook_providers.items.forEach(provider => {
        ejs.renderFile(path.join(__dirname, 'templates', 'shortlook-provider-item.ejs'), provider, {}, function (err, str) {
            if (err) throw err;
            providers.push(str);
            if (shortlook_providers.items.length == providers.length) {
                cb(providers.join('\n'));
            }
        });
    });
}

// Generate Tweaks HTML Function
function generate_tweaks_html(cb) {
    var tweaks_array = [];
    tweaks.items.forEach(tweak => {
        ejs.renderFile(path.join(__dirname, 'templates', 'tweak-item.ejs'), tweak, {}, function (err, str) {
            if (err) throw err;
            tweaks_array.push(str);
            if (tweaks.items.length == tweaks_array.length) {
                cb(tweaks_array.join('\n'));
            }
        });
    });
}

// Generate Widgets HTML Function
function generate_widgets_html(cb) {
    var widgets_array = [];
    widgets.items.forEach(widget => {
        ejs.renderFile(path.join(__dirname, 'templates', 'widget-item.ejs'), widget, {}, function (err, str) {
            if (err) throw err;
            widgets_array.push(str);
            if (widgets.items.length == widgets_array.length) {
                cb(widgets_array.join('\n'));
            }
        });
    });
}

// Generate Projects HTML Function
function generate_projects_html(projects, cb) {
    var projects_array = [];
    projects.forEach(project => {
        ejs.renderFile(path.join(__dirname, 'templates', 'project-item.ejs'), project, {}, function (err, str) {
            if (err) throw err;
            projects_array.push(str);
            if (projects.length == projects_array.length) {
                cb(projects_array.join('\n'));
            }
        });
    });
}

// Generate Articles HTML Function
function generate_articles_html(articles, cb) {
    var articles_array = [];
    articles.items.forEach(article => {
        ejs.renderFile(path.join(__dirname, 'templates', 'article-item.ejs'), article, {}, function (err, str) {
            if (err) throw err;
            articles_array.push(str);
            if (articles.items.length == articles_array.length) {
                cb(articles_array.join('\n'));
            }
        });
    });
}

function minifyFile(file) {
    minify(file, { html: { removeAttributeQuotes: false, removeOptionalTags: false } })
        .then(function (result) {
            fs.writeFile(path.join(__dirname, 'build', file), result, {
                flag: 'w'
            }, function (err) {
                if (err) throw err;
                console.log(file + ' has been successfully written');
            });
        })
        .catch(console.error);
}

function minifyCSS() {
    const files = ['./css/index.css', './css/links.css'];
    if (!fs.existsSync(path.join(__dirname, 'build'))) {
        fs.mkdirSync(path.join(__dirname, 'build'));
    }
    if (!fs.existsSync(path.join(__dirname, 'build/css'))) {
        fs.mkdirSync(path.join(__dirname, 'build/css'));
    }
    files.forEach(file => {
        minifyFile(file);
    });
}

function fetch() {
    if (githubRunNumber == 0) {
        fetch_offline();
    } else {
        fetch_github();
    }
}

function fetch_offline() {
    console.log("Using offline mode...");
    const projects = require(path.join(__dirname, 'offline_gh.json'));
    generate_index_html(projects);
}

function fetch_github() {
    console.log("Using live mode...");
    octokit.paginate("GET /users/:username/repos", {
        username: "JeffResc",
    })
        .then((data) => {
            data.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1);
            const projects = data.filter(obj => obj.fork == false).filter(obj => { return obj.archived == false });
            generate_index_html(projects);
        });
}

function generate_index_html(data) {
    data.sort((a, b) => (a.stargazers_count < b.stargazers_count) ? 1 : -1);
    const projects = data.filter(obj => obj.fork == false).filter(obj => { return obj.archived == false });
    var html_object = {};
    generate_articles_html(articles, function (articles_html) {
        html_object.articles = articles_html;
        generate_projects_html(projects, function (projects_html) {
            html_object.projects = projects_html;
            generate_shortlook_providers_html(function (provider_html) {
                html_object.shortlook_providers = provider_html;
                generate_tweaks_html(function (tweak_html) {
                    html_object.tweaks = tweak_html;
                    generate_widgets_html(function (widget_html) {
                        html_object.widgets = widget_html;
                        ejs.renderFile(path.join(__dirname, 'templates', 'base.ejs'), {
                            articles_section: html_object.articles,
                            projects_section: html_object.projects,
                            shortlook_providers_section: html_object.shortlook_providers,
                            tweaks_section: html_object.tweaks,
                            widgets_section: html_object.widgets,
                            githubRunNumber: githubRunNumber
                        }, {}, function (err, str) {
                            if (err) throw err;
                            if (!fs.existsSync(path.join(__dirname, 'build'))) {
                                fs.mkdirSync(path.join(__dirname, 'build'));
                            }
                            fs.writeFile(path.join(__dirname, 'build', '-index.html'), str, {
                                flag: 'w'
                            }, function (err) {
                                if (err) throw err;
                                console.log('-index.html has been successfully written');
                                minify('./build/-index.html', { html: { removeAttributeQuotes: false, removeOptionalTags: false } })
                                    .then(function (result) {
                                        fs.writeFile(path.join(__dirname, 'build', 'index.html'), result, {
                                            flag: 'w'
                                        }, function (err) {
                                            if (err) throw err;
                                            console.log('index.html has been successfully written');
                                            fs.unlink('./build/-index.html', (err) => {
                                                if (err) {
                                                    throw err;
                                                }
                                                console.log("-index.html has been successfully deleted");
                                            });
                                        });
                                    })
                                    .catch(console.error);
                            });
                            ncp(path.join(__dirname, 'static'), path.join(__dirname, 'build'), function (err) {
                                if (err) throw err;
                                console.log('Successfully copied static directory to build directory');
                            });
                        });
                    });
                });
            });
        });
    });
}

fetch();
minifyCSS();