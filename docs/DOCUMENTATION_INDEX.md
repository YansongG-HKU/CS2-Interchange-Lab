# 文档索引与提交影响记录

每次开发和提交全面检查全部文档；受影响内容同提交更新，无影响项说明理由。当前是人工门禁，无自动CI。

## 当前索引

- [.github/ISSUE_TEMPLATE/experiment.md](../.github/ISSUE_TEMPLATE/experiment.md)
- [.github/pull_request_template.md](../.github/pull_request_template.md)
- [AGENTS.md](../AGENTS.md)
- [CHANGELOG.md](../CHANGELOG.md)
- [CONTRIBUTING.md](../CONTRIBUTING.md)
- [README.md](../README.md)
- [RIGHTS.md](../RIGHTS.md)
- [docs/COMPATIBILITY.md](COMPATIBILITY.md)
- [docs/DESIGN_REQUIREMENTS.md](DESIGN_REQUIREMENTS.md)
- [docs/DEVELOPMENT.md](DEVELOPMENT.md)
- [docs/DOCUMENTATION_INDEX.md](DOCUMENTATION_INDEX.md)
- [docs/EXPERIMENT_TEMPLATE.md](EXPERIMENT_TEMPLATE.md)
- [docs/GEOMETRY_AND_LANES.md](GEOMETRY_AND_LANES.md)
- [docs/REALISM_AND_GAMEPLAY.md](REALISM_AND_GAMEPLAY.md)
- [docs/REQUIREMENTS_ACCEPTANCE.md](REQUIREMENTS_ACCEPTANCE.md)
- [docs/ROADMAP.md](ROADMAP.md)
- [docs/ROAD_RULES.md](ROAD_RULES.md)
- [docs/SOURCES.md](SOURCES.md)
- [docs/UX_AND_I18N.md](UX_AND_I18N.md)
- [docs/VALIDATION.md](VALIDATION.md)
- [docs/research/community.md](research/community.md)
- [docs/research/game_pitfalls.md](research/game_pitfalls.md)
- [docs/research/geometry.md](research/geometry.md)
- [docs/research/realism_addendum.md](research/realism_addendum.md)
- [docs/research/ux.md](research/ux.md)

## 2026-10-26 第一阶段需求变更影响记录

所有索引文档已检查。新增：DESIGN_REQUIREMENTS、GEOMETRY_AND_LANES、UX_AND_I18N、REQUIREMENTS_ACCEPTANCE和research三份证据报告。更新：README、AGENTS、CONTRIBUTING、DEVELOPMENT、ROAD_RULES、COMPATIBILITY、VALIDATION、ROADMAP、SOURCES、EXPERIMENT_TEMPLATE、CHANGELOG、Issue/PR模板及本索引，以同步需求入口、状态和验收。RIGHTS无需修改：未引入第三方代码/资产，权利边界不变；.gitignore无需修改：仍仅Markdown文档，无新工具输出类型。

核验：文档内链接与需求/验收覆盖检查；独立设计审查修正full定义、外部编辑失效、支持域、节点映射和离散容差。游戏、求解器、Mod兼容、UI、交通性能全部NOT_RUN；本轮未安装Mod、未建立游戏实现或CI。

初始化历史：16文件准备提交已完成，全兼容NOT_TESTED。后续每个提交沿用逐文件/按同因分组列清单的影响记录，禁止为凑数机械改日期。

## 2026-10-26 现实感与游戏实际补充影响记录

新增REALISM_AND_GAMEPLAY、research/realism_addendum、research/game_pitfalls；更新README、CHANGELOG、DESIGN_REQUIREMENTS、GEOMETRY_AND_LANES、UX_AND_I18N、REQUIREMENTS_ACCEPTANCE（累计31场景）、DEVELOPMENT、ROAD_RULES、VALIDATION、COMPATIBILITY、ROADMAP、EXPERIMENT_TEMPLATE、SOURCES、PR模板及本索引。

已复核无需修改：AGENTS/CONTRIBUTING继续要求全仓同步及双语，规则无变；RIGHTS无第三方资产/代码引入；Issue模板已有需求/证据字段；research/geometry、community、ux保留上一轮历史证据；.gitignore无新增输出类型。不存在新实现或游戏实验。

检查内部链接和需求状态；全部运行验证仍NOT_RUN，不把现实参考数值或社区经验宣称为引擎规范。
