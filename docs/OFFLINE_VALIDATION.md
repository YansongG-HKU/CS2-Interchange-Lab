# 离线验证记录 / Offline validation record

See [runtime and support domain](OFFLINE_DEMO.md). Requirements base: `bfccebe7467b2a8935306910b7763957ec98c207`. Tests execute the source identified by SHA-256 in [source manifest](../evidence/source-manifest.json); the browser record's `sourceCommit` identifies the pre-implementation checkout parent, **not an assertion that dirty implementation existed in that commit**. The final Git head is reported in the PR and delivery message. / 精确源文件哈希绑定被测实现，避免自引用提交哈希。

## Actual evidence / 实测证据

- [Unit/property/regression output](../evidence/unit-tests.txt): 20 assertions grouped as Node tests, including degeneracy, limits, fixed OD, G1, unions/differences, area/overflow, rotation, reload and unavailable adapter.
- [Real browser record](../evidence/browser.json): 23 Chromium interaction assertions, Chinese/English, geometry-invariant locale switch, fractional input, undo, preset, JSON download/import, second intersection selection, near tangent, area cap, overflow, error location, malformed/null JSON, empty numeric input, recovery and narrow layout.
- [Fixture computations](../evidence/computation.json): complete inputs, expected and observed statuses, candidate diagnostics, OD, area, timings and 128/256 refinement differences. These timings are this machine's observations, not a responsiveness guarantee.
- [Build output](../evidence/build.txt): production build; examples copied into distribution.
- Screenshots: [中文](../evidence/browser-zh.png), [English overflow](../evidence/browser-overflow-en.png), [narrow English](../evidence/browser-mobile-en.png).
- [Export/reload fixture](../evidence/exported-case.json).

Node 24.19.0, npm 11.9.0. Exact package pins and integrity in package-lock.json; browser version in browser.json. No game build/Mod version exists for this experiment. / 未安装游戏或 Mod，不虚构版本。

Initial browser run exposed an asynchronous fixture-loading race in the **test wait condition**; corrected to wait for the selected model and completed solve. Final assertions exercise real DOM events. Initial full-geometry checks found tight turn offsets and retain those failures as expected fixture outcomes. Six-lane local fork is independently visualized and checked, not conflated with the OD experiment or its area. / 保留失败含义，不以成功断言掩盖候选不可行。

## Requirement coverage / 需求覆盖

| Requirement cases | Offline evidence | Remaining gap / 未完成 |
|---|---|---|
| A01/A02/A04/A05/A32 | six mappings, explicit single-direction schema, local tangents, skew/multiple/near tangent | full lane sweeps, actual game lanes |
| A07/A08 | fixed 12 OD; partial exclusions; RHT/LHT, rotation property | game read-back; full mirrored gameplay |
| A11/A13/A23/A40 | local JSON reload, locale invariant, numeric recovery, exact source hashes | game saves, unit switching, game updates |
| A18/A19 | explicit limited model and versions, sampled curve bound | engine discretization and certified geometry |
| A33/A34/A36/A37/A39 | preference independence; concave polygon/holes; union/difference and overflow | complete physical/ground reservation and complex terrain |
| A35/A38 | duplicated polygon counted once; UNKNOWN height/levels; bounded search failure | actual local deck count/height/clearance solver |
| All game-dependent A cases | NOT_RUN | CS2 APIs, saves, mod lifecycle, vehicles and traffic |

These are **partial offline subcases**, not acceptance of the full A01–A40 suite. All game compatibility rows remain NOT_TESTED. / 仅离线子项通过，不把 40 个需求全标 PASS。

CI: no workflow has been added or executed by this change. Local `npm test`, browser and build success is **not CI success**. / 没有把本地测试冒称 CI 通过。
