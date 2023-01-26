const fs = require('fs');

var packagejson = require('./packages/open-lens/package.json');

packagejson.build.publish = [{
    url: "https://github.com/MuhammedKalkan/OpenLens/releases/download/Latest",
    provider: "generic"
}];

packagejson.build.win.artifactName = "OpenLens.Setup.${version}.${ext}";

fs.writeFileSync('package.json', JSON.stringify(packagejson));
