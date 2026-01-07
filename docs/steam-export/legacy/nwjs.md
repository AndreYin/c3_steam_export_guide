# NW.js (Windows, Linux) - Legacy

NW.js was the default exporter in older versions of Construct 3 before r450. It provides full Steam Overlay support, making it useful for games that require overlay functionality.

::: info
For Construct 3 r450 and later, NW.js has been removed entirely from Construct 3. See the [this post on the Scirra forums](https://www.construct.net/en/forum/construct-3/general-discussion-7/nwjs-fully-removed-r450-186742) for more details.
:::

- **Pros:**
  - ⭐ Built-in the older releases of Construct 3.
  - ⭐ Single-click exports for all OS's (Windows, Linux and macOS).
  - ⭐ Unofficial [Greengrinds](https://www.construct.net/en/make-games/addons/244/greengrinds) addon supports advanced Steamworks functionalities.
- **Cons:**
  - ❌ Big filesize (~150MB+).
  - ❌ Deprecated - No more updates or official support.
  - ❌ Stuck on NW.js v0.98 / Steamworks SDK 1.60 (Greengrinds).
  
## Step 1: Install the Greengrinds Addon

We use the Greengrinds addon by Mikal instead of the official Greenworks addon. **Construct 3 does not include this addon by default** — you need to download it first.

1. Download the addon from the official page: [Greengrinds Addon](https://www.construct.net/en/make-games/addons/244/greengrinds)
2. Open your project in Construct 3
3. Go to **Menu** → **View** → **Addon Manager**
4. Click **Install new addon** and select the downloaded `.c3addon` file
5. Restart Construct 3 when prompted

## Step 2: Configure the Steamworks Addon

After installing the addon, add it to your project:

1. Right-click in the **Project Bar** → **Add new object type**
2. Select **Greengrinds** from the list and click **Insert**
3. In the **Project Bar**, click on the **Greengrinds** object to select it
4. The **Properties Bar** (usually on the left side) will now show the Steamworks properties
5. Find the **App ID** field and enter your Steam App ID (from your Steamworks dashboard)

## Step 3: Export Your Game

1. Go to **Menu** → **Project** → **Export**
2. Select your target platforms:
   - **Win64** for Windows builds
   - **Linux64** for Linux / SteamOS builds
3. Configure the export settings as needed for your project
4. Make sure the **Export for Steam** checkbox is on
5. Click **Export** and wait for the build to complete
6. Extract the exported `.zip` file to a folder

## Step 4: Test Locally

Before uploading to Steam, test your build locally:

1. **Start Steam** and log into your account
2. Run your game's executable directly
3. Verify Steam features work

## Step 5: Upload to Steam

Once testing is complete, upload your build to Steam. See the [Uploading to Steam](../uploading-to-steam) guide for detailed instructions.

## .c3p File Example
In case you need a Construct 3 project example to test things out, you can use <a href="../examples/greengrinds_test_app_nwjs098.c3p" target="_self">this one</a>.

## Troubleshooting

### Steam not initializing

| Problem | Solution |
|---------|----------|
| "Steam not running" error | Make sure Steam client is open before launching |
| Initialization returns false | Verify the addon is correctly installed and App ID is set |

### NWjs runtime issues (Windows)

| Problem | Solution |
|---------|----------|
| Black screen on launch | Update graphics drivers, or try compatibility mode. |
| Some graphical effects do not work | Make sure to have DirectX 9.0c installed. You can also toggle it on Steamworks so new users downloading your game get it as soon as they run your game the first time. You can find it on  Your App -> Edit Steamworks Settings -> Installation Tab -> Redistributables -> Toggle the June 2010 box. |
| My gamepad doesn't work on Steamdeck when it's connected to a TV | Steam currently has an issue detecting gamepad IDs on NWjs. To fix this, change your Gamepad ID in your events from 0 to -1. This will make any gamepad work on single-player games. |

## Other Exports

- 📖 [NW.js Legacy Export](../default/webview2-cef) — For full Steam support on Windows
- 📖 [Pipelab](../pipelab) — Custom Electron-based exporter
- 📖 [Gemshell](../gemshell) — Custom exporter
