# NW.js (Legacy, All Systems)

NW.js is the legacy desktop exporter that existed in Construct 3 before release 450. It bundles Chromium and Node.js with your game, which makes behavior consistent across platforms, but increases size.

## Pros
- ⭐ Bundled runtime (consistent behavior across Windows/macOS/Linux)
- ⭐ Good compatibility with Chromium-based features
- ⭐ No dependency on system webviews or external runtimes

## Cons
- ❌ Very large build size compared to system-webview exporters
- ❌ Higher RAM usage than Webview2/WKWebview
- ❌ Legacy workflow (not available in Construct 3 r450+)

## Steamworks Notes
- Steam overlay is expected to work when launched from Steam and Steamworks is initialized correctly.
- Many older projects used Greenworks or other Node-based Steamworks bridges; newer projects generally use Steamworks.js workflows.

## Screenshot Placeholders
<div style="border: 2px dashed var(--vp-c-divider); border-radius: 10px; padding: 28px; text-align: center; margin: 16px 0;">
  NW.js export settings screenshot (add later)
</div>

<div style="border: 2px dashed var(--vp-c-divider); border-radius: 10px; padding: 28px; text-align: center; margin: 16px 0;">
  NW.js exported folder / executable screenshot (add later)
</div>

