title: CraftingRecipes解析
#CraftingRecipes解析

>本教程由百度贴吧-[销锋镝铸](http://tieba.baidu.com/home/main/?un=销锋镝铸){: target="\_blank" }编写

!!! warning ""
    请务必先阅读[XML教程][1]

##Recipe元素
该文件根元素`#!xml <Recipes>`下的多个子元素的元素名称均用来表达分类，这些“分类”元素下的众多元素名为`Recipe`的每一个元素，都存储着一个游戏中的合成表
下面是其中一个元素名为`Recipe`的元素：
```xml
<Recipe Result="StonePickaxeBlock" ResultCount="1" RequiredHeatLevel="0" a="stick" b="cobblestone" Description="Make a stone tool">
    "bbb"
    " a"
    " a"
</Recipe>
```
属性详解：
<style>
	article th, td{
		vertical-align:middle !important;
	}
</style>
<table style="table-layout:fixed; min-width:50rem;">
	<thead>
		<tr>
			<th style="width: 8rem;word-break: break-all">属性名</th>
			<th style="width: 8rem;">翻译</th>
			<th>详解</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Result</td>
			<td>产物</td>
			<td>属性值为<code>BlocksData.txt</code>中一个方块的<code>Class Name(类名)</code></td>
		</tr>
		<tr>
			<td>ResultCount</td>
			<td>产量</td>
			<td>要求属性值小于该方块的<code>MaxStacking(最大背包堆叠)</code></td>
		</tr>
		<tr>
			<td>ResultCount</td>
			<td>产量</td>
			<td>要求属性值小于该方块的<code>MaxStacking(最大背包堆叠)</code></td>
		</tr>
		<tr>
			<td>Required<br />HeatLevel</td>
			<td>需求燃料等级</td>
			<td>若属性值等于0，可在背包和合成台中合成，不可在火炉中制作<br />
			若大于0，只能在火炉中合成，且燃料方块的<code>FuelHeatLevel</code>需要大于等于该属性值</td>
		</tr>
		<tr>
			<td>a、b等</td>
			<td>原料<br />a、b等</td>
			<td>属性值为该方块的<code>CraftingId(合成标识)</code></td>
		</tr>
		<tr>
			<td>Description</td>
			<td>描述</td>
			<td>在游戏中合成表查看界面显示的描述</code></td>
		</tr>
	</tbody>
</table>
该元素的文本部分是原料的摆放方式，一些要注意的地方：

* 空格代表空白，该位置不能放置原料
* 对于`Required(需求燃料等级)`的属性值为0的合成表，如果纵行与横列数均小于3，那么它既能在背包也能在合成台中合成

还有一种合成表多了以下两种属性
<table style="table-layout:fixed; min-width:50rem;">
	<thead>
		<tr>
			<th style="width: 8rem;word-break: break-all">属性名</th>
			<th style="width: 8rem;">翻译</th>
			<th>详解</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Remains</td>
			<td>剩余</td>
			<td>和<code>Result(产物)</code>类似，可以看作是第二产物</td>
		</tr>
		<tr>
			<td>Remains<br />Count</td>
			<td>剩余数</td>
			<td>要求属性值小于该方块的<code>MaxStacking(最大背包堆叠)</code></td>
		</tr>
	</tbody>
</table>

[1]: xml_tutorial.md