const fs = require('fs');

var packagejson = require('./package.json');

packagejson.build.publish = [{
    url: "https://github.com/MuhammedKalkan/OpenLens/releases/download/Latest",
    provider: "generic"
}];

packagejson.build.win.artifactName = "OpenLens.Setup.${version}.${ext}";
packagejson.build.win.target = ["nsis", "msi"];
packagejson.build.msi = {
    oneClick: true,
    perMachine: false,
    createDesktopShortcut: false,
    createStartMenuShortcut: true,
    additionalWixArgs: ['-sval']
};

fs.writeFileSync('package.json', JSON.stringify(packagejson));
