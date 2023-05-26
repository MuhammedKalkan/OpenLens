const fs = require('fs');

var packagejson = require('./lens/open-lens/package.json');

packagejson.build.publish = [{
    url: "https://github.com/MuhammedKalkan/OpenLens/releases/download/Latest",
    provider: "generic"
}];

packagejson.build.win.artifactName = "OpenLens.Setup.${version}.${ext}";

if (process.platform != "win32") {
    // build both x86_64 and arm64 for Linux and Darwin
    packagejson.scripts['build:app'] = "electron-builder --publish onTag --x64 --arm64";
}

fs.writeFileSync('./lens/open-lens/package.json', JSON.stringify(packagejson));


let npmrc = fs.readFileSync('./lens/.npmrc','utf-8');
npmrc = npmrc.replace("disturl \"","disturl = \"")
npmrc = npmrc.replace("target \"","target = \"")
npmrc = npmrc.replace("runtime \"","runtime = \"")
fs.writeFileSync('./lens/.npmrc',npmrc)
