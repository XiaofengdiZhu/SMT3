title: Database解析
#Database解析

!!! failure "未完成"
    页面未完成，[点击此处](https://lzm956902416.github.io/SMT/database_tutorial.html){: target="\_blank" }前往查看旧版

>本教程由百度贴吧-[销锋镝铸](http://tieba.baidu.com/home/main/?un=销锋镝铸){: target="\_blank" }编写

!!! warning ""
    请务必先阅读[XML教程][1]



![点击查看大图](../saiming/database_1.png){: title="点击查看大图" style="max-height: 600px;" onclick="openPhotoSwipe(0);" }  
点击图片查看大图，或[点击此处下载](http://pan.baidu.com/share/link?shareid=68742967&uk=2788149454){: target="\_blank" }
{: style="text-align: center;" }

<!-- photoswipe查看大图插件 -->
<link rel="stylesheet" href="../../assets/photoswipe/photoswipe.css">
<script src="../../assets/photoswipe/photoswipe.min.js"></script> 
<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
        <div class="pswp__container">
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
            <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
            <div class="pswp__top-bar">
                <div class="pswp__counter"></div>
                <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
                <button class="pswp__button pswp__button--share" title="Share"></button>
                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
                <div class="pswp__preloader">
                    <div class="pswp__preloader__icn">
                      <div class="pswp__preloader__cut">
                        <div class="pswp__preloader__donut"></div>
                      </div>
                    </div>
                </div>
            </div>
            <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
                <div class="pswp__share-tooltip"></div> 
            </div>
            <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
            </button>
            <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
            </button>
            <div class="pswp__caption">
                <div class="pswp__caption__center"></div>
            </div>
          </div>
        </div>
</div>
<script>
    function openPhotoSwipe(image_index) {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var items = [ {
            src: "../../saiming/database_1.png",
            w: 1105,
            h: 3064
        } ];
        var options = {
            index: image_index,
            bgOpacity: 0.7,
            showHideOpacity: true,
            shareButtons: [
                { id: 'download', label: '保存图片', url: '{{raw_image_url}}', download: true }
            ]
        };
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };
</script>

[1]: xml_tutorial.md