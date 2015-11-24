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

### Build a release for Google Play

#### Build an unsigned release

    $ cordova build android --release

#### Generation of the private key

    $ mkdir ~/android_keystore
    $ keytool -genkey -v -keystore ~/.android_keystore/my-release-key.keystore -alias your_key -keyalg RSA -keysize 2048 -validity 10000

Skip this step if you already have a keystore.

#### Sign the application

    $ jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/.android_keystore/my-release-key.keystore ./platforms/android/build/outputs/apk/android-release-unsigned.apk your_key --signedjar ./platforms/android/build/outputs/apk/android-release-signed.apk

#### Check the signature

    $ jarsigner -verify -verbose -certs ./platforms/android/build/outputs/apk/android-release-signed.apk

#### Align the final APK

    $ zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-signed.apk ./platforms/android/build/outputs/apk/Adaptive_Conference_Companion.apk

You can now upload the APK on the Google Play.


## Compilation of the application for iPhone

# License

[GNU General Public License version 3](https://www.gnu.org/licenses/gpl-3.0.html).

# Contact

[Cédric Bonhomme](https://www.cedricbonhomme.org).
