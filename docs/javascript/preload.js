const navigatorVersion = "3.0.0";
const isMobile = (/(windows phone|symbianos|android|mobile|playbook|ipad|iphone|ipod)/i).test(navigator.userAgent);
const isAndroidBrowser = isMobile?((/android/i).test(navigator.userAgent)):false;
const webUrl = window.location.href;
const isHomepage = webUrl.includes("/www/index.html");