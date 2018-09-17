title: XML教程
#XML教程

>本教程由百度贴吧-[销锋镝铸](http://tieba.baidu.com/home/main/?un=销锋镝铸){: target="\_blank" }编写，主要参考[XML教程 | 菜鸟教程](http://www.runoob.com/xml/xml-tutorial.html){: target="\_blank" }

##简介
XML是可扩展标记语言文件的扩展名（后缀），是一种用于标记电子文件使其具有结构性的标记语言，被用于传输与存储数据。`Content.pak`中多个重要文件都是XML文件，因此需要深刻地理解这种文件。

##树结构
先看以下XML实例
```xml linenums="1"
<bookstore>
	<book category="Fantasy">
		<title lang="en">The Chronicles of Narnia</title>
		<author>Clive Staples Lewis</author>
		<year>1950</year>
		<series order="7" />
	</book>
	<book category="SF" selected>
		<title lang="zh">The Three Body Problem</title>
		<author>Big Liu</author>
		<year>2008</year>
		<series order="3" />
	</book>
</bookstore>
```
此实例中，第1行的`#!xml <bookstore>`被称作 **根元素**，第2行`#!xml <book category="Fantasy">`和第8行`#!xml <book category="SF" selected>`是根元素的两个 **子元素**，这两个子元素被包含在根元素的 **开始标签**`#!xml <bookstore>`到 **结束标签**`#!xml </bookstore>`之间  
同理，一个`#!xml <book …>`元素有`#!xml <title …>`、`#!xml <author …>`、`#!xml <year …>`、`#!xml <series …>`四个子元素；对于这些子元素来说，`#!xml <book …>`则是它们的父元素，又因为它们拥有相同的父元素，所以它们互称 **同胞**  
<br />
某元素的父元素，或者父元素的父元素，又或者更上级，都可以被称作这个元素的 **祖先**，例如`#!xml <bookstore>`和`#!xml <book category="Fantasy">`都是`#!xml <title lang="en">`的祖先  
同理，某元素的子元素，或者其子元素的子元素，又或者更下级，都可以被称作这个元素的 **后代**

##元素
元素指的是从开始(标签)到结束(标签)的部分 {>>上一节为方便表述，在说明时只取了其中的开始标签<<}

###必须包含
1. 开始标签和{==对应的==}结束标签，或 **自结束标签**
    * `标签` 由<code class="codehilite"><span class="nt">&lt;</span></code>开头、中间内容、<code class="codehilite"><span class="nt">&gt;</span></code>结尾组成
    * `开始标签` 特点是标签中没有<code class="codehilite"><span class="nt">/</span></code>，例如上例中的`#!xml <bookstore>`、`#!xml <book category="Fantasy">`等
    * `结束标签` 特点是标签开头是<code class="codehilite"><span class="nt">&lt;/</span></code>，例如上例中的`#!xml </bookstore>`、`#!xml </book>`等
    * `自结束标签` 特点是标签结尾是<code class="codehilite"><span class="nt">/&gt;</span></code>，而开头不是<code class="codehilite"><span class="nt">&lt;/</span></code>，例如上例中的`#!xml <series order="7" />`等。因为它本身只有一个标签，因此无法直接将子元素、文本包含入内
2. 元素名称，紧贴开头<code class="codehilite"><span class="nt">&lt;</span></code>的一段字符，例如`#!xml <book category="SF" selected>`中的<code class="codehilite"><span class="nt">book</span></code>

###不一定包含
1. `属性` 例如上例中`#!xml <book category="SF" selected>`的<code class="codehilite"><span class="na">category=</span><span class="s">&quot;SF&quot;</span></code>和<code class="codehilite"><span class="err">selected</span></code>，其中<code class="codehilite"><span class="na">category</span></code>和<code class="codehilite"><span class="err">selected</span></code>是 **属性名称**，<code class="codehilite"><span class="s">SF</span></code>是属性<code class="codehilite"><span class="na">category</span></code>的 **属性值**。属性一定要有属性名称但不一定要有属性值；当有属性值时，在属性名称后面加上<code class="codehilite"><span class="na">=</span></code>后接放在两个英文引号<code class="codehilite"><span class="s">"</span></code>中间的属性值。多个属性用空格分开
2. `文本` 位于开始标签和结束标签之间的非标签字符，例如上例中`#!xml <year>1950</year>`的`1950`
3. 子元素和后代元素

!!! note "更多"
    想要查看更多关于XML的知识请查看[XML教程 | 菜鸟教程](http://www.runoob.com/xml/xml-tutorial.html){: target="\_blank" }