let $mdOverlay=$(".md-overlay"),$mdSearchOverlay=$(".md-search__overlay");function ScrollToTop(){$("html").animate({scrollTop:0},250)}$("header").click(function(e){e.target!==this&&"md-header-nav__topic"!==e.target.className&&"md-header-nav__source"!==e.target.className||ScrollToTop()});let touchStartPosition={x:0,y:0};$("body").on({touchstart:function(e){touchStartPosition={x:e.touches[0].clientX,y:e.touches[0].clientY}},touchend:function(e){if(Math.abs(e.changedTouches[0].clientY-touchStartPosition.y)<100){let t=e.changedTouches[0].clientX-touchStartPosition.x;touchStartPosition.x<50?t>100&&($mdSearchOverlay.css("opacity")>0?$mdSearchOverlay.click():"0"===$mdOverlay.css("opacity")&&$mdOverlay.click()):t<-100&&$mdOverlay.css("opacity")>0&&$mdOverlay.click()}}}),document.getElementsByClassName("md-main")[0].style.opacity="1",0===webUrl.indexOf("https:")&&"serviceWorker"in navigator&&navigator.serviceWorker.register("./service-worker.js",{scope:"./"}).then(function(){isHomepage&&isAndroidBrowser&&$("#qrcodeForAndroid").hide()}).catch(function(e){console.error("Error during service worker registration:",e)});