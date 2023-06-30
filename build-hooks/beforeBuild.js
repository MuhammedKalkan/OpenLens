const archMap = {
    "amd64": "x86_64",
    "arm64": "aarch64",
}

module.exports = async (buildContext) => {
    console.log(buildContext)
    if (buildContext.platform.name !== "linux") return true

    if (buildContext.arch in archMap) {
        process.env.CC = `${archMap[buildContext.arch]}-linux-gnu-gcc`
        process.env.CXX = `${archMap[buildContext.arch]}-linux-gnu-g++`
    } else {
        process.env.CC = "gcc"
        process.env.CXX = "g++"
    }

    console.log(process.env.CXX)
    return true
}
