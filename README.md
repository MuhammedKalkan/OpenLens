# OpenLens

[![Build Lens](https://github.com/MuhammedKalkan/OpenLens/actions/workflows/main.yml/badge.svg)](https://github.com/MuhammedKalkan/OpenLens/actions/workflows/main.yml)

This is the Binary Build Repo for Lens Repository located here : https://github.com/lensapp/lens.git

However, this build does not require you to log in and includes only  open source part. Download and use as is.

Go To Release to download your binary of type Linux , MacOS or Windows

If you have trouble about not seeing pod logs, remove old config files / extensions remaining from old Lens app.

**NOTE:** Please see https://github.com/MuhammedKalkan/OpenLens/discussions/19 to contribute to certificates discussion

**NOTE:** Auto Updater is now live starting with every binary downloaded from Latest tag or the corresponding release assets.

**NOTE:** For M1 Mac users, arm64 builds currently needs a terminal command in order to run correctly 

`sudo xattr -r -d com.apple.quarantine "/Applications/OpenLens.app"`

Please see https://github.com/MuhammedKalkan/OpenLens/issues/18

**NOTE:** MacOS users will have to [manually trust the app](https://support.apple.com/guide/mac-help/open-a-mac-app-from-an-unidentified-developer-mh40616/mac), as it is currently not signed properly, see [Issue #1](https://github.com/MuhammedKalkan/OpenLens/issues/1)
