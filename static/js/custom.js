function checkNavBar() {
    if (window.pageYOffset == 0) {
        document.getElementById('navbar').classList.remove('opacity-50');
    } else {
        document.getElementById('navbar').classList.add('opacity-50');
    }
}

window.onscroll = function() {
    checkNavBar();
};

checkNavBar();