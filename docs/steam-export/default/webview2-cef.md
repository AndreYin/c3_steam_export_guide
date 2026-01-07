# Webview2 / CEF

Webview2 and CEF are the default exporters in Construct 3 after release 450. They run your game inside a Chromium-based runtime.

- **Pros:**
  - ⭐ Built-in Construct 3 latest releases.
  - ⭐ Single-click exports.
  - ⭐ Officialy supported Steamworks addons.
- **Cons:**
  - ❌ Currently (Jan 04 2026) has issues with gamepads in general.
  - ❌ Relies on multiple exports for different systems (Webview2 for Windows, CEF for Linux).

::: info 📦 Platform Availability
- **Webview2** — Windows only (uses Microsoft Edge Webview2 runtime)
- **CEF** — Linux only (Chromium Embedded Framework)

Both use the same Steamworks addon and setup process. The only difference is which export option you select.
:::

::: danger ⚠️ Webview2 Gamepad Issues (Jan 04, 2026)
**Webview2 currently has critical gamepad issues** that [make games unplayable when using a controller](https://github.com/MicrosoftEdge/WebView2Feedback/issues/5406). This affects all Webview2 exports, not just Steam builds. Consider using [Pipelab](../pipelab) or [NW.js](../legacy/nwjs) if your game requires gamepad support.
:::

## Prerequisites

Before starting, make sure you have:

- ✅ **Construct 3 r450 or later** — These exporters require a recent version
- ✅ **Steamworks account** — Your app must be registered on [Steamworks](https://partner.steamgames.com/)
- ✅ **Steam App ID** — Found in your Steamworks dashboard

## Step 1: Install the Steamworks Addon

The official Steamworks addon enables basic Steam integration. **Construct 3 does not include this addon by default** — you need to download it first.

1. Download the addon from the official page: [Steamworks Addon](https://www.construct.net/en/make-games/addons/1105/steamworks)
2. Open your project in Construct 3
3. Go to **Menu** → **View** → **Addon Manager**
4. Click **Install new addon** and select the downloaded `.c3addon` file
5. Restart Construct 3 when prompted

## Step 2: Configure the Steamworks Addon

After installing the addon, add it to your project:

1. Right-click in the **Project Bar** → **Add new object type**
2. Select **Steamworks** from the list and click **Insert**
3. In the **Project Bar**, click on the **Steamworks** object to select it
4. The **Properties Bar** (usually on the left side) will now show the Steamworks properties
5. Find the **App ID** field and enter your Steam App ID (from your Steamworks dashboard)

## Step 3: Export Your Game

1. Go to **Menu** → **Project** → **Export**
2. Select your target platform:
   - **Windows (Webview2)** for Windows builds
   - **Linux (CEF)** for Linux builds
3. Configure the export settings as needed for your project
4. Click **Export** and wait for the build to complete
5. Extract the exported `.zip` file to a folder

## Step 4: Test Locally

Before uploading to Steam, test your build locally:

1. **Start Steam** and log into your account
2. Run your game's executable directly
3. Verify Steam features work:
   - Check if `Steamworks: Is initialized` returns true
   - Test achievement unlocks (use Spacewar App ID `480` for testing)
   - Verify Steam username displays correctly

::: tip 💡 Debug Mode
Add a debug text object that shows `Steamworks.UserDisplayName` to confirm Steam is connected.
:::

## Step 5: Upload to Steam

Once testing is complete, upload your build to Steam. See the [Uploading to Steam](../uploading-to-steam) guide for detailed instructions.

## .c3p File Example
In case you need a Construct 3 project example to test things out, you can use <a href="../examples/steamworks_addon_example_r450_webview2_cef.c3p" target="_self">this one</a>.

## Troubleshooting

### Steam not initializing

| Problem | Solution |
|---------|----------|
| "Steam not running" error | Make sure Steam client is open before launching |
| Initialization returns false | Verify the addon is correctly installed and App ID is set |

### Webview2 runtime issues (Windows)

| Problem | Solution |
|---------|----------|
| Game won't start | User needs to install [Webview2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) |
| Black screen on launch | Update graphics drivers, or try compatibility mode |

## Other Exports

- 📖 [Built-in Exporters](../legacy/nwjs) — The Default Construct 3 Exporters After Release 450
- 📖 [Pipelab](../pipelab) — Custom Electron-based exporter
- 📖 [Gemshell](../gemshell) — Custom exporter