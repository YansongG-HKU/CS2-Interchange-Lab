# CS2 Interchange Lab｜天际线2立交与高速出入口实验室

独立的**业余爱好探索项目**，不是主业、商业交付或真实道路工程设计。研究 Cities: Skylines II 的高速出入口、立交、道路节点及 Mod 协作，以可复现的小实验积累经验，不以数量或固定工期驱动。

## 当前阶段

- 已建立研究范围、开发规则、兼容性矩阵和验证模板。
- **尚无已验收立交、游戏内测试结果或 Paradox Mods 发布版本。**
- Road Builder、Anarchy 等是兼容目标，不是已经测试通过的承诺。
- 不把静态桥梁网格当作可通车道路，不将无碰撞摆放当作车道连接或寻路成功。

## 研究方向

1. 单个高速出口/入口：分流、汇流、车道增减和连接连续性。
2. 菱形、喇叭形等立交；复杂多层互通须在基础验证完成后再探索。
3. 道路节点、边/路段、车道连接、交叉口、曲线、坡度、标高、桥下净空、桥墩及地形。
4. Road Builder 自定义道路；Anarchy 等放置限制调整工具；按需评估 Traffic、Move It 等。
5. 原版基线与 Mod 组合分别验证；保存、重载、道路升级和 Mod 更新后复测。

## 文档导航

- [项目定位与路线图](docs/ROADMAP.md)
- [道路与节点规则](docs/ROAD_RULES.md)
- [Mod 兼容矩阵](docs/COMPATIBILITY.md)
- [开发与文档同步规则](docs/DEVELOPMENT.md)
- [测试与验收](docs/VALIDATION.md)
- [来源与证据](docs/SOURCES.md)
- [文档索引及变更影响记录](docs/DOCUMENTATION_INDEX.md)
- [实验记录模板](docs/EXPERIMENT_TEMPLATE.md)
- [贡献约定](CONTRIBUTING.md) · [智能体约束](AGENTS.md) · [变更记录](CHANGELOG.md)

## 不可跳过的原则

每次开发和提交均须**全面检查全部文档的一致性**，并同步更新 README、规则、兼容矩阵、测试、计划、变更记录等所有受影响文件；不受影响的文件也应在变更影响记录中给出无需修改理由。禁止只改代码/模型而留下过期说明，也不为凑数机械重写无关文档。

真实游戏验证前，状态只能是未测试、研究中或待验证。没有游戏环境时可以做资料、设计及离线准备，不得编造版本号、性能、截图、成功兼容或发布回执。

## 环境与发布

准备工作在云端进行；未经用户明确授权不得操作用户电脑、付费开机、安装未知工具或扩大账户权限。发布游戏资产需另行确认目标、版本和依赖；公开 GitHub 仓库不等于已发布游戏 Mod。

本仓库不附带游戏文件、第三方 Mod 二进制、账号凭据或未经许可的素材。当前尚未选择开源许可证；公开可见不意味着授予任意再分发许可，详见 [权利说明](RIGHTS.md)。非官方项目，与 Colossal Order、Paradox Interactive 及各 Mod 作者无隶属关系。

## 第一阶段设计需求 / Phase 1 design

当前需求草案覆盖逐车道6→4+2、非正交曲线衔接、全/部分互通、预览与可逆编辑、Mod失效管理，以及首阶段中英体验；尚未实现。 / Draft requirements cover lane-level splits, curved attachments, access completeness, safe previews, mod invalidation and Chinese/English UX. No runtime implementation exists.

- [中英需求 / Requirements](docs/DESIGN_REQUIREMENTS.md)
- [曲线与车道契约 / Geometry and lanes](docs/GEOMETRY_AND_LANES.md)
- [交互与双语 / UX and i18n](docs/UX_AND_I18N.md)
- [验收场景 / Acceptance scenarios](docs/REQUIREMENTS_ACCEPTANCE.md)

研究参考暂定 CS2 Placemaker；借鉴“意图—预览—确认”而非宣称其已有立交求解能力。详细证据与社区线索见 [sources](docs/SOURCES.md)。

新增 [现实感与游戏实际 / Realism and gameplay](docs/REALISM_AND_GAMEPLAY.md)：服务/系统型、主线连续、回堵、集散、桥梁全包络及交通评价；不把现实工程参考当游戏硬规则。 / Design-only requirements; no runtime validation.

核心扩展：[两曲线与场地占用 / Curved site optimization](docs/CURVED_SITE_OPTIMIZATION.md)。城区紧凑、郊区展开少堆叠是可编辑偏好，与硬面积/高度/层数/禁建边界分开；不牺牲车道或流向来偷偷凑方案。 / Editable preferences never silently relax movement or site constraints.
