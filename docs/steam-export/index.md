---
# Disables the 'Next Page' button for this specific page
next: false
---

# Steam Export Options for Construct 3

::: details ❔ Who is this guide made for?
Developers who already have a Steamworks account set up and want to add Steamworks functionality on their Construct 3 game exports.
:::

::: details ❔ Why was this guide made?
Through the years, Construct 3 has had multiple methods for exporting to Steam. 

Generally, getting your game onto Steam is quite simple - any method would enable you to export your game, upload it to Steam, and be done with it. 

The issues begin when trying to implement Steamworks features onto your games, like the Steam Overlay, Steam Achievements, and SteamDeck support. 

This guide aims to provide a detailed comparison of the main methods for exporting to Steam, helping you choose the right one for your project.
:::

::: details ❔ What issues can we expect when getting our Construct 3 game onto Steam?
The most pressing Steam issues currently are <strong>Steam Overlay support</strong> and <strong>Steam Input bugs</strong>. 


<strong>Steam Overlay:</strong>

Depending on your export configuration, Steam Overlay (SHIFT + TAB usually while any Steam game is running) just won't work due to incompatibilities. This also means that unlocking an achievement will not show a pop-up notification while you play the game, since the overlay cannot be rendered above the game window. 

<strong>Steam Input:</strong>

Steam uses Steam Input to translate any gamepad input into a standardized format that can be used for any game. This works just fine on Windows machines, but it's a big issue getting your games running on the Steamdeck (and future SteamOS machines) - there is a bug where the controls just don't work with your game.


:::


::: details ❔ What if I don't have a Steamworks account yet?
Please look into the Steamworks account setup guide by Valve: [https://partner.steamgames.com/doc/gettingstarted/account](https://partner.steamgames.com/doc/gettingstarted/account)
:::

::: details ❔ Why is there no Mac OSX guide?
Unfortunately I don't have a Mac to test the OSX builds for Steam, but from what I've heard from other people trying to get their games there, it never did work properly. If you have any info on how to get OSX builds with Steamworks support and want to add it to the guide, feel free to create a PR.
:::



## Comparison Overview

| Feature | **Official Webview2** | **Official CEF**  | **NW.js** | **Pipelab** |**GemShell** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Platforms Supported** | Windows | Linux | All Platforms |  All Platforms | All Platforms |
| **Setup Difficulty** | ⭐⭐⭐ Easy  |⭐⭐⭐ Easy  |⭐⭐⭐ Easy  |  ⭐⭐ Moderate |⭐⭐ Moderate |
| **File Size**        | 🟢 Tiny (~3MB+) | 🔴 Large (~150MB+) |🔴 Large (~150MB+)|  🔴 Large (~150MB+) |🟢 Tiny (~3MB+) |
| **Steamworks API**    | 🟢Addons  | 🟢Addons | 🟢Addons |  🟢 Addons | 🟡Pure JavaScript|
| **Steam Overlay**     | 🔴Broken  | 🔴Broken | 🟢Works | 🟢Works |🟡??? |
| **Steam Input**       | 🔴Broken  | 🔴Broken | 🟢Works | 🟢Works |🟡??? |
| **Cost**             | Included in C3  |Included in C3  | Included in C3  | Free / Paid | Free / $20 (Pro) |



## Construct 3 Default Exporters (after r450)

The Construct 3 default exporters are mostly recommended for projects that don't require advanced features like custom plugins or native Steamworks integration. 

::: warning ⚠️ Both Webview2 and CEF have some Steam-related issues that can affect the overall experience. 
:::

- **Pros:**
  - ⭐ Built-in Construct 3 latest releases.
  - ⭐ Single-click exports.
  - ⭐ Officialy supported Steamworks addons.
- **Cons:**
  - ❌ Has issues with Steam overlay.
  - ❌ Relies on multiple exports for different systems (Webview2 for Windows, CEF for Linux).

::: tip ➡️ Continue to the [Webview2 / CEF Export Tutorial](default/webview2-cef) 
:::

## Construct 3 NW.js (below r450)

::: warning ⚠️ After release 450 of Construct 3, the older NW.js option was deprecated in favor of the newer webview2/CEF options, so it's not officially supported anymore. That being said, you can still use it on [older C3 releases](https://www.construct.net/en/make-games/releases) and it works great, that's why we're listing it here.
:::

- **Pros:**
  - ⭐ Built-in the older releases of Construct 3.
  - ⭐ Single-click exports for all OS's (Windows, Linux and macOS).
  - ⭐ Official [Greenworks](https://www.construct.net/en/construct-2/addons/83/greenworks/versions) addon supports basic Steamworks functionalities.
  - ⭐ Unofficial [Greengrinds](https://www.construct.net/en/make-games/addons/244/greengrinds/versions) addon supports advanced Steamworks functionalities.
- **Cons:**
  - ❌ Big filesize (~150MB+).
  - ❌ Deprecated - No more updates or official support.
  - ❌ Stuck on NW.js v0.100.1 / Steamworks SDK v1.62 (GreenWorks).
  - ❌ Stuck on NW.js v0.98 / Steamworks SDK 1.60 (Greengrinds).

::: tip ➡️ Continue to the [NW.js Export Tutorial](default/nwjs) 
:::

## Pipelab
[Pipelab](https://pipelab.app) is a third-party tool that streamlines the export process, which is the industry standard for web-to-desktop apps. It has automation features aside from just exporting, like file management, automatic Steamworks uploading, and more. It also supports multiple storefronts from the get-go, like Steam, Epic Games, and more.

- **Pros:**
  - ⭐ Extremely customizable.
  - ⭐ Supports multiple frameworks such as Electron, Tauri and Neutralino.
  - ⭐ Supports multiple storefronts (Steam, Epic Games, and more).
  - ⭐ Rich ecosystem of packages.
  - ⭐ Powerful automation tools.
- **Cons:**
  - ❌ User has to set-up their own automation solution.
  - ❌ Large file sizes.

::: tip ➡️ Learn how to integrate Pipelab into your project using the official [Pipelab Documentation](https://docs.pipelab.app) 
:::


## GemShell
GemShell is a native wrapper that uses the system's installed webview (WebView2 on Windows) but adds a native bridge for Steamworks.

- **Pros:**
  - ⭐ Doesn't rely on NW.js, Electron, or Chromium in any way.
  - ⭐ Easy, drag-and-drop solution.
- **Cons:**
  - ❌ Requires the user to implement their own JS calls onto their Event Sheets to use the Steamworks API.

::: tip ➡️ Continue to the [GemShell Export Tutorial](default/gemshell) 
:::
