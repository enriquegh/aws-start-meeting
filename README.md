# aws-start-meeting

## Summary
This project tries to mimic what is being done on the amazon-chime-sdk-js repo with their Selenium tests.

Specifically tries to do something very similar to [this](https://github.com/aws/amazon-chime-sdk-js/blob/master/integration/js/AppQuitAudioTest.js).

It also contains a test to a sample WebRTC demo for comparison.

## Installation
1. To install all dependencies run:
```bash
npm install
```
I used Node 12.13.0 and npm 6.12.0 but all versions should work.

2. Make sure you have geckodriver downloaded and running. You can download it [here](https://github.com/mozilla/geckodriver/releases).  I used 0.26.0

## Run tests on Sauce
Assuming you have SAUCE_USERNAME and SAUCE_ACCESS_KEY set:
```bash
npm test
```
This will run on FF latest on macOS 10.14 and Windows 10.
This can be modified in the `utils.js` file.

You can also include Chrome tests by commenting out the Chrome inclusion in `wdio.sauce.conf.js`

## Run tests locally
1. Start geckodriver manually
2. Run
```bash
npm run local
```
This will run one test on a FF browser locally