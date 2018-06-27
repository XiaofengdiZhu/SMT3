title: 正则表达式教程
#正则表达式教程

>本教程由百度贴吧-<a href="http://tieba.baidu.com/home/main/?un=销锋镝铸" target="_blank">销锋镝铸</a>编写

##前言
正则表达式使用单个字符串来描述、匹配一系列符合某个句法规则的字符串。在很多文本编辑器里，正则表达式通常被用来检索、替换那些符合某个模式的文本，注意此功能一般默认是关闭的，需要手动开启  
只要了解了基础的正则表达式知识，就能大大提高批量修改文本的效率  
在多数手机端文本编辑器中，正则表达式功能是缺失或不完整的，如果发现你使用的文本编辑器功能不完整，建议使用PC端的[Sublime Text][1]、[Notepad++][1]  
更加详细的介绍和教程可参考：<a href="https://baike.baidu.com/item/正则表达式" target="_blank">正则表达式_百度百科</a>、<a href="http://www.runoob.com/regexp/regexp-tutorial.html" target="_blank">正则表达式 - 教程 | 菜鸟教程</a>

##常用符号

<style>
	article th, td{
		vertical-align:middle !important;
	}
</style>
<table>
    <thead>
        <tr>
            <th>符号</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>.</td>
            <td>匹配除换行和回车外任意单个字符</td>
        </tr>
        <tr>
            <td>^</td>
            <td>匹配输入字符串的开始位置</td>
        </tr>
        <tr>
            <td>$</td>
            <td>匹配输入字符串的结束位置</td>
        </tr>
        <tr>
            <td>\n</td>
            <td>匹配一个换行符</td>
        </tr>
        <tr>
            <td>\d</td>
            <td>匹配一个数字字符（0~9）</td>
        </tr>
        <tr>
            <td>{n}</td>
            <td>匹配前面一个字符或字符集合确定的n次</td>
        </tr>
        <tr>
            <td>*</td>
            <td>匹配前面的子表达式零次或多次（0~+∞）。例如，zo*能匹配“z”，“zo”以及“zoo”</td>
        </tr>
        <tr>
            <td>[xyz]</td>
            <td>字符集合。匹配所包含的任意一个字符。例如，“[abc]”可以匹配“plain”中的“a”</td>
        </tr>
        <tr>
            <td>[^xyz]</td>
            <td>负值字符集合。匹配未包含的任意字符。例如，“[^abc]”可以匹配“plain”中的“plin”</td>
        </tr>
        <tr>
            <td>(xxx)</td>
            <td>匹配xxx（任意字符串）并获取这一匹配，在替换时写$1~$9即代表获取的第1~9个xxx</td>
        </tr>
        <tr>
            <td>x|y</td>
            <td>匹配x或y。例如，“z|food”能匹配“z”或“food”。“(z|f)ood”则匹配“zood”或“food”</td>
        </tr>
    </tbody>
</table>

##例子
###例一
>批量修改`Database.xml`中所有生物的一个属性值，以攻击抗性为例

查找
```xml
<Parameter Name="AttackResilience" Guid="(.*)" Value=".*" Type="(.*)" />
```
替换
```xml
<Parameter Name="AttackResilience" Guid="$1" Value="xxx" Type="$2" />
```
xxx为要替换成的属性值

###例二
>批量修改`Blocksdata.txt`中第m个分号 **后面** 的属性值

查找
```
^((([^;\n]*);){m})[^;\n]*
```
替换
```
($1)xxx
```
m为该属性所在行前面的英文分号`;`总数，xxx为要替换成的值

如果只要修改第m个分号后面是特定值的属性值，把查找内容改成：
```
^((([^;\n]*);){m})yyy
```
yyy是特定值

!!! error "特别注意"
    部分只有分号`;`的“空行”在批量修改后需要手动将这些“空行”改回只有分号`;`  
    在2.1版的`blocksdata.txt`中第2、37、64、94、152、154、156、205、207、227行是这样的，其他版本自行确定

!!! hint ""
    除了正则表达式能批量修改`Blocksdata.txt`外，还可以使用[Blocksdata编辑器][2]

[1]: resources.md#_10
[2]: resources.md#_16