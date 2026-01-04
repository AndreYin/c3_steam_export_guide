# Webview2 / CEF

Webview2 and CEF are the default exporters in Construct 3 after release 450. They run your game inside a Chromium-based runtime.

::: info 📦 Platform Availability
- **Webview2** — Windows only (uses Microsoft Edge Webview2 runtime)
- **CEF** — Linux only (Chromium Embedded Framework)

Both use the same Steamworks addon and setup process. The only difference is which export option you select.
:::

::: warning ⚠️ Known Limitations
- **Steam Overlay** does not work with Webview2 exports (Windows)
- **Steam Input** may have issues on certain configurations
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
5. Restart Construct 3 if prompted

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

## Troubleshooting

### Steam not initializing

| Problem | Solution |
|---------|----------|
| "Steam not running" error | Make sure Steam client is open before launching |
| Initialization returns false | Verify the addon is correctly installed and App ID is set |
| Wrong user detected | Check `steam_appid.txt` has correct App ID |

### Webview2 runtime issues (Windows)

| Problem | Solution |
|---------|----------|
| Game won't start | User needs to install [Webview2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) |
| Black screen on launch | Update graphics drivers, or try compatibility mode |

### Steam Overlay not working

Unfortunately, **Steam Overlay does not work with Webview2 exports** on Windows. This is a known limitation. Workarounds:

- Use [NW.js (Legacy)](../legacy/nwjs) export if overlay is critical
- Use [Pipelab](../pipelab) with Electron for full overlay support
- Implement in-game achievement notifications as an alternative

On Linux with CEF, Steam Overlay is expected to work when launched from Steam.

## Next Steps

- 📖 [NW.js Legacy Export](../legacy/nwjs) — For full Steam Overlay support on Windows
- 📖 [Pipelab](../pipelab) — Custom Electron-based exporter
