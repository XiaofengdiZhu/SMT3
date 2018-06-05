title: Windows基础教程
#Windows基础教程

>本教程由百度贴吧-<a href="http://tieba.baidu.com/home/main/?un=销锋镝铸" target="_blank">销锋镝铸</a>编写

##所需工具
Windows 8.1及以上设备

##获取游戏
###正版途径
<a href="https://www.microsoft.com/zh-cn/store/p/survivalcraft-2/9phc48p58nb2" target="_blank">Survivalcraft2 on Microsoft Store</a>  
3.99美元，支持`支付宝`支付人民币。可能现在已经不能用于Mod开发。

###SC with JS
<a href="https://pan.baidu.com/share/link?shareid=3319882865&uk=2788149454" target="_blank">百度网盘下载</a>  
因为游戏打开时将直接读取安装位置的文件，所以编辑此处文件后重新打开游戏能立即看到效果，非常适合Mod开发，而且可以和正版共存  
>按照安装包内说明安装完成后，通过`开始菜单 - Survivalcraft 2 Cracked`打开游戏

!!! warning ""
    以下和之后教程中的游戏Windows版都是[SC with JS][1]

##修改、增加文件
游戏的所有文件在安装目录的`SurvivalcraftAppX`文件夹，如下图：  

<img src="../../saiming/windows_1.png" title="SurvivalcraftAppX文件夹" alt="SurvivalcraftAppX文件夹" style="max-width: 80%;margin-left: 10%;">  

部分文件和文件夹说明：  

* &zwnj;`Content/` Content.pak经[SCPaker][2]解包输出的文件夹，可将此文件夹拖拽到`SCPaker.Windows.exe`上打包成`Content.pak`（软件生成）  
* &zwnj;`js/` [SC with JS](#sc-with-js)的JavaScript脚本存放文件夹  
* &zwnj;`Content.pak` 包含游戏数据和资源的简单打包文件，可拖拽到`SCPaker.Windows.exe`上来解包（如上图）  。详细修改教程见[Content解析][3]  
* &zwnj;`Engine.dll` 游戏原作者开发的游戏引擎，一般不需要修改  
* &zwnj;`SCPAK.dll` [SCPaker][2]的依赖文件（编者添加）  
* &zwnj;`SCPaker.Windows.exe` [SCPaker][2]的Windows版主程序（编者添加）  
* &zwnj;`Survivalcraft 2 Cracked`  游戏快捷方式，从开始菜单拖拽进文件夹（编者添加）  
* &zwnj;`Survivalcraft.exe`  游戏主程序，可通过[dnSpy][4]修改“源代码”。详细修改教程见[“源代码”教程][5]  

如果要添加dll文件，可以直接将文件放在`SurvivalcraftAppX`文件夹中，游戏将自动加载  
如果要添加资源文件，例如图片、声音、模型，建议打包进`Content.pak`，详细步骤见[Content解析][3]

##测试和发布
###测试运行
按照以上步骤修改或增加文件进游戏后，通过`开始菜单 - Survivalcraft 2 Cracked`或游戏快捷方式`Survivalcraft 2 Cracked`打开游戏来测试游戏是否可以正常运行，Mod是否生效。  
###出现错误
如果添加、修改exe、dll文件后游戏无法打开，说明你的exe、dll文件存在问题。  
游戏弹出窗口报错，按照报错内容检查你的修改后修复即可。  
对于原因不明的无法运行，比较一般的解决方法是将最后一次正常运行以来的修改全部删除，一点点加回去测试游戏，即可查出是哪一部分导致的问题。
###发布
如果只修改了`Content.pak`，那么可以直接发布此文件，同时该文件可以用在所有平台同大版本的游戏中。  
如果添加、修改了exe、dll文件，建议连同所有未修改的文件打包成安装包一起发布。  
至此，一个Windows平台Mod已制作完成，在最后的发布之前建议您参考[发布范例][6]，祝您的Mod作品人气火热！

[1]: #sc-with-js
[2]: ../tutorial/resources.md#contentpak_1
[3]: content_tutorial.md
[4]: ../tutorial/resources.md#_12
[5]: source_code_tutorial.md
[6]: ../other_tutorial/publication_example.md