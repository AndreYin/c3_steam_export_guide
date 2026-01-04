---
# Disables the 'Next Page' button for this specific page
next: false
---

# Steam Export Options for Construct 3

::: details ❔ Who is this guide made for?
Developers who already have a Steamworks account set up and want to add Steamworks functionality on their Construct 3 game exports.
:::

::: details ❔ Why was this guide made?
Through the years, Construct 3 has had multiple methods for exporting your games, and getting them on Steam. 

Generally, getting your game onto Steam is quite simple - any method would enable you to export your game, upload it to Steam, and be done with it. 

The issues begin when trying to implement Steamworks features onto your games, like the Steam Achievements, Steam Overlay and SteamDeck support. 

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

| Feature | **Official Webview2**<span title="Warning - Gamepad Input Issues">⚠️</span> | **Official CEF**  | **NW.js**<span title="Deprecated after r450">⚠️</span> | **Pipelab** |**GemShell** |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Platforms Supported** | Windows | Linux | All Platforms |  All Platforms | All Platforms |
| **Setup Difficulty** | ⭐⭐⭐ Easy  |⭐⭐⭐ Easy  |⭐⭐⭐ Easy  |  ⭐⭐ Moderate |⭐⭐ Moderate |
| **File Size**        | 🟢 Tiny (~3MB+) | 🔴 Large (~150MB+) |🔴 Large (~150MB+)|  🔴 Large (~150MB+) |🟢 Tiny (~3MB+) |
| **Steamworks API**    | 🟢Addons  | 🟢Addons | 🟢Addons |  🟢 Addons | 🟡Pure JavaScript|
| **Steam Overlay**     | 🟢Works <span title="Currently works, but is a workaround that could break again at any time">⚠️</span> | 🔴Broken | 🟢Works | 🟢Works |🟡??? |
| **Steam Input**       | 🔴Broken  | 🔴Broken | 🟢Works | 🟢Works |🟡??? |
| **Cost**             | Included in C3  |Included in C3  | Included in C3  | Free / Paid | Free / $20 (Pro) |



## Construct 3 Default Exporters (after r450)

The Construct 3 default exporters are mostly recommended for simple projects, since everything but the Steamworks addon is already included in the latest versions of Construct 3.

::: warning ⚠️ Webview2 currently has issues with gamepad inputs. 
:::

::: tip ➡️ Continue to the [Webview2 / CEF Export Tutorial](default/webview2-cef) 
:::

## Construct 3 NW.js (below r450)

::: warning ⚠️ After release 450 of Construct 3, the older NW.js option was deprecated in favor of the newer webview2/CEF options, so it's not officially supported anymore. That being said, you can still use it on [older C3 releases](https://www.construct.net/en/make-games/releases) and it works great, that's why we're listing it here.
:::

::: tip ➡️ Continue to the [NW.js Export Tutorial](default/nwjs) 
:::

## Pipelab
[Pipelab](https://pipelab.app) is a third-party tool that streamlines the export process, which is the industry standard for web-to-desktop apps. It has automation features aside from just exporting, like file management, automatic Steamworks uploading, and more. It also supports multiple storefronts from the get-go, like Steam, Epic Games, and more.

::: tip ➡️ [Learn more about Pipelab](pipelab)
:::


## GemShell
GemShell is a native wrapper that uses the system's installed webview (WebView2 on Windows) but adds a native bridge for Steamworks.

::: tip ➡️ Continue to the [GemShell Export Tutorial](gemshell) 
:::
