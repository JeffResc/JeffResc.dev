(self.webpackChunkjeff_rescignano=self.webpackChunkjeff_rescignano||[]).push([[293],{8515:function(e,t,n){var a=n(5972).k5;e.exports.A=function(e){return a({tag:"svg",attr:{viewBox:"0 0 14 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"}}]})(e)}},4255:function(e,t,n){var a=n(5972).k5;e.exports.y=function(e){return a({tag:"svg",attr:{viewBox:"0 0 10 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}}]})(e)}},2738:function(e,t,n){var a=n(5972).k5;e.exports.X=function(e){return a({tag:"svg",attr:{viewBox:"0 0 14 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}}]})(e)}},5972:function(e,t,n){"use strict";n.d(t,{k5:function(){return i}});var a=n(6540),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},A=a.createContext&&a.createContext(r),o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function c(e){return e&&e.map((function(e,t){return a.createElement(e.tag,o({key:t},e.attr),c(e.child))}))}function i(e){return function(t){return a.createElement(s,o({attr:o({},e.attr)},t),c(e.child))}}function s(e){var t=function(t){var n,r=e.attr,A=e.size,c=e.title,i=l(e,["attr","size","title"]),s=A||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,i,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),c&&a.createElement("title",null,c),e.children)};return void 0!==A?a.createElement(A.Consumer,null,(function(e){return t(e)})):t(r)}},8220:function(e,t,n){var a=n(5972).k5;e.exports.g=function(e){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 13h18v8.002c0 .551-.445.998-.993.998H3.993A.995.995 0 0 1 3 21.002V13zM3 2.998C3 2.447 3.445 2 3.993 2h16.014c.548 0 .993.446.993.998V11H3V2.998zM9 5v2h6V5H9zm0 11v2h6v-2H9z"}}]}]})(e)}},9354:function(e,t,n){"use strict";var a=n(6540),r=n(8515),A=n(4255),o=n(2738),l=n(8220);t.A=e=>a.createElement("div",{className:"flex justify-center"},a.createElement("div",{className:"block p-6 rounded-lg shadow-lg max-w-sm bg-gradient-to-r from-cyan-900 to-indigo-900 betterhover:hover:from-pink-900 betterhover:hover:to-fuchsia-700 betterhover:hover:scale-110 betterhover:hover:z-50 duration-200 w-full h-full relative"},a.createElement("span",{className:"text-white text-xl leading-tight font-medium mb-2 flex"},e.name," ",function(e){if(e.archived)return a.createElement(l.g,{className:"mt-1"})}(e)),a.createElement("p",{className:"text-white text-base mb-12"},a.createElement("span",{className:"text-xs tracking-wide uppercase flex"},a.createElement(o.X,{className:"mt-0.5"})," ",e.stars," stars, ",a.createElement(A.y,{className:"mt-0.5"})," ",e.forks," forks, ",a.createElement(r.A,{className:"mt-0.5"})," ",e.language),e.description),a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},a.createElement("button",{type:"button",className:"absolute bottom-6 left-6 inline-block px-6 py-2.5 bg-blue-400 text-black font-medium text-xs leading-tight uppercase rounded shadow-md betterhover:hover:bg-blue-600 betterhover:hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"},"Explore"))))},3767:function(e,t,n){"use strict";var a=n(6540);t.A=e=>a.createElement("section",null,a.createElement("div",{className:"container mx-auto flex flex-col items-center px-4 pb-8 pt-16 text-center xl:max-w-3xl"},a.createElement("h1",{className:"text-4xl sm:text-5xl font-bold leading-none block w-full text-sky-600 lg:inline"},e.title)))},8507:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return s}});var a=n(6540),r=n(8154),A=n(4183),o=n(2532);var l=e=>a.createElement("section",null,a.createElement("div",{className:"container mx-auto flex flex-col items-center px-4 py-8 text-center"},a.createElement(o.S,{src:"../../static/img/Profile.jpg",alt:"Profile",className:"object-scale-down h-56 w-56 mb-4 rounded-lg betterhover:hover:scale-110 duration-200",placeholder:"blurred",loading:"eager",__imageData:n(4970)}),a.createElement("h1",{className:"text-4xl font-bold leading-none sm:text-5xl text-white"},"Hi, I'm",a.createElement("br",null),a.createElement("span",{className:"block w-full text-sky-600 lg:inline"},"Jeff Rescignano")),function(e){if("false"!==e)return a.createElement("p",{className:"mt-8 text-xl text-white"},"DevSecOps Engineer")}(e.subtitle))),c=n(3767);var i=n(9354);function s(e){let{data:t}=e;return a.createElement(A.A,{pageTitle:"Jeff Rescignano",pageDescription:"Hi, I'm Jeff Rescignano. I'm a DevSecOps Engineer. This is my development portfolio and blog!"},a.createElement(r.m,null,a.createElement("link",{rel:"canonical",href:"https://jeffresc.dev/"}),a.createElement("script",{type:"application/ld+json"},'{\n            "@context": "https://schema.org",\n            "@type": "Person",\n            "givenName": "Jeffrey",\n            "familyName": "Rescignano",\n            "nationality": "American",\n            "description": "DevSecOps Engineer",\n            "jobTitle": "Student",\n            "url": "https://jeffresc.dev/",\n            "image": "https://jeffresc.dev/img/Profile.jpg",\n            "birthPlace": {\n              "address": {\n                "addressRegion": "NY",\n                "addressCountry": "United States"\n              }\n            },\n            "homeLocation": {\n              "address": {\n                "addressCountry": "United States"\n              }\n            },\n            "knowsAbout": ["Computer Science", "Advanced Programming Concepts", "Algorithms and Data Structures", "Computer Organization", "Computer and Network Security", "Database Systems", "Embedded Systems", "Human-Computer Interaction", "Programming Languages", "Software Design & Development", "Linear Algebra"]\n          }')),a.createElement(l,{subtitle:"true"}),a.createElement(c.A,{title:"Top GitHub Projects"}),a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},t.allInternalRepos.edges.map((e=>a.createElement(i.A,{name:e.node.name,description:e.node.description,url:e.node.html_url,stars:e.node.stargazers_count,forks:e.node.forks,archived:e.node.archived,language:e.node.language,key:e.node.id})))))}},4970:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/jpeg;base64,/9j/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAAMBAQAAAAAAAAAAAAAAAAIFBwQG/8QAFgEBAQEAAAAAAAAAAAAAAAAABAMH/9oADAMBAAIQAxAAAAHwdzcdoa6ewJQO9yGviMrH/8QAGxAAAgMBAQEAAAAAAAAAAAAAAQQCAwUTAAb/2gAIAQEAAQUCVHQoKWxbxMhd3Mzce2PqMuegl3+goC4FhjCNYtWF5//EABoRAAMAAwEAAAAAAAAAAAAAAAABAhExMlH/2gAIAQMBAT8BUJw68ME6K6Z//8QAHhEAAQQBBQAAAAAAAAAAAAAAAQACBBEDITEyUZH/2gAIAQIBAT8B03pCThA5D1MFNCnkiXkrsr//xAAgEAACAQQCAwEAAAAAAAAAAAABAgADERIhBBMiQWEy/9oACAEBAAY/AncJsfLmWfLj5BmDVD4alGvUqF8xcbBsJ3KrY4nZ9whR+NnEWPyLQXjE06I60uANSojAEKbCZKoBgcswJHqf/8QAHxAAAgICAgMBAAAAAAAAAAAAAREAMSFBkbFRYXHR/9oACAEBAAE/IRDew5A88vmDKUB7WyQflw6GoRpAOx+womMhInte6jQtAGRp3MqOA4tbEAVPi0oVoOwLgG6WFXU//9oADAMBAAIAAwAAABC//wDA/8QAGREBAAMBAQAAAAAAAAAAAAAAAQARoSEx/9oACAEDAQE/EGc9psUt3PAmyf/EABsRAQACAgMAAAAAAAAAAAAAAAEAETHRUaHB/9oACAECAQE/EMAJHi/IAOhuAEMBDFVun//EAB0QAQEBAAMBAAMAAAAAAAAAAAERIQAxQWFRgaH/2gAIAQEAAT8QNHQ0thCYiloaOs45U5+TAnunpJfvBFvkrec4bXdcR5XpB9Q01C6F429mEsEJNQU8hTzkNxamcoWS9zl7nIaJfrz8evCtSUZFWPynEk+wanep/vP/2Q=="},"backgroundColor":"transparent","images":{"fallback":{"src":"/static/45864dedb2df27fac5309021c08d30f4/09e58/Profile.jpg","srcSet":"/static/45864dedb2df27fac5309021c08d30f4/b6a8b/Profile.jpg 443w,\\n/static/45864dedb2df27fac5309021c08d30f4/2a4dd/Profile.jpg 885w,\\n/static/45864dedb2df27fac5309021c08d30f4/09e58/Profile.jpg 1770w","sizes":"(min-width: 1770px) 1770px, 100vw"},"sources":[{"srcSet":"/static/45864dedb2df27fac5309021c08d30f4/005ee/Profile.avif 443w,\\n/static/45864dedb2df27fac5309021c08d30f4/245c8/Profile.avif 885w,\\n/static/45864dedb2df27fac5309021c08d30f4/0718d/Profile.avif 1770w","type":"image/avif","sizes":"(min-width: 1770px) 1770px, 100vw"},{"srcSet":"/static/45864dedb2df27fac5309021c08d30f4/63605/Profile.webp 443w,\\n/static/45864dedb2df27fac5309021c08d30f4/45475/Profile.webp 885w,\\n/static/45864dedb2df27fac5309021c08d30f4/3bb10/Profile.webp 1770w","type":"image/webp","sizes":"(min-width: 1770px) 1770px, 100vw"}]},"width":1770,"height":1770}')}}]);
//# sourceMappingURL=component---src-pages-index-js-c14566145952c9c50545.js.map