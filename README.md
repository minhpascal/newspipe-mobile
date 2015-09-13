Web
===

# Presentation

PhoneGap client for pyAggr3g470r.

# Installation

## Installation of Bower to manage web libraries

    $ sudo npm install -g bower

By supposing that you already have installed [npm](https://www.npmjs.com)
(generally with Node.js).

## Installation of the Android SDK

See information [here](https://developer.android.com/sdk) to install the Android
SDK. Then export the variable ``ANDROID_HOME``:

    $ export ANDROID_HOME=~/.android-sdk-linux/

You can add this line in your *.bashrc* file.

## Installation of PhoneGap and Cordova

    $ npm install -g phonegap
    $ npm install -g cordova

## Compilation of the application for Android

    $ git clone
    $ cd client/
    $ bower install
    $ cordova plugin add cordova-plugin-whitelist
    $ cordova plugin add cordova-plugin-dialogs
    $ cordova plugin add org.apache.cordova.network-information
    $ cordova platform add android
    $ cordova build android
    $ adb install -r platforms/android/build/outputs/apk/android-debug.apk

## Compilation of the application for iPhone

# License

[GNU Affero General Public License version 3](https://www.gnu.org/licenses/agpl-3.0.html).

# Contact

[Cédric Bonhomme](https://www.cedricbonhomme.org).
