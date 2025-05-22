import { FusesPlugin } from "@electron-forge/plugin-fuses";
import { FuseV1Options, FuseVersion } from "@electron/fuses";
import { build } from "vite";

/** @type {import("@electron-forge/shared-types").ForgeConfig} */
export default {
    packagerConfig: {
        asar: true
    },
    rebuildConfig: {},
    makers: [
        {
            name: "@electron-forge/maker-squirrel",
            config: {}
        },
        {
            name: "@electron-forge/maker-zip",
            platforms: ["darwin"]
        },
        {
            name: "@electron-forge/maker-deb",
            config: {}
        },
        {
            name: "@electron-forge/maker-rpm",
            config: {}
        }
    ],
    plugins: [
        {
            name: "@electron-forge/plugin-vite",
            config: {
                build: [
                    {
                        entry: "src/main/main.js",
                        config: "src/main/vite.config.js",
                        target: "main"
                    },
                    {
                        entry: "src/preload/preload.js",
                        config: "src/preload/vite.config.js",
                        target: "preload"
                    }
                ],
                renderer: [
                    {
                        name: "main_window",
                        config: "src/renderer/vite.config.js"
                    }
                ]
            }
        },
        new FusesPlugin({
            version: FuseVersion.V1,
            [FuseV1Options.RunAsNode]: false,
            [FuseV1Options.EnableCookieEncryption]: true,
            [FuseV1Options.EnableNodeOptionsEnvironmentVariable]: false,
            [FuseV1Options.EnableNodeCliInspectArguments]: false,
            [FuseV1Options.EnableEmbeddedAsarIntegrityValidation]: true,
            [FuseV1Options.OnlyLoadAppFromAsar]: true
        })
    ]
};
