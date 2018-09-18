title: Database解析
#Database解析

!!! failure "未完成"
    页面未完成，[点击此处](https://lzm956902416.github.io/SMT/database_tutorial.html){: target="\_blank" }前往查看旧版

>本教程由百度贴吧-[销锋镝铸](http://tieba.baidu.com/home/main/?un=销锋镝铸){: target="\_blank" }编写

!!! warning ""
    请务必先阅读[XML教程][1]  
    本教程对应游戏版本2.1

##前言
在之前的[Content解析][2]中，提到：
>`Database.xml` 存储了所有动物（还有主角、船等实体）的大部分属性的xml文件，在“源代码”中新添加的`Subsystem`、`Component`子类也需要在此文件中注册

本教程将详细讲解该文件的文件结构和内容

##识别码和继承码
###识别码
该xml文件中大部分元素都有属性`Guid`，它的中文全名是`全局唯一标识符`，这里为了方便称呼称为 **识别码**；作用是使一个元素具有唯一性，能被被识别，因此 **不可重复**  
`Guid`的属性值常见格式为`xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`，其中每个都`x`是一个十六进制数；也可以不按照格式，任意填写，只要与其他元素的`Guid`属性值不重复都可以  

!!! note "十六进制数"
    十六进制数的基数是16，“逢十六进一”，采用的数码是0、1、2、3、4、5、6、7、8、9、A、B、C、D、E、F，其中A-F分别表示十进制数字10-15

如果在载入游戏时出现`An item with the same key has already been added.`{: style="font-variant: small-caps" }说明出现了重复的识别码，可以使用[GUID验证器][3]来查重。

###继承码
还有相当一部分元素拥有属性`InheritanceParent`，翻译成中文是`继承父辈`，我们一般称它为 **继承码**  
继承码的作用是使该元素继承一个识别码与它相同的元素的所有内容，包括属性、子元素和后代元素，可以在此称它们互为`父子对象`，称被继承的为`父对象`，继承父对象的为`子对象`  
如果父对象的属性名或子元素名在子元素中也有，那么这些属性和子元素不会继承给子对象

!!! warning ""
    `父子对象`非`父子元素`，父子对象在xml树结构上没有上下级关系

###举例说明
```xml
<Folder Name="A" Guid="1950"> <!--识别码为1950的文件夹(Folder)A(此例标识码和继承码不按照标准)-->
    <File Name="a" Author="Peter" /> <!--作者(Author)为Peter的文件(File)a-->
    <File Name="b" Author="Susan" /> <!--作者为Susan的文件b-->
</Folder>
<Folder Name="B" Guid="1956" InheritanceParent="1950">  <!--识别码为1956，继承码为1950的文件夹B-->
    <File Name="a" Author="Edmund" />  <!--作者为Edmund的文件a-->
    <File Name="c" Author="Lucy" />  <!--作者为Lucy的文件c-->
</Folder>
```
从这一段代码可以看出文件夹B将继承来自文件夹A的作者为Peter的文件a和作者为Susan的文件b，但是文件夹B自己已经有作者为Edmund的文件a，所以不会继承来自文件夹A的文件a，那么最终文件夹B的实际代码为
```xml
<Folder Name="B" InheritanceParent="1950">  <!--识别码为1950的文件夹B-->
    <File Name="a" Author="Edmund" />  <!--作者为Peter的文件a-->
    <File Name="b" Author="Susan" />  <!--作者为Edmund的文件b-->
    <File Name="c" Author="Lucy" />  <!--作者为Lucy的文件c-->
</Folder>
```

###默认继承
当一个元素没有继承码属性时，那么它将默认继承其父元素的父对象中相对应元素的内容，实例如下：
```xml
<EntityTemplate Name="AICreature" Guid="3f077159-f492-419b-859a-bb051de6339f" InheritanceParent="bc5be211-c1f8-4e50-9ffb-4fde625d2692">
    <MemberComponentTemplate Name="Mount" Guid="d7655ac3-4c88-4e89-8018-83155cd7bfbc" InheritanceParent="d0b14127-39ce-4490-af00-fb4111e9c51e">
        <Parameter Name="DismountOffset" Guid="3be6ca1c-17c5-4fd7-ad58-6f52d9651188" Value="1.5,0.3,0" Type="Vector3" />
    </MemberComponentTemplate>
    ...
</EntityTemplate>
...
<EntityTemplate Name="LandAnimal" Guid="e4275171-a39f-413f-8888-4c472868364d" InheritanceParent="3f077159-f492-419b-859a-bb051de6339f">
    <MemberComponentTemplate Name="Mount" Guid="d7855ac3-4c88-4e86-8018-83155cd7bfbc">
        <Parameter Name="MountOffset" Guid="3b86ca1c-1765-4fd7-ad58-6f52d9651188" Value="0,1.35,0" Type="Vector3" />
    </MemberComponentTemplate>
    ...
</EntityTemplate>
```
从实例中可以看到，`LandAnimal`的父对象是`AICreature`，那么`LandAnimal`的子元素`Mount`将继承得到`AICreature`的子元素`Mount`的子元素`DismountOffset`

##根元素Database
`Database.xml`文件的根元素`Database`及其子元素如下所示，以下将对每个子元素一一说明解析
```xml
<Database>
    <DatabaseObjectTypes>…</DatabaseObjectTypes>
    <Assemblies>…</Assemblies>
    <DatabaseObjects RootGuid="2c273f6a-efce-4bf1-a8ae-e3aea7ffb75c">…</DatabaseObjects>
    <GridViewPresets>…</GridViewPresets>
    <UserTypes />
</Database>
```

###DatabaseObjectTypes
这一元素可以看作是`DatabaseObjects`元素的层级说明，说明每一个层级可以有什么子元素等，以其中两个个子元素为例  
```xml
    <DatabaseObjectType Name="ComponentTemplate" DefaultInstanceName="Component" 
        IconName="ComponentTemplate" Order="6" SupportsValue="False" 
        MustInherit="False" NameLengthLimit="256" SaveStandalone="False" 
        AllowedNestingParents="Root,Folder" AllowedInheritanceParents="ComponentTemplate" 
        NestedValueType="Parameter" />
    <DatabaseObjectType Name="MemberComponentTemplate" DefaultInstanceName="MemberComponent" 
        IconName="MemberComponentTemplate" Order="7" SupportsValue="False" 
        MustInherit="True" NameLengthLimit="256" SaveStandalone="False" 
        AllowedNestingParents="EntityTemplate" AllowedInheritanceParents="ComponentTemplate" 
        NestedValueType="Parameter" />
```
属性详解：  
<style>
    article th, td{
        vertical-align:middle !important;
        word-break: break-all;
    }
</style>
<table style="table-layout:fixed; min-width:54rem;">
    <thead>
        <tr>
            <th style="width: 10rem;word-break: break-all;">属性名</th>
            <th style="width: 8rem;">翻译</th>
            <th>详解</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Name</td>
            <td>名字</td>
            <td>(作为<code>Template模板</code>)出现的元素名</td>
        </tr>
        <tr>
            <td>Default<br />Instance<br />Name</td>
            <td>默认实例名称</td>
            <td>作为<code>Instance实例</code>出现的元素名。<br />
                模板只写在<code>Database.xml</code>，而实例则是在游戏运行时由模板创建而来，最后保存到存档的<code>Project.xml</code>中
            </td>
        </tr>
        <tr>
            <td>IconName</td>
            <td>图标名字</td>
            <td>作用不明</td>
        </tr>
        <tr>
            <td>Order</td>
            <td>保存次序</td>
            <td>表示元素名为<code>Name</code>的元素（以下简称<code>Name元素</code>）在游戏保存时的次序，数字越小越先保存，目的是防止xml树结构错误</td>
        </tr>
        <tr>
            <td>Supports<br />Value</td>
            <td>是否支持<code>Value(值)</code>属性</td>
            <td>Name元素是否能够拥有属性<code>Value(值)</code><br />
                当这个元素拥有<code>Value</code>属性时，还需要有对应的<code>Type(数据类型)</code>属性</td>
        </tr>
        <tr>
            <td>MustInherit</td>
            <td>是否必须继承</td>
            <td>Name元素是否必须拥有属性<code>InheritanceParent(继承码)</code></td>
        </tr>
        <tr>
            <td>Name<br />LengthLimit</td>
            <td>名字长度限制</td>
            <td>Name元素的<code>Name</code>属性的字节数限制，属性值都是256</td>
        </tr>
        <tr>
            <td>Save<br />Standalone</td>
            <td>是否单独保存</td>
            <td>作用不明</td>
        </tr>
        <tr>
            <td>Allowed<br />Nesting<br />Parents</td>
            <td>允许嵌入的父元素</td>
            <td>Name元素的父元素只能是该属性值之一</td>
        </tr>
        <tr>
            <td>Allowed<br />Inheritance<br />Parents</td>
            <td>允许继承的父对象</td>
            <td>Name元素继承的父对象只能是该属性值之一</td>
        </tr>
        <tr>
            <td>Nested<br />ValueType</td>
            <td>嵌套值类型</td>
            <td>除<code>Name</code>属性值为<code>Parameter(参数)</code>的元素外，该属性值都是<code>Parameter</code></td>
        </tr>
    </tbody>
</table>

###Assemblies
作用不明，将所有子元素删除后游戏仍能正常运行

###DatabaseObjects
该元素是整个`Database.xml`最重要的一部分，如下代码所示，以下将针对每个`Folder(文件夹)`做说明
```xml
<DatabaseObjects RootGuid="2c273f6a-efce-4bf1-a8ae-e3aea7ffb75c">
    <Folder Name="Entities" Guid="5fcdf35f-7001-442c-883e-e0502b15d291">
        <Folder Name="Creatures" Guid="beb2de3c-1a77-4950-b74f-9dd470f751fe">… </Folder>
        <EntityTemplate Name="Chest" Guid="08550017-af17-4955-81fa-aafaf97b92bd">…</EntityTemplate>
        …<!-- 各种BlockEntity(方块实体) -->
        <EntityTemplate Name="Furnace" Guid="f4a43056-d37d-455f-9a43-803260a915a9">…</EntityTemplate>
    </Folder>
    <Folder Name="Subsystems" Guid="75acb50b-fb75-4c85-af38-a0fb51a9eb90">…</Folder>
    <Folder Name="Components" Guid="766da18a-636a-4a88-803c-4462aed106f3">…</Folder>
    <Folder Name="Projects" Guid="aec7b5f9-de96-4ef0-8b6c-4a9e3b021ddf">…</Folder>
    <Folder Name="Abstract" Guid="c6ba6a30-5042-4d3d-9bea-199cd4acc3fa">…</Folder>
</DatabaseObjects>
```

####Entities
在上面的代码中已经能够看到，它包含一个`Creatures(生物)`文件夹和一些单独列出的`EntityTemplate(实体模板)`

#####EntityTemplate
先来说说这些单独列出的实体模板，它包括：

* 类似生物
    * `IntroShip(介绍船)`
    * `Boat(小船)`
* BlockEntity(方块实体)类型
    * `Chest(箱子)`
    * `Dispenser(发射器)`
    * `CraftingTable(合成台)`
    * `Furnace(火炉)`  

可以看出，它们和生物不太一样，但也都是实体

!!! hint "实体和Component"
    实体的一般特征是具有一个或多个`Component`，可以认为实体是`Component`的载体  

#####Creatures
该文件夹下面还包含以下三个文件夹：

* `Abstract(摘要)` 不能被实例化的生物摘要{>>翻译可能不够准确<<} ，用于被下面的`Animals(动物)`文件夹内的实体继承，有诸如`Bird(鸟)`、`LandAnimal(地面生物)`、`Fish(鱼)`等实体模板。在下面的生物继承导图中是紫色边框。
* `Animals(动物)` 除`Player玩家`外所有动物的实体模板都在这个文件夹内。一般修改特定动物数据或添加新动物都在这个文件夹内进行；如果要修改一组生物，可以修改它们的共同父对象或共同父对象的父对象……
* `Players(玩家)` 顾名思义，玩家的实体模板在这个文件夹内，包括`FemalePlayer(女性玩家)`和`MalePlayer(男性玩家)`

具体一个实体模板里的子元素在此不详细解析，可以参考[中文版Database.xml 1.25][3]

######生物继承导图
![点击查看大图](../saiming/database_1.png){: title="点击查看大图" style="max-height: 600px; cursor: pointer;" onclick="openPhotoSwipe(0);" }  
点击图片查看大图，或[点击此处下载](http://pan.baidu.com/share/link?shareid=68742967&uk=2788149454){: target="\_blank" }
{: style="text-align: center;" }

####Subsystems
所有要被加载的`Subsystem`都在这个文件夹

####Components
所有要被加载的`Component`都在这个文件夹

!!! hint "Component和Subsystem"
    `Component`能被多个实体各自拥有一个，独立运行；相对的，一个`Subsystem`在游戏运行时只会被实例化一个

####Projects
详细说明见下一小节

####Abstract
该文件夹的子元素`SubsystemTemplate`和`ComponentTemplate`分别是上面所有其他`SubsystemTemplate`和`ComponentTemplate`的父对象；`ProjectTemplate`则是上一节的唯一子元素的父对象  
此处的`ProjectTemplate`相当于是包含了游戏进入存档时所有真正要使用的`Subsystem`，而上面的`Subsystems`文件夹只是载入游戏时预先加载和设定相关参数；所以如果要添加`Subsystem`，在上面的`Subsystems`文件夹和该文件夹都需要将它“注册”

###GridViewPresets
作用不明，将该元素删除后游戏仍能正常运行

###UserTypes
作用不明，将该元素删除后游戏仍能正常运行

##例子
详见[动物相关][4]例子

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
[2]: content_tutorial.md#_2
[3]: resources.md#_16
[4]: ../other_tutorial/animal_example.md