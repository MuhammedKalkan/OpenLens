# OpenLens Build Repo

[![Build Lens](https://github.com/MuhammedKalkan/OpenLens/actions/workflows/main.yml/badge.svg)](https://github.com/MuhammedKalkan/OpenLens/actions/workflows/main.yml)

##  Build Repo Only
This repo **ONLY PROVIDES SIGNED BINARIES AND DOES NOT ALTER SOURCE CODE** for the OpenLens repo. For software issues regarding OpenLens or the Lens IDE, go to the [Lens repo](https://github.com/lensapp/lens/issues) and open an issue there.

## Extensions

Starting with 6.3.0 some extensions are removed from Lens. To install these most used extensions simply type **@alebcay/openlens-node-pod-menu** into the Extensions UI in OpenLens Settings page and it should install automatically.
For sources please refer [here](https://www.npmjs.com/package/@alebcay/openlens-node-pod-menu)

## Overview

This is the Binary Build Repo for the [Lens repository](https://github.com/lensapp/lens.git) aka **OpenLens**. This build only includes the open source part of the Lens IDE and does not require login. This repo was created due to lensapp/lens#5444.

Download and use as is. If you have trouble about not seeing pod logs, remove old config files / extensions remaining from old Lens app.

Auto Updater is now live starting with every binary downloaded with the `Latest` tag or the corresponding release assets.

### OpenLens vs Lens IDE
Paraphrasing from the [OpenLens README](https://github.com/lensapp/lens#readme)

#### OpenLens
The [OpenLens repository](https://github.com/lensapp/lens.git), is where Team Lens (Mirantis) develops the [Lens IDE](https://k8slens.dev/) product together with the community. It is backed by a number of Kubernetes and cloud native ecosystem pioneers. This source code is available to everyone under the [MIT license](https://github.com/lensapp/lens/blob/master/LICENSE).

#### Lens IDE
The Kubernetes management tool [Lens IDE](https://k8slens.dev/) is a distribution of the OpenLens repository with Team Lens specific customizations released under a traditional EULA.

## Installation

### Manual
Go to [Releases](https://github.com/MuhammedKalkan/OpenLens/releases) and download the relevant binary for your system.

### MacOS
#### Homebrew
```
brew install --cask openlens
```

### Linux
Download and install appropriate package
(`.rpm`, `.deb` or `.AppImage`)
and install based on available package manager.

### Windows

#### Scoop
```
scoop bucket add extras
scoop install openlens
```
#### Winget
```
winget install openlens
```


## Thanks
Big Thanks to
[Ebby Peter](https://github.com/ebbypeter)
,
[Xaver Lohmüller](https://github.com/xavierLowmiller)
and those who all supported to raise funds, for their contributions to signing the app for the community
