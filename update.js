const fs = require('fs');

var packagejson = require('./package.json');

packagejson.build.publish = {
    url: "https://github.com/MuhammedKalkan/OpenLens/releases/download/Latest",
    provider: "generic"
};

packagejson.build.win.artifactName = "OpenLens.Setup.${version}.${ext}";
packagejson.build.mac.target = {
    target: 'default',
    arch: [
      'x64',
      'arm64'
    ]
  };

fs.writeFileSync('package.json', JSON.stringify(packagejson));
