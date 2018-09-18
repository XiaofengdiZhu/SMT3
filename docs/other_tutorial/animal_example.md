title: 动物相关
#动物相关

##宠物海鸟
将此段代码加到`DatabaseObjects\Folder Entities\Folder Creatures\Folder Animals`中，即可产生一个给海鸟加鞍后再攻击一下便会一直跟着主角的宠物海鸟
```xml
<EntityTemplate Name="Seagull_Saddled" Guid="dd2f737c-30f8-4d62-8de3-9ab48559c3be" InheritanceParent="dd2f737c-30f8-4762-8de3-9ab48559c3ae">
	<MemberComponentTemplate Name="Creature" Guid="0024a011-7626-40c4-927a-84be91ea194d">
		<Parameter Name="IsPredator" Guid="7f0bf311-b151-4fb9-9f43-65c8bb28f69f" Value="True" Type="System.Boolean" />
	</MemberComponentTemplate>
	<MemberComponentTemplate Name="Miner" Guid="047bf6eb-6d85-4b9f-9e37-5a97dc15d8fd" InheritanceParent="8acca888-ba39-464f-bcf5-6ae15e448c62">
		<Parameter Name="AttackPower" Guid="c0608320-e57c-56be-9ffd-351aa10a9683" Value="0" Type="System.Single" />
	</MemberComponentTemplate><!--有攻击力才能追击-->
	<MemberComponentTemplate Name="Health" Guid="f8814ebd-7e1d-48b7-83ed-9d3fc75e4a1f">
		<Parameter Name="FireResilience" Guid="58baefde-47d9-42fb-879d-345169d3979a" Value="10" Type="System.Single" />
		<Parameter Name="AttackResilience" Guid="8b2fd0bc-fb0d-4905-b162-f5afdf5ac5b4" Value="2000" Type="System.Single" />
	</MemberComponentTemplate><!--只能被烧死而不能被打死-->
	<MemberComponentTemplate Name="ChaseBehavior" Guid="d71acd48-f5d5-4bde-8baf-9a4a1db39841" InheritanceParent="31894441-d90a-4549-9264-db9dbe20e234">
		<Parameter Name="ChaseWhenAttackedProbability" Guid="60b1024a-acd0-4536-bba4-9a510286a396" Value="1" Type="System.Single" /><!--遭到攻击100%还击，即成为宠物-->
		<Parameter Name="NightChaseRange" Guid="42b0ca10-ed8b-4079-b513-966221ecb1ab" Value="999" Type="System.Single" />
		<Parameter Name="DayChaseTime" Guid="558111d8-eb1c-4e53-a94d-df49525121f6" Value="3600" Type="System.Single" />
		<Parameter Name="NightChaseTime" Guid="61771540-6229-4f79-b9fd-2a39b50cfd46" Value="3600" Type="System.Single" />
		<Parameter Name="DayChaseRange" Guid="f8c4f30d-c05e-d829-99dc-66cd028a59aa" Value="999" Type="System.Single" /><!--为了长久且长距离地保持追击-->
		<Parameter Name="AutoChaseMask" Guid="0434faa5-d599-4ced-989f-7d4c08a2e34c" Value="0" Type="Game.CreatureCategory" /><!--使其不会主动追击其他生物-->
	</MemberComponentTemplate>
	<ParameterSet Name="CreatureEggData" Guid="09f2015a-163c-44bb-dc6f-c9d22027cddf">
		<Parameter Name="DisplayName" Guid="48c75384-3dcc-4a6b-b566-5a2e4cb21b17" Value="Seagull Pet Egg" Type="System.String" />
		<Parameter Name="NutritionalValue" Guid="61dd9c88-2de6-464e-9383-0d0c4a4d2c5d" Value="0" Type="System.Single" /><!--设置动物蛋不可煮，免得多占用创造模式物品栏-->
		<Parameter Name="EggTypeIndex" Guid="cabca26b-f9cd-4908-8f8b-9e5dda5882d4" Value="38" Type="System.Int32" />
	</ParameterSet>
</EntityTemplate>
```

!!! hint "原理"
    被攻击后反击主角，并一直持续追击

##使白色加鞍马跑得更快
将此段代码加到`Folder Entities\Folder Creatures\Folder Animals\EntityTemplate Horse_White_Saddled`中，加鞍后的白马步行速度就会变成100
```xml
<MemberComponentTemplate Name="Locomotion" Guid="24b18bf0-783e-485b-61a2-c61c96db0032">
	<Parameter Name="WalkSpeed" Guid="06922714-6280-48dc-8ac7-2af5dc594889" Value="100" Type="float" />
	<Parameter Name="TurnSpeed" Guid="25af3c58-26ab-4a6a-86bb-8419780f8899" Value="4" Type="float" />
	<Parameter Name="JumpSpeed" Guid="dff9d536-c5f2-43e7-ac7b-1a5f23f0a44c" Value="5.25" Type="float" />
	<Parameter Name="AccelerationFactor" Guid="e551874f-e67b-491f-9ba3-481af5f5c679" Value="0.5" Type="float" />
	<Parameter Name="LookSpeed" Guid="f7eb7017-7400-4490-8de1-0a011822318f" Value="4" Type="float" />
</MemberComponentTemplate>
```