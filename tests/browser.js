import { chromium } from "playwright";
import assert from "node:assert/strict";
import fs from "node:fs";
import { execFileSync } from "node:child_process";
const browser = await chromium.launch({
  executablePath: "/usr/bin/chromium",
  headless: true,
  args: ["--no-sandbox"],
});
const page = await browser.newPage({ viewport: { width: 1500, height: 1100 } });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
const checks = [];
const check = (name, expected, actual) => {
  assert.deepEqual(actual, expected, name);
  checks.push({ name, expected, actual });
};
const snapshot = async () =>
  JSON.parse(await page.evaluate(() => window.labSnapshot()));
const ready = async () => {
  await page.waitForFunction(
    () =>
      window.labSnapshot && JSON.parse(window.labSnapshot()).result !== null,
  );
};
try {
  await page.goto("http://127.0.0.1:4173");
  await ready();
  let a = await snapshot();
  check(
    "default nonorthogonal full baseline",
    12,
    a.result.fullBaseline.length,
  );
  check(
    "computed SVG",
    true,
    (await page.locator("#plan polyline").count()) > 5,
  );
  await page.screenshot({ path: "evidence/browser-zh.png", fullPage: true });
  await page.locator("#lang").click();
  let b = await snapshot();
  check("language leaves geometry/model byte-identical", a, b);
  check(
    "English title",
    true,
    (await page.locator("h1").textContent()).includes("Offline"),
  );
  await page.locator("#example").selectOption("partial");
  await page.waitForFunction(
    (name) => JSON.parse(window.labSnapshot()).model.name === name,
    "partial",
  );
  await ready();
  a = await snapshot();
  check("partial status", "UNKNOWN", a.result.status);
  check("partial mode", "partial", a.result.mode);
  await page.locator("#anchor").fill("92.5");
  await page.locator("#anchor").press("Tab");
  await ready();
  a = await snapshot();
  check("fractional numeric parameter", 92.5, a.model.anchor);
  await page.locator("#undo").click();
  await ready();
  check("undo restores anchor", 80, (await snapshot()).model.anchor);
  await page.locator("#preference").selectOption("suburban");
  await ready();
  check(
    "suburban selected longer anchor",
    "d1.2",
    (await snapshot()).result.recommended,
  );
  const before = await snapshot();
  const downloadPromise = page.waitForEvent("download");
  await page.locator("#export").click();
  const download = await downloadPromise;
  await download.saveAs("evidence/exported-case.json");
  await page.locator("#reset").click();
  await ready();
  await page.locator("#import").setInputFiles("evidence/exported-case.json");
  await page.waitForFunction(
    () => JSON.parse(window.labSnapshot()).model.name === "partial",
  );
  await ready();
  check(
    "export import restores input and exact result",
    before,
    await snapshot(),
  );
  await page.locator("#areaCap").fill("1");
  await page.locator("#areaCap").press("Tab");
  await ready();
  check(
    "tiny area fails",
    "NO_CANDIDATE_FOUND",
    (await snapshot()).result.status,
  );
  check(
    "error targets cap",
    true,
    (await page.locator("#diagnostics").textContent()).includes("areaCap"),
  );
  await page.locator("[data-diag]").first().click();
  check(
    "diagnostic map marker",
    1,
    await page.locator('#plan circle[stroke="#ff986c"]').count(),
  );
  await page.locator("#example").selectOption("multiple");
  await page.waitForFunction(
    (name) => JSON.parse(window.labSnapshot()).model.name === name,
    "multiple",
  );
  await ready();
  check(
    "three selectable intersections",
    3,
    (await snapshot()).result.crossings.length,
  );
  await page.locator('[data-hit="1"]').click();
  await ready();
  check(
    "second intersection explicit selection",
    1,
    (await snapshot()).model.crossing,
  );
  await page.locator("#example").selectOption("near-tangent");
  await page.waitForFunction(
    (name) => JSON.parse(window.labSnapshot()).model.name === name,
    "near-tangent",
  );
  await ready();
  check(
    "near tangent rejection",
    "UNSUPPORTED",
    (await snapshot()).result.status,
  );
  await page.locator("#example").selectOption("small-site");
  await page.waitForFunction(
    (name) => JSON.parse(window.labSnapshot()).model.name === name,
    "small-site",
  );
  await ready();
  check(
    "overflow diagnostic",
    true,
    (await page.locator("#diagnostics").textContent()).includes("OVERFLOW"),
  );
  await page.screenshot({
    path: "evidence/browser-overflow-en.png",
    fullPage: true,
  });
  await page.locator("summary").click();
  await page.locator("#json").fill("{oops");
  await page.locator("#applyJSON").click();
  check(
    "malformed JSON actionable message",
    true,
    (await page.locator("#status").textContent()).includes("JSON parse failed"),
  );
  await page.locator("#json").fill("null");
  await page.locator("#applyJSON").click();
  check(
    "wrong JSON shape rejected without crash",
    true,
    (await page.locator("#status").textContent()).includes("Invalid input"),
  );
  await page.locator("#reset").click();
  await ready();
  await page.locator("#anchor").fill("");
  await page.locator("#anchor").press("Tab");
  await ready();
  check(
    "empty numeric input is not coerced to zero",
    "INPUT_INVALID",
    (await snapshot()).result.status,
  );
  await page.locator("#undo").click();
  await ready();
  check("recover from invalid input", 80, (await snapshot()).model.anchor);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: "evidence/browser-mobile-en.png",
    fullPage: true,
  });
  check(
    "mobile no horizontal overflow",
    true,
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  );
  check("browser console uncaught errors", [], errors);
  fs.writeFileSync(
    "evidence/browser.json",
    JSON.stringify(
      {
        date: new Date().toISOString(),
        sourceCommit: execFileSync("git", ["rev-parse", "HEAD"], {
          encoding: "utf8",
        }).trim(),
        workingTree: "implementation under test; final source hash in manifest",
        browser: await browser.version(),
        checks: checks.map((c) => ({
          ...c,
          expected:
            typeof c.expected === "object"
              ? "deep equality asserted"
              : c.expected,
          actual:
            typeof c.actual === "object" ? "deep equality passed" : c.actual,
        })),
        screenshots: [
          "browser-zh.png",
          "browser-overflow-en.png",
          "browser-mobile-en.png",
        ],
      },
      null,
      2,
    ) + "\n",
  );
  console.log(`${checks.length} browser assertions passed`);
} finally {
  await browser.close();
}
