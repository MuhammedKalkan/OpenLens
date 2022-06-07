const fs = require('fs');

var packagejson = require('./package.json');

packagejson.build.publish = {
    url: "https://github.com/MuhammedKalkan/OpenLens/releases/download/latest",
    provider: "generic",
    channel: "latest"
}

fs.writeFileSync('package.json', JSON.stringify(packagejson));
