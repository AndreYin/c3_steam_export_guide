# Configuring Steamworks

Before you can upload your game to Steam, you need to create and configure **depots** in Steamworks. Depots are containers for your game files, and you'll typically need separate depots for Windows and Linux builds.

## What is a Depot?

A depot is a collection of files that Steam downloads to a user's machine. Each depot has a unique ID and can be configured to only download on specific operating systems.

## Step 1: Access Your App's Depots

1. Log in to [Steamworks](https://partner.steamgames.com/)
2. Go to **Apps & Packages** → **All Applications**
3. Select your app
4. Navigate to **Edit Steamworks Settings** → **SteamPipe** → **Depots**

## Step 2: Create Depots

By default, your app will have one depot created. For multi-platform releases, you'll want to create separate depots:

### Windows Depot

1. Click **Add new depot**
2. Enter a name like `YourGame Windows`
3. Note the **Depot ID** (you'll need this for uploading)
4. Under **Operating System**, select **Windows**
5. Leave **Architecture** as **Any** (unless you have specific 32/64-bit builds)

### Linux Depot

1. Click **Add new depot**
2. Enter a name like `YourGame Linux`
3. Note the **Depot ID**
4. Under **Operating System**, select **Linux**
5. Leave **Architecture** as **Any**

::: tip 💡 Shared Content Depot
If your Windows and Linux builds share a lot of common files (like assets), you can create a third depot for shared content with **OS** set to **All OSes**. This reduces download sizes for users who own both platforms.
:::

## Step 3: Configure Depot Properties

For each depot, configure the following:

| Setting | Description |
|---------|-------------|
| **Name** | A descriptive name for your reference |
| **OS** | The operating system this depot targets |
| **Architecture** | CPU architecture (usually "Any") |
| **Language** | Set to "All languages" unless you have language-specific content |
| **DLC** | Leave unchecked for base game depots |

## Step 4: Add Depots to Your App's Packages

Depots must be included in a **package** for users to download them:

1. Go to **Apps & Packages** → **All Packages**
2. Select your app's package (e.g., "YourGame - Base Package")
3. Click **Add/Remove Depots**
4. Check the boxes for your Windows and Linux depots
5. Click **Save**

::: warning ⚠️ Don't Forget This Step
If you skip adding depots to a package, users won't be able to download your game even after you upload builds.
:::

## Step 5: Publish Your Changes

After configuring depots:

1. Go to **Publish** tab in your app settings
2. Review the changes
3. Click **Prepare for Publishing**
4. Click **Publish to Steam**

Changes to depots require publishing before they take effect.

## Example Depot Configuration

Here's a typical setup for a Construct 3 game:

| Depot ID | Name | OS | Purpose |
|----------|------|-----|---------|
| 1234561 | MyGame Windows | Windows | Windows executable and DLLs |
| 1234562 | MyGame Linux | Linux | Linux executable and libraries |

## Using Depot IDs in Upload Scripts

When creating your `app_build.vdf` for SteamCMD, reference each depot:

```vdf
"appbuild"
{
    "appid" "YOUR_APP_ID"
    "desc" "v1.0.0 - Windows and Linux"
    "buildoutput" "./output/"
    "contentroot" ""
    "setlive" "default"
    "depots"
    {
        "1234561"
        {
            "FileMapping"
            {
                "LocalPath" "./windows/*"
                "DepotPath" "."
                "recursive" "1"
            }
        }
        "1234562"
        {
            "FileMapping"
            {
                "LocalPath" "./linux/*"
                "DepotPath" "."
                "recursive" "1"
            }
        }
    }
}
```

## Next Steps

Once your depots are configured and published:

- 📖 [Uploading to Steam](./uploading-to-steam) — Upload your builds using SteamCMD
