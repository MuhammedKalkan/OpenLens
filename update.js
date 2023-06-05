const fs = require('fs');

const packageJsonOpenLens = require('./lens/open-lens/package.json');

packageJsonOpenLens.build.publish = [{
    url: "https://github.com/MuhammedKalkan/OpenLens/releases/download/Latest",
    provider: "generic"
}];

packageJsonOpenLens.version = `${packageJsonOpenLens.version}-${process.env.BUILD_NUMBER}`;
packageJsonOpenLens.build.npmRebuild = true;

console.log(`Set build version: ${packageJsonOpenLens.version}`)

fs.writeFileSync('./lens/open-lens/package.json', JSON.stringify(packageJsonOpenLens, null, 2));
