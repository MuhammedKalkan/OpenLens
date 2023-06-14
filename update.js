const fs = require('fs');
const os = require('os');

const packageJsonOpenLens = require('./lens/open-lens/package.json');

packageJsonOpenLens.build.publish = [{
    url: "https://github.com/MuhammedKalkan/OpenLens/releases/download/Latest",
    provider: "generic"
}];

packageJsonOpenLens.version = `${packageJsonOpenLens.version}-${process.env.BUILD_ID}`;
packageJsonOpenLens.build.npmRebuild = true;
packageJsonOpenLens.build.detectUpdateChannel = false;
packageJsonOpenLens.devDependencies["electron-builder"] = "^24.4.0"

delete packageJsonOpenLens.scripts.postinstall;

packageJsonOpenLens.copyright = [
    packageJsonOpenLens.copyright,
    '',
    'Binary application builds @ MuhammedKalkan/OpenLens',
    'by Muhammed Kalkan, Jan-Otto Kröpke, Ebby Peter, Xaver Lohmüller'
].join("\r\n")

console.log(`Set build version: ${packageJsonOpenLens.version}`)

fs.writeFileSync('./lens/open-lens/package.json', JSON.stringify(packageJsonOpenLens, null, 2));
