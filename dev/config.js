var product = 'src';
module.exports = {
    "resultCssFileName": "app.scss",
    "cleanFileType": [
        "../output/*",
        "../output/**/*"
    ],
    "htmlSourcePath": "../" + product + "/html/*",
    "SourcePath": "../" + product + "/public/",
    "styleSourcePath": "../" + product + "/public/scss/",
    "imagesSourcePath": "../" + product + "/public/images/*",
    "iconSourcePath": "../" + product + "/public/icon/*",
    "jsSourcePath": "../" + product + "/public/js/*",
    "cssSourcePath": "../" + product + "/public/css/*",
    "htmlResultPath": "../output/html",
    "styleResultPath": "../output/public/css",
    "imagesResultPath": "../output/public/images",
    "iconResultPath": "../output/public/icon",
    "jsResultPath": "../output/public/js",
    "cssResultPath": "../output/public/css",
    "needsSourceMaps": false,
    "browserSyncMod": "server",
    "browserSyncPort": 8081,
    "browserSyncShowLog": false,
    "browserSyncStartPath": "/",
    "browserSyncHost": "",
    "browserSyncWatchPath": [
        "../output/html/*.html",
        "../output/public/**/*"
    ],
    "browserSyncServerRoute": {
        "/public": "../output/public",
        "/web": "../output/html"
    },
    "independentImagesDirectory": "/",
    "browserSyncProxy": "",
    "openIncludeFunction": true,
    "includePrefix": "@@"
};