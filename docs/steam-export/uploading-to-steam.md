# Uploading to Steam

Once you've exported and tested your game locally, you can upload it to Steam using **SteamCMD** or the **Steamworks web interface**.

## Option A: Steamworks Web Upload (Simple)

1. Go to your app's Steamworks page
2. Navigate to **SteamPipe** → **Builds**
3. Click **Upload a build**
4. Select your game folder and follow the prompts

## Option B: SteamCMD (Recommended for automation)

1. Download [SteamCMD](https://developer.valvesoftware.com/wiki/SteamCMD)
2. Create a build script (`app_build.vdf`):

```vdf
"appbuild"
{
    "appid" "YOUR_APP_ID"
    "desc" "Build description"
    "buildoutput" "./output/"
    "contentroot" "./content/"
    "setlive" "default"
    "depots"
    {
        "YOUR_DEPOT_ID"
        {
            "FileMapping"
            {
                "LocalPath" "*"
                "DepotPath" "."
                "recursive" "1"
            }
        }
    }
}
```

3. Run: `steamcmd +login YOUR_USERNAME +run_app_build app_build.vdf +quit`

## Tips

- Always test your build locally before uploading
- Use descriptive build descriptions to track versions
- Consider setting up a beta branch for testing before going live
