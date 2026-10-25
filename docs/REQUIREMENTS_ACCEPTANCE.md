# 需求验收场景 / Requirements Acceptance Scenarios

全部状态 NOT_RUN：需求规定，不是已通过测试。 / All cases NOT_RUN; specified, not executed.

|Case|场景 / Scenario|期望 / Expected|
|---|---|---|
|A01|单向6→4+2 / Pure six-lane split|逐车道映射无丢失或无意复制 / Exact declared mapping|
|A02|双向总6与单向6混淆 / Ambiguous lane count|要求确认，不能猜 / Require confirmation|
|A03|4+2→4合流 / Tapering merge|明确汇入与终止，给冲突风险 / Explicit merge/drop plan|
|A04|两条弯曲道路斜交 / Curved skew crossing|沿局部切向衔接，不强制正交 / Tangent-aware attachments|
|A05|同两曲线多交点/近切/近平行 / Ambiguous geometry|选择目标区域或解释不可行 / Select region or explain failure|
|A06|地面投影交叉但高程不同 / Grade-separated crossing|不误建节点 / No accidental at-grade node|
|A07|全互通与部分互通 / Full versus partial|固定full基准，删一项自动partial；检出禁止方向；区分full/free-flow/parclo / Fixed full baseline; removing a movement changes mode; separate access from layout and control|
|A08|左右行切换及地图旋转 / Driving side and rotation|端口语义稳定、重新验证车道方向 / Stable intent, revalidated mapping|
|A09|Anarchy允许穿插 / Collision override|仍报实体净空/路径问题 / Continue clearance and reachability checks|
|A10|RoadBuilder修改Traffic连接道路 / External road edit|预览失效、提示连接重验，保留用户配置证据 / Invalidate and revalidate|
|A11|保存重载/依赖缺失/更新 / Reload and dependencies|可复现或清晰阻塞，副本存档安全 / Reproduce or fail explicitly|
|A12|取消/失败/撤销 / Cancel, failure and undo|不留下未披露半生成，不删除外部对象 / No undisclosed partial mutation|
|A13|中文英文、单位切换 / Language and units|设计不变、文本完整、数字解析正确 / Same design, complete text, correct parsing|
|A14|锁定建筑/原路/桥墩区域 / Locked areas|不静默修改，说明冲突 / Respect locks or explain infeasibility|
|A15|交通评估 / Traffic evaluation|固定需求与窗口，报告排队/吞吐/未到达，非零堵车承诺 / Report measured outcomes|

验收记录须有source commit、游戏/Mod精确版本、配置、交通侧、测试存档副本、实际步骤、证据和失败限制。新增规则须同步 README、ROAD_RULES、COMPATIBILITY、VALIDATION、SOURCES 与文档索引。 / Evidence must bind to exact versions and reproducible procedures; keep all affected docs synchronized.

|Case|附加场景 / Additional scenario|期望 / Expected|
|---|---|---|
|A16|预览后外部修改 / External edit before Apply|拒绝过期提交并重算 / Reject stale commit|
|A17|节点拆合与中隔带 / Node changes and median|保留原→新映射，无零长/重复/意外U-turn / Preserve mapping, no accidental connections|
|A18|特殊车道/第三走廊 / Unsupported lanes or corridors|明确不支持，不静默替换 / Explicitly reject unsupported inputs|
|A19|曲线离散后偏离 / Discretization error|按预先冻结容差复验，未知不通过 / Revalidate frozen tolerances|
|A20|两条匝道只用一条 / Uneven lane use|控制OD和相邻节点做对照，不把6=4+2当均分保证 / Controlled OD/node tests|
|A21|换城市/删对象/读档 / Save-scoped state|旧占位缓存失效，无跨城市污染 / No stale occupancy across saves|
|A22|手修后重生成 / Manual edit then regenerate|识别所有权和手改，冲突时阻止覆盖 / Preserve manual/external edits|
|A23|数值输入与步长 / Numeric controls|不跳极值、范围提示、键盘与撤销可用 / Stable accessible numeric editing|

## 需求—验收—来源追踪 / Traceability

|需求|用例|依据|
|---|---|---|
|R01–R03|A01–A03,A20|用户要求；ROAD_RULES；research/geometry；community C1|
|R04–R05|A04–A06,A14,A19|用户要求；官方Road Tools；几何方法参考（非游戏硬限）|
|R06|A07,A08|用户要求；有向图项目契约；research/geometry|
|R07|A06,A09,A14|Anarchy作者限制；实体净空项目契约|
|R08|A13,A23|Placemaker作者与issue1；UX研究|
|R09|A12,A16,A21,A22|Placemaker issue8/12；社区误删；项目安全契约|
|R10–R11|A10,A11,A16–A18|Traffic/RoadBuilder作者；community C2|
|R12|A13,A23|用户首阶段中英要求；UX与可访问性设计目标|

各研究文件列直接来源及证据限制，全部Case仍NOT_RUN。
