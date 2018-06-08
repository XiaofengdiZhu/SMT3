title: Content解析
#Content解析

>本教程由百度贴吧-<a href="http://tieba.baidu.com/home/main/?un=销锋镝铸" target="_blank">销锋镝铸</a>编写  

##前言
在之前的[Android基础教程][1]和[Windows基础教程][2]中，讲到了游戏的安装包或安装目录都存在一个Content.pak，是一个包含游戏 数据（例如方块属性、生物属性、合成表）和 资源（例如图片、声音、模型）的简单打包文件  
可以使用[SCPaker][3]对它解包，也可以用该软件将文件夹打包成新的Content.pak。  Windows版[SCPaker][3]使用教程已在[Windows基础教程][2]中说明，Android版则拥有图形界面，因此该软件使用方法不再此教程复述。  
本教程将对解包出来的文件做一个简单的介绍，针对重要文件的详细说明将在之后的篇章讲解。

##根目录文件

* `BlocksData.txt` 存储了所有方块的大部分属性的类csv文件（以纯文本形式存储表格数据，使用特定的符号分隔字段），可直接用文本编辑器打开并编辑，详细修改教程见[BlocksData解析][4]
  
    !!! note "csv文件"
        以纯文本形式存储表格数据，使用特定的符号分隔字段  
        可使用<a href="待补充" target="_blank">Office Excell</a>打开
      
* `Clothes.xml` 存储了所有衣物数据的xml文件，可直接用文本编辑器编辑，详细修改教程见[Clothes解析][5]

    >所有xml文件均可直接用文本编辑器编辑，建议使用支持代码高亮的文本编辑器

    !!! danger ""
        阅读任何xml文件详细修改教程前请务必阅读[XML教程][6]

* `CraftingRecipes.xml` 存储了所有合成表的xml文件，详细修改教程见[CraftingRecipes解析][7]
* `Database.xml` 存储了
* `Help.xml` 存储了
* `NewWorldNames.txt` 存储了
* `RecoveryProject.xml` 存储了
* `Strings.xml` 存储了

##文件夹


[1]: android_tutorial.md
[2]: windows_tutorial.md
[3]: resources.md#apk
[4]: blocksdata_tutorial.md
[5]: clothes_tutorial.md
[6]: xml_tutorial.md
[7]: craftingrecipes_tutorial.md