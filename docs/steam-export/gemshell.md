# GemShell

GemShell provides a native wrapper for your HTML5 game with built-in Steamworks support, removing the need for complex plugin setups.

- **Pros:**
  - ⭐ Doesn't rely on NW.js, Electron, or Chromium in any way.
  - ⭐ Easy, drag-and-drop solution.
- **Cons:**
  - ❌ Requires the user to implement their own JS calls onto their Event Sheets to use the Steamworks API.

## Prerequisites
- **GemShell** (Pro version required for full Steamworks support).
- Your Game's **App ID**.

## Step 1: Export as HTML5
1. In Construct 3, go to **Menu** -> **Project** -> **Export**.
2. Select **Web (HTML5)**.
3. Choose **Embed Style**: "Standard".
4. Export to a folder.

## Step 2: Configure in GemShell
1. Open GemShell.
2. Drag and drop your exported HTML5 folder into GemShell.
3. Go to the **Steam** tab (or Settings).
4. Check **Enable Steamworks**.
5. Enter your **App ID**.

## Step 3: API Integration (Optional)
If you want to use Achievements or Leaderboards:
1. GemShell injects a global `Steam` object into your game.
2. Use JavaScript in C3 to call functions like `Steam.activateAchievement('ACHIEVEMENT_ID')`.
   - *Tip: You can wrap these calls in a C3 function to keep your events clean.*

## Step 4: Build
1. Click **Build**.
2. GemShell will generate the executable files for Windows, macOS, and Linux.
3. The necessary `steam_api` libraries are automatically included.

## Step 5: Test
Run the generated executable. The Steam Overlay should work immediately if Steam is running.
