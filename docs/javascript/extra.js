let $mdOverlay = $(".md-overlay");
let $mdSearchOverlay = $(".md-search__overlay");

function ScrollToTop() {
    $('html').animate({scrollTop: 0}, 250);
}

$("header").click(function (event) {
    if (event.target === this || event.target.className === "md-header-nav__topic" || event.target.className === "md-header-nav__source") {
        ScrollToTop();
    }
});

let touchStartPosition = {
    x: 0,
    y: 0
};
//触摸打开关闭侧边栏、搜索
$("body").on({
    "touchstart": function (event) {
        touchStartPosition = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        };
    },
    "touchend": function (event) {
        if (Math.abs(event.changedTouches[0].clientY - touchStartPosition.y) < 100) {
            let dx = event.changedTouches[0].clientX - touchStartPosition.x;
            if (touchStartPosition.x < 50) {
                if (dx > 100) {
                    if ($mdSearchOverlay.css("opacity") > 0) {
                        $mdSearchOverlay.click();
                    }
                    else if ($mdOverlay.css("opacity") === "0") {
                        $mdOverlay.click();
                    }
                }
            } else if (dx < -100 && $mdOverlay.css("opacity") > 0) {
                $mdOverlay.click();
            }
        }
    }
});

document.getElementsByClassName("md-main")[0].style.opacity = "1";

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js', {
        scope: './'
    }).catch(function (e) {
        console.error('Error during service worker registration:', e);
    });
}