title: Clothes解析
#Clothes解析

>本教程由百度贴吧-<a href="http://tieba.baidu.com/home/main/?un=销锋镝铸" target="_blank">销锋镝铸</a>编写

!!! warning ""
    请务必先阅读[XML教程][1]

##ClothingData元素
该文件根元素`#!xml <Clothes>`下的众多元素名为`ClothingData`的每一个子元素，都存储着游戏中一件衣物
下面是其中一个元素名为`ClothingData`的元素：
```xml
  <ClothingData Index="0" DisplayName="Old Pants" Slot="Legs"
    ArmorProtection="0.1" Sturdiness="25" Insulation="2.0"
    MovementSpeedFactor="1" SteedMovementSpeedFactor="1" 
    DensityModifier="0.0" IsOuter="False" CanBeDyed="True" 
    Layer="1" PlayerLevelRequired="1" 
    TextureName="Textures/Clothing/OldPants" ImpactSoundsFolder="" 
    Description="Old pants you wore when being abandoned on this land. Can be dyed. Almost no protection. Weak insulation." />
```
属性详解：
<style>
	article th, td{
		vertical-align:middle !important;
	}
</style>
<table style="table-layout:fixed; min-width:54rem;">
    <thead>
        <tr>
            <th style="width: 10rem;word-break: break-all">属性名</th>
            <th style="width: 8rem;">翻译</th>
            <th>详解</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Index</td>
            <td>序号</td>
            <td>创造模式物品栏中的显示顺序</td>
        </tr>
        <tr>
            <td>DisplayName</td>
            <td>显示名称</td>
            <td>游戏中玩家能够看到的衣物名字</td>
        </tr>
        <tr>
            <td>Slot</td>
            <td>类别</td>
            <td>有<code>Torso(上衣)</code>，<code>Legs(裤子)</code>，<code>Head(帽子)</code>，<code>Feet(鞋子)</code>四类</td>
        </tr>
        <tr>
            <td>ArmorProtection</td>
            <td>护甲值</td>
            <td>直接提升玩家的<code>AttackResistance(攻击抗性)</code></td>
        </tr>
        <tr>
            <td>Sturdiness</td>
            <td>耐久度</td>
            <td>被攻击属性值次数后消失</td>
        </tr>
        <tr>
            <td>Insulation</td>
            <td>保暖</td>
            <td>属性值越大越保暖</td>
        </tr>
        <tr>
            <td>Movement<br />SpeedFactor</td>
            <td>步行速度增幅</td>
            <td>使玩家移动速度乘以该属性值</td>
        </tr>
        <tr>
            <td>SteedMovement<br />SpeedFactor</td>
            <td>骑行速度增幅</td>
            <td>使玩家所骑坐骑移动速度乘以该属性值</td>
        </tr>
        <tr>
            <td>DensityModifier</td>
            <td>密度增幅</td>
            <td>使玩家密度加上该属性值</td>
        </tr>
        <tr>
            <td>IsOuter</td>
            <td>是否<br />最外层</td>
            <td>或理解为是否不能在其上叠加更多衣物</td>
        </tr>
        <tr>
            <td>CanByDyed</td>
            <td>能否染色</td>
            <td>若此属性值为<code>true</code>那么会自动加上染色后的该衣物和对应合成表</td>
        </tr>
        <tr>
            <td>Layer</td>
            <td>层级</td>
            <td>衣物不能叠加在其他Layer属性值比它的Layer属性值更小的衣物上</td>
        </tr>
        <tr>
            <td>TextureName</td>
            <td>贴图名称</td>
            <td>该衣物的贴图文件路径</td>
        </tr>
        <tr>
            <td>ImpactSounds<br />Folder</td>
            <td>碰撞声音文件夹</td>
            <td>发生碰撞时发出的声音文件路径</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>描述</td>
            <td>在游戏中方块查看界面显示的描述</td>
        </tr>
    </tbody>
</table>



[1]: xml_tutorial.md