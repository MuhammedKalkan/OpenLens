const fs = require('fs');

var packagejson = require('./lens/open-lens/package.json');

packagejson.build.publish = [{
    url: "https://github.com/MuhammedKalkan/OpenLens/releases/download/Latest",
    provider: "generic"
}];

packagejson.build.win.artifactName = "OpenLens.Setup.${version}.${ext}";
packagejson.build.npmRebuild = true;

fs.writeFileSync('./lens/open-lens/package.json', JSON.stringify(packagejson));
