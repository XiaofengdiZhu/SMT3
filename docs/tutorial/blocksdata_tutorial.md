title: BlocksData解析
#BlocksData解析

>本教程由百度贴吧-[销锋镝铸](http://tieba.baidu.com/home/main/?un=销锋镝铸){: target="\_blank" }、[大王派](http://tieba.baidu.com/home/main/?un=大王派){: target="\_blank" }、[freeze丶果果](http://tieba.baidu.com/home/main/?un=freeze丶果果){: target="\_blank" }编写  

!!! warning ""
    本教程对应游戏版本2.1，表格部分建议手机用户横屏查看

##前言
在之前的[Content解析][1]中，提到：
>`BlocksData.txt` 存储了所有方块的大部分属性的类csv文件（以纯文本形式存储表格数据，使用特定的符号分隔字段），可直接用文本编辑器打开并编辑
  
!!! note "csv文件"
    以纯文本形式存储表格数据，使用特定的符号（该文件`;`）分隔字段  
    可使用[Office Excel](https://products.office.com/zh-cn/excel){: target="\_blank" }打开

本教程将详细讲解该文件的文件结构和内容

##文件结构
`BlocksData.txt` 可以看作是一张表格，以文本行分割表格横行，以`;`分割表格纵列  
**例**：现有部分文件内容如下：

```
Class Name;DefaultDisplayName;DefaultCategory
;;
AirBlock;Air;Terrain
BedrockBlock;Bedrock;Terrain
```

可以看作是以下表格：

| Class Name<br />(类名) | DefaultDisplayName<br />(默认显示名称) | DefaultCategory<br />(默认类别) |
| :-: | :-: | :-: |
| (空白) | (空白) | (空白) |
| AirBlock | Air | Terrain |
| BedrockBlock | Bedrock | Terrain |

其中第一行是表头，指明表格每一列是方块的什么属性，之后每一非空行是一个个方块的具体数据，而非空白行一般用来分开`DefaultCategory（默认类别）`不同的方块  

??? hint "翻译软件无法翻译方块属性名称？"
    属性名称使用的命名法叫做`驼峰式命名法`，以首字母大写来开始新单词，在使用翻译软件翻译时。需要手动在大写字母前加上空格，例如`DefaultDisplayName` → `Default Display Name`，才能被翻译软件识别为单词进行翻译

##数据类型
在游戏的“源代码”中指定了方块的每一个属性的数据类型，使用到的数据类型如下：

<style>
	article table{
		line-height: 1.3rem;
	}
	article th, td{
		padding: 0.6rem !important;
		vertical-align:middle !important;
	}
	article thead tr{
		height: 4rem;
	}
	#divTableBlocksdata .md-typeset__scrollwrap {
    	margin: 0;
	}
</style>
<table style="table-layout:fixed; max-width:54rem; width: 100%;">
    <thead>
        <tr>
            <th style="width: 6.4rem;">数据类型</th>
            <th style="width: 6rem;">中文名</th>
            <th>数据范围</th>
        </tr>
    </thead>
    <tbody>
        <tr> <td>bool</td> <td>布尔值</td> <td>TRUE（是）、FALSE（否）</td> </tr>
        <tr> <td>int</td> <td>整数</td> <td>-2147483648 到 2147483647的整数，或Infinity(无穷大)</td> </tr>
        <tr> <td>float</td> <td>浮点数</td> <td>±3.40282 * 10^38之间的整数和小数，或Infinity(无穷大)</td> </tr>
        <tr> <td>string</td> <td>字符串</td> <td>任意文本，除<code>;</code></td> </tr>
        <tr> <td>Vector3</td> <td>三维向量</td> <td>逗号分隔的三个float(浮点数)</td> </tr>
        <tr> <td>BlockDig<br />Method</td> <td>方块挖掘方法</td> <td>None(无)、Shovel(铲子)、Quarry(镐子)、Hack(斧头)</td> </tr>
        <tr> <td>FoodType</td> <td>食物类型</td> <td>None(无)、Meat(肉)、Fish(鱼肉)、Fruit(水果)、Grass(草)、Bread(面包)</td> </tr>
    </tbody>
</table>

##方块属性

!!! note "说明"
    如要修改`DirtBlock(泥土方块)`的`MaxStacking(最大背包堆叠)`，此属性在下表中序号是37；在文本编辑器中打开`Blocksdata.txt`后搜索`DirtBlock`，修改其所在行的第37个分号之前的数值即可  
    要快速定位分号位置和批量修改多个方块的属性，可参考[正则表达式教程][2],或使用[Blocksdata编辑器][3]  
    为方便表格中自动换行，属性名中的大写字母前加上了空格

!!! hint ""
    点击表头展开/收起表格

<div id="divTableBlocksdata" style="max-height: 14.6rem; overflow-y: hidden; transition: max-height 0.6s ease; margin: 1rem -1.6rem;">
<table style="table-layout:fixed; min-width:54rem; width: 100%;">
    <thead id="theadBlocksdata">
        <tr>
            <th style="width: 2.5rem;"></th>
            <th style="width: 6rem;">数据类型</th>
            <th style="width: 8rem;">属性名</th>
            <th style="width: 6rem;">中文名</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody id="tbodyBlocksdata">
        <tr> <td></td> <td>string</td> <td>Class Name</td> <td>类名</td> <td>“源代码”中该方块的[Class(类)](http://www.runoob.com/csharp/csharp-class.html){: target="\_blank" }的名称，例如方块被破坏和动物死亡时的掉落方块使用该属性，建议不要修改现存方块的该属性</td> </tr>
        <tr> <td></td> <td>string</td> <td>Default Display Name</td> <td>默认显示名称</td> <td>游戏中玩家能够看到的方块名字</td> </tr>
        <tr> <td></td> <td>string</td> <td>Default Category</td> <td>默认类别</td> <td>帮助和创造模式物品栏中的方块类别，可自定义新类别</td> </tr>
        <tr> <td></td> <td>string</td> <td>Behaviors</td> <td>行为</td> <td>方块行为，多个行为需用逗号<code>,</code>隔开，详情见
                <a href="#_10">本章方块行为</a>
            </td> </tr>
        <tr> <td></td> <td>int</td> <td>Display Order</td> <td>显示顺序</td> <td>创造模式物品栏中该方块的显示顺序，越小越靠前</td> </tr>
        <tr> <td></td> <td>Vector3</td> <td>Default Icon Block Offset</td> <td>默认图标方块偏移</td> <td>方块图标的位置偏移</td> </tr>
        <tr> <td></td> <td>Vector3</td> <td>Default Icon View Offset</td> <td>默认图标视角偏移</td> <td>在物品栏显示的位置偏移</td> </tr>
        <tr> <td></td> <td>float</td> <td>Default Icon View Scale</td> <td>默认图标视角大小缩放</td> <td>在物品栏里显示的大小缩放倍数</td> </tr>
        <tr> <td></td> <td>float</td> <td>First Person Scale</td> <td>第一人称大小缩放</td> <td>第一人称视角下手持物品的大小缩放倍数</td> </tr>
        <tr> <td></td> <td>Vector3</td> <td>First Person Offset</td> <td>第一人称位置偏移</td> <td>第一人称视角下手持物品的位置偏移</td> </tr>
        <tr> <td></td> <td>Vector3</td> <td>First Person Rotation</td> <td>第一人称物品旋转</td> <td>第一人称视角下手持物品的旋转角度</td> </tr>
        <tr> <td></td> <td>float</td> <td>In Hand Scale</td> <td>在手里的大小缩放</td> <td>第三人称视角下手持物品的大小缩放倍数</td> </tr>
        <tr> <td></td> <td>Vector3</td> <td>In Hand Offset</td> <td>在手里的位置偏移</td> <td>第三人称视角下手持物品的位置偏移</td> </tr>
        <tr> <td></td> <td>Vector3</td> <td>In Hand Rotation</td> <td>在手里时旋转角度</td> <td>第三人称视角下手持物品的旋转角度</td> </tr>
        <tr> <td></td> <td>string</td> <td>Crafting Id</td> <td>合成标识</td> <td>在<code>CraftingRecipes.xml</code>中作为合成原料时方块标识</td> </tr>
        <tr> <td></td> <td>int</td> <td>Default Creative Data</td> <td>默认创造模式数据</td> <td>小于0不提供，反之创造模式提供data为该属性值的方块。data通常包含方块朝向、染色等数据</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Collidable</td> <td>是否可碰撞</td> <td>主角或动物等是否可碰撞该方块，为False时则可穿过</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Placeable</td> <td>是否可放置</td> <td>通常将该属性原本为FALSE的方块的该属性改成TRUE后虽然可以放置，但需要修改“源代码”才能显现</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Digging Transparent</td> <td>被挖掘时是否穿过</td> <td>向该方块挖掘时是否穿过它挖掘它后面的方块</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Placement Transparent</td> <td>放置时是否穿过</td> <td>将方块指向该方块放置时是否穿过它放置到它后面的方块上</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Default Is Interactive</td> <td>默认是否可交互</td> <td><code>Electrics(电器)</code>类方块此项为TRUE，但改了没任何效果</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Editable</td> <td>是否可编辑</td> <td>例如<code>MemoryBankBlock(内存条)</code>、<code>TruthTableCircuitBlock(真值表)</code>该属性值为TRUE</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Non Duplicable</td> <td>是否不可复制</td> <td>此项为TRUE时，创造模式一个该方块占用一个背包格子，例如例如<code>MemoryBankBlock(内存条)</code>、<code>TruthTableCircuitBlock(真值表)</code></td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Gatherable</td> <td>是否可收集</td> <td>是否可被走过的玩家捡起来</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Has Collision Behavior</td> <td>是否有碰撞动作</td> <td>是否触发该方块所有行为中的<code>OnCollide(当碰撞)</code>函数</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Kills When Stuck</td> <td>卡住时杀死</td> <td>“源码”中未发现该属性被使用，可能已被废弃</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Fluid Blocker</td> <td>能否阻挡流体</td> <td>流体包括水和岩浆。空气此属性为TRUE时它们就不会乱流了</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Transparent</td> <td>是否透明</td> <td>决定多个功能：方块材质本身透明部分绘制成透明或黑色；是否被下落方块压碎。还会影响地形生成，例如应该玄武岩层生成的方块此属性为”TRUE”时会刷新到地面、<code>WaterBlock(水)</code>的此属性为“FALSE”时大海表面覆盖满<code>GrassBlock(草)</code></td> </tr>
        <tr> <td></td> <td>int</td> <td>Default Shadow Strength</td> <td>阴影强度</td> <td>和<code>IsTransparent(是否透明)</code>属性关联，<code>IsTransparent</code>为TRUE时该属性需为非负整数，为FALSE时该属性应为-1</td> </tr>
        <tr> <td></td> <td>int</td> <td>Light Attenuation</td> <td>光衰减</td> <td>仅<code>IsTransparent(是否透明)</code>为TRUE时生效，光透过方块时的亮度衰减</td> </tr>
        <tr> <td></td> <td>int</td> <td>Emitted Light Amount</td> <td>发光强度</td> <td>测试发现9时照亮一格，15时照亮7格，以上虽然照亮更大范围，但会出现bug，最大23</td> </tr>
        <tr> <td></td> <td>float</td> <td>Object Shadow Strength</td> <td>物体阴影强度</td> <td>0到1的小数，设置里启用<code>Object Shadows(物体阴影)</code>后32格半径内实体投影到时该方块上的阴影浓度</td> </tr>
        <tr> <td></td> <td>string</td> <td>Default Drop Content</td> <td>默认掉落内容</td> <td>写#号开头的要掉落的方块的<code>Class Name(类名)</code>。若掉落自己本身，只需填<code>#</code></td> </tr>
        <tr> <td></td> <td>float</td> <td>Default Drop Count</td> <td>默认掉落数量</td> <td>整数部分为最少掉落数量，小数部分为额外掉落一个的概率</td> </tr>
        <tr> <td></td> <td>float</td> <td>Default Experience Count</td> <td>默认经验数量</td> <td>整数部分为最少掉落经验量，小数部分为额外掉落一个经验的概率</td> </tr>
        <tr> <td></td> <td>int</td> <td>Required Tool Level</td> <td>需求工具等级</td> <td>挖掘时需求的装备等级，例如<code>DiamondOreBlock(钻石矿)</code>为3</td> </tr>
        <tr> <td></td> <td>int</td> <td>Max Stacking</td> <td>最大背包堆叠</td> <td>该方块在一个背包格子中的最大堆叠数量，除背包外，还包括箱子、合成台</td> </tr>
        <tr> <td></td> <td>int</td> <td>Max In Hand Stacking</td> <td>最大手持堆叠</td> <td>该方块在一个底栏格子中的最大堆叠数量</td> </tr>
        <tr> <td></td> <td>float</td> <td>Sleep Suitability</td> <td>适合睡觉</td> <td>数值范围0到1，一般为0.5，家具地毯该属性值为1，为0时不能睡</td> </tr>
        <tr> <td></td> <td>float</td> <td>Friction Factor</td> <td>（行走）摩擦系数</td> <td>越小越滑，越大走得越慢，为0时无法在该方块上走动</td> </tr>
        <tr> <td></td> <td>float</td> <td>Density</td> <td>密度</td> <td>单位g/cm³，决定处于掉落物状态的方块在水中的沉浮速度</td> </tr>
        <tr> <td></td> <td>bool</td> <td>No Auto Jump</td> <td>不自动跳跃</td> <td>决定会自动跳跃的实体前进方向上有一格高此方块时停住或自动跳上，还会影响自动寻路系统的结果</td> </tr>
        <tr> <td></td> <td>bool</td> <td>No Smooth Rise</td> <td>不流畅上升</td> <td>其中栅栏此属性为TRUE所以动物不会跳过去</td> </tr>
        <tr> <td></td> <td>int</td> <td>Fuel Heat Level</td> <td>燃料等级</td> <td>只有<code>CoalChunk(煤)块</code>的此属性是2, 烧铁块需求的等级是2</td> </tr>
        <tr> <td></td> <td>float</td> <td>Fuel Fire Duration</td> <td>燃料燃烧时长</td> <td>在<code>FurnaceBlock(熔炉)</code>中作为燃料的燃烧时长</td> </tr>
        <tr> <td></td> <td>string</td> <td>Default Sound Material Name</td> <td>默认声音材料名称</td> <td>对应到<code>Content.pak/Audio</code>里的文件</td> </tr>
        <tr> <td></td> <td>float</td> <td>Shovel Power</td> <td>铲子效率</td>
            <td rowspan="3">破坏方块速度（不含反应/识别时间），单位每秒。例如手持<code>QuarryPower(镐子效率)</code>是20的方块挖<code>DigMethod(挖掘方法)</code>是<code>Quarru(镐)</code>，<code>DigResilience</code>是60的方块要<code>60/20=3</code>秒</td> </tr>
        <tr> <td></td> <td>float</td> <td>Quarry Power</td> <td>镐子效率</td> </tr>
        <tr> <td></td> <td>float</td> <td>Hack Power</td> <td>斧头效率</td> </tr>
        <tr> <td></td> <td>float</td> <td>Default Melee Power</td> <td>近战攻击力</td> <td></td> </tr>
        <tr> <td></td> <td>float</td> <td>Default Melee Hit Probability</td> <td>默认近战命中率</td> <td>数值范围0到1</td> </tr>
        <tr> <td></td> <td>float</td> <td>Default Projectile Power</td> <td>投掷攻击力</td> <td>投掷出去的方块造成的攻击力</td> </tr>
        <tr> <td></td> <td>int</td> <td>Tool Level</td> <td>工具等级</td> <td>木工具该属性为1，石为2，铁、铜为3，钻石为4</td> </tr>
        <tr> <td></td> <td>int</td> <td>Player Level Required</td> <td>需求玩家等级</td> <td>使用该方块需要的最低玩家等级</td> </tr>
        <tr> <td></td> <td>int</td> <td>Durability</td> <td>工具耐久度</td> <td>即使用次数（超过65535报错，实际最大值4095），留空或-1将无(限)耐久度</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Aimable</td> <td>是否可瞄准</td> <td>可投掷方块及弓此属性都为TRUE</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Stickable</td> <td>是否卡住</td> <td>被投掷出的方块是否会卡在<code>ProjectileStickProbability(卡住投掷物可能性)</code>大于0的方块上。若该方块具有<code>BombBlockBehavior(手雷方块行为)</code>则按一定概率穿过上述方块</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Align To Velocity</td> <td>成直线速率</td> <td>该属性值为TRUE时方块被抛出看起来是横向的(例如矛)，不建议给无3D模型的方块调成TRUE（实在不知如何翻译）</td> </tr>
        <tr> <td></td> <td>float</td> <td>Projectile Speed</td> <td>投掷速度</td> <td>用于计算方块投掷出手时的速度，会被主角力量大小影响</td> </tr>
        <tr> <td></td> <td>float</td> <td>Projectile Damping</td> <td>投掷速度衰减</td> <td>一秒后投掷方块移动速度和转速变为此时速度的该属性值倍；例如此时速度100，该属性值0.8，1秒后速度变成80；改为零出现超时空现象</td> </tr>
        <tr> <td></td> <td>float</td> <td>Projectile Tip Offset</td> <td>扔出点偏移</td> <td>用于计算投掷物与地形和实体的碰撞，具体效果待研究</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Disintegrates On Hit</td> <td>撞击时碎裂</td> <td><code>SnowballBlock(雪球)、<code>EggBlock(蛋)</code>的此属性为TRUE</td> </tr>
        <tr> <td></td> <td>float</td> <td>Projectile Stick Probability</td> <td>卡住投掷物可能性</td> <td>使被投掷到它上面<code>IsStickable()</code>为TRUE的方块卡住的可能性；若被投掷方块具有<code>BombBlockBehavior(手雷方块行为)</code>则此属性实为投掷物穿过可能性</td> </tr>
        <tr> <td></td> <td>float</td> <td>Default Heat</td> <td>默认热量</td> <td>数值范围0到1，大于0时会影响周围温度</td> </tr>
        <tr> <td></td> <td>float</td> <td>Fire Duration</td> <td>露天点火时长</td> <td>单位秒，这个值若为小数会向下取整</td> </tr>
        <tr> <td></td> <td>float</td> <td>Explosion Resilience</td> <td>爆炸抗性</td> <td>此属性越大越耐炸，伤害会累积，可为<code>Infinity(无限)</code></td> </tr>
        <tr> <td></td> <td>float</td> <td>Default Explosion Pressure</td> <td>默认爆炸压力</td> <td>该属性值影响爆炸直径和威力。对于一种方块，爆炸直径和该属性值的常用对数成正比，例如想要2倍直径，那么该属性值需要乘100。爆炸威力和该属性值成正比，是每秒的伤害</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Default Explosion Incendiary</td> <td>默认爆炸燃烧</td> <td>FALSE时正常爆炸，TRUE时带有燃烧效果</td> </tr>
        <tr> <td></td> <td>bool</td> <td>Is Explosion Transparent</td> <td>是否爆炸透明</td> <td>该属性值为TRUE时该方块可被炸飞</td> </tr>
        <tr> <td></td> <td>BlockDig<br />Method</td> <td>Dig Method</td> <td>挖掘方法</td> <td>一个方块<code>Is Digging Transparent(被挖掘时是否穿过)</code>为False时此处应有一个非<code>None(无)</code>值</td> </tr>
        <tr> <td></td> <td>float</td> <td>Dig Resilience</td> <td>挖掘抗性</td> <td>该属性值越大需要挖得越久，<code>BedrockBlock(基岩)</code>的此属性是<code>Infinity(无限)</code></td> </tr>
        <tr> <td></td> <td>float</td> <td>Projectile Resilience</td> <td>弹射物抗性</td> <td>数值范围0到1，越大越不容易被投掷物破坏</td> </tr>
        <tr> <td></td> <td>float</td> <td>Default Nutritional Value</td> <td>营养价值</td> <td>大于0时可以食用，数值范围0-1，食用增加等量饱食度</td> </tr>
        <tr> <td></td> <td>float</td> <td>Default Sickness Probability</td> <td>默认生病概率</td> <td>食用该方块后将生病的概率，数值范围0-1，通常<code>Rotten(腐败)</code>的食物方块的该属性值大于0</td> </tr>
        <tr> <td></td> <td>FoodType</td> <td>Food Type</td> <td>食物类型</td> <td><code>Database.xml</code>中规定了每种动物对不同食物类型的喜好程度</td> </tr>
        <tr> <td></td> <td>int</td> <td>Default Rot Period</td> <td>默认腐败时间</td> <td>具有该属性的方块经该属性值时长后腐败，单位分钟（游戏内一天相当于现实20分钟）</td> </tr>
        <tr> <td></td> <td>int</td> <td>Default Texture Slot</td> <td>默认材质位置</td> <td>材质图上从左向右，从上向下排列顺序，第一个（草地顶面）是0，第二个（花岗岩）是1，第x横行第y纵列对应数字是<code>x-1+(y-1)*16</code></td> </tr>
        <tr> <td></td> <td>float</td> <td>Destruction Debris Scale</td> <td>破坏碎片大小缩放</td> <td>方块被破坏时爆出的一堆碎片一样的东西的大小缩放倍数</td> </tr>
        <tr> <td></td> <td>string</td> <td>Default Description</td> <td>默认描述</td> <td>会在游戏帮助的方块说明界面出现，可随意删改内容</td> </tr>
    </tbody>
</table>
</div>
<script>
	var $tbodyBlocksdata = $("#tbodyBlocksdata").children();
	for(var i=0; i < $tbodyBlocksdata.length; i++){
		$tbodyBlocksdata.eq(i).children().eq(0).text(i+1);
	}
	var tableBlocksdataExpanded = false;
	var $divTableBlocksdata = $("#divTableBlocksdata");
	$("#theadBlocksdata").on("click",function(){
		$divTableBlocksdata[0].style.maxHeight = tableBlocksdataExpanded?"14.6rem":"330rem";
		tableBlocksdataExpanded = !tableBlocksdataExpanded;
	});
</script>

##启发例子

###方块发光  
要让放置在地图的方块像火把一样发光，需要修改该方块的`EmittedLightAmount(发光强度)`为9~22，`LightAttenuation(光衰减)`大于0
###铁砂掌  
修改所有方块的`DigResilience`为0,。可参考[正则表达式教程][2]教程批量替换，或者使用[Blocksdata编辑器][3]
###基岩综合  
{>>基岩可挖掘，拾取，创造模式提供<<}  
修改`BedrockBlock(基岩)`的`IsPlaceable(是否可放置)`、`IsGatherable(是否可收集)`为TRUE，`DefaultCreativeData(默认创造模式数据)`、`DigResilience(挖掘抗性)`为0
###撸树  
{>>破坏树干时上面的树干也会被破坏<<}  
给`OakWoodBlock(橡木)`、`BirchWoodBlock(桦木)`、`SpruceWoodBlock(杉木)`的`Behaviors`加上`, GraveBlockBehavior`

##方块行为
为方便说明，以下是`SubsystemBlockBehavior(子系统方块行为)`的简要“源码”，先看看方块行为能做些什么

```csharp
abstract class SubsystemBlockBehavior : Subsystem
{
	abstract int[] HandledBlocks { get; } //直接从“源码”掌控的方块Value列表（Value，常被称作ID）
	void OnChunkInitialized(){} //当区块初始化时处于该区块内的该方块执行
	void OnChunkDiscarding(){} //当区块从视野消失时处于该区块内的该方块执行
	void OnBlockGenerated(){} //当方块从地图中加载时执行
	void OnBlockAdded(){} //当方块被添加到地图时执行
	void OnBlockRemoved(){} //当方块从地图中被移除时执行
	void OnBlockModified(){} //当方块被编辑\/改变时执行
	void OnNeighborBlockChanged(){} //当该方块的周边方块被改变时执行
	bool OnUse(){} //当方块被使用时执行
	bool OnInteract(){} //当方块被交互时执行
	bool OnAim(){} //当方块要被投掷处于瞄准状态时执行
	bool OnEditBlock(){} //当在地图中的(电路)方块被编辑时执行
	bool OnEditInventoryItem(){} //当编辑在背包中的(电路)方块时执行
	void OnItemPlaced(){} //当可编辑方块被添加到地图时执行
	void OnItemHarvested(){} //当流体方块冲击方块时执行（注：不是被冲击）
	void OnCollide(){} //当实体与方块发生碰撞时执行
	void OnExplosion(){} //当方块被炸时执行
	void OnFiredAsProjectile(){} //当方块作为投掷物被发射时执行
	bool OnHitAsProjectile(){} //当方块作为投掷物击中方块或实体时执行
	void OnHitByProjectile(){} //当方块被投掷物击中时执行
	int GetProcessInventoryItemCapacity(){} //用于获取例如枪弓弩需要按顺序填装的方块此时应被填装的方块
	void ProcessInventoryItem(){} //当例如枪弓弩的方块被填装时执行
	void Load(){} //当进入世界时执行
}
```

各种方块行为`inherits(继承)`以上`SubsystemBlockBehavior(子系统方块行为)`后，`override(重写)`其中的`Method(方法)`，最后让指定方块拥有对应的方块行为，就能在游戏中起作用了  
让方块拥有方块行为有两种方式：

* 一种是本节提到的在“源码”中方块行为的`HandledBlocks`方法中写入方块的`Value(常被称作ID)`
* 另一种是在上一节提到的，在`Blocksdata.txt`里方块的`Behaviors`属性中写入方块行为，多个方块行为需要用英文逗号`,`分开。但是很多方块行为无法通过此方法赋予给该方块，可能仍要采用第一种方法

###方块行为列表

以下是从`Database.xml`中`Database/DatabaseObjects/Folder Name="Abstract"/ProjectTemplate Name="Project"`提取的方块行为列表，对应游戏版本2.1

!!! warning ""
    注：以下方块行为名称和“源代码”中类名称不全一致，部分“源代码”中存在的方块行为也不在下表

####表一
>可写入方块`Behaviors`属性的方块行为，以及方块加上该行为后效果

* `FertilizerBlockBehavior` 此方块可作为肥料使用，同时将导致不可放置。发现：TallGrassBlock有此属性时，地形生成时该方块下方的土块会一同消失
* `FireBlockBehavior` 此方块将自燃并消失，并引燃其他可燃物，也可直接点可燃物上表面点燃该物品
* `MatchBlockBehavior` 此方块成为火柴，可点燃可燃物，将不可放置
* `RakeBlockBehavior` 此方块可作为耙子使用
* `SaplingBlockBehavior` 此方块放置到土地上如果条件适合，将长成Oak树，若条件不允许将直接消失。用途示例：让杂草长成树木
* `CactusBlockBehavior` 此方块将从上面长出仙人掌，如果此方块不是沙子，长出的仙人掌将直接破坏并掉落，此方块也将只能放置在沙子和仙人掌上表面。用途示例：长满仙人掌沙漠，沙滩；刷仙人掌机
* `RotBlockBehavior` 此方块将腐败成“源代码”中该方块类`GetDamageDestructionValue(受伤破坏后Value)`方法中设置的方块，默认0（`AirBlock(空气)`）
* `MagmaBlockBehavior` 此方块将点燃周围可燃物如果该物品可燃则自己也会燃烧。不一定对所有方块有效
* `GraveBlockBehavior` 将可导致方块只能放到一个方块上表面，下方方块被破坏后上面的此方块将破坏(原版GraveBlock会向下掉落)。用途示例：撸树mod 
* `SoilBlockBehavior` 此方块上表面放置实心方块后变成DirtBlock
* `GrassBlockBehavior` 此方块上表面放置实心方块后变成DirtBlock
* `IvyBlockBehavior` 此方块若透明将只能挂在树上(未知原因经常挂不上)，并向下长出此方块。用途示例：刷物品机
* `BottomSuckerBlockBehavior` 此方块将使方块变得难以放置(?)，海胆、海星具有该属性
* `TreasureGeneratorBlockBehavior` 此方块将在周围有方块变为空气时随机掉落宝物
* `WaterPlantBlockBehavior` 此方块将只能像海胆、海星一样放置在水中
* `SaddleBlockBehavior` 此方块将可作为马鞍使用
* `BowBlockBehavior` 有此属性后该方块在物品栏放一个弓箭到上面会变成弓
* `BulletBlockBehavior` 此方块将像子弹一样投掷出后破碎
* `WhistleBlockBehavior` 此方块将可作为哨子使用，并将不可放置
* `ThrowableBlockBehavior` 此方块将可投掷，需要调整其他和投掷有关属性
* `FireworksBlockBehavior` 此方块将像烟花一样投掷出后带火焰尾迹，撞击到方块或动物后破碎，或飞行一段距离后消失
* `MagnetBlockBehavior` 此方块被放置后将相当于一个磁铁
* `ExplosivesBlockBehavior` 此方块将可爆炸，需要调整其他和爆炸有关属性
* `ImpactExplosivesBlockBehavior` 炸弹都有此属性，当该方块作为投掷物撞击到方块或动物时爆炸
* `BombBlockBehavior` 此方块投掷出后可爆炸，附带燃烧引线，同时也会影响Is Stickable
* `HammerBlockBehavior` 此方块将可作为锤子使用

####表二
>不确定

```
SignBlockBehavior
BatteryBlockBehavior
ElectricBlockBehavior
CampfireBlockBehavior
MusketBlockBehavior
FurnitureBlockBehavior
BucketBlockBehavior
MetersBlockBehavior
CrossbowBlockBehavior
PistonBlockBehavior
MemoryBankBlockBehavior
FenceGateBlockBehavior
FenceBlockBehavior
ArrowBlockBehavior
InWaterBlockBehavior
StairsBlockBehavior
AdjustableDelayGateBlockBehavior
DispenserBlockBehavior
CarpetBlockBehavior
EggBlockBehavior
CollapsingBlockBehavior
BoatBlockBehavior
TruthTableCircuitBlockBehavior
LedBlockBehavior
LadderBlockBehavior
WoodBlockBehavior
```

[1]: content_tutorial.md#_2
[2]: regex_tutorial.md
[3]: resources.md#_16