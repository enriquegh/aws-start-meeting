const date = new Date()
cloneCapabilities = (capabilities, numberOfClones) => {
    const capsList = []
    for (let index = 0; index < numberOfClones; index++) {
        capsList.push(capabilities);

    }
    return capsList
}

FF_CAPS = {
    browserName: "firefox",
    platformName: "Windows 10",
    browserVersion: "latest",
    "sauce:options": {
        seleniumVersion: "3.141.59",
        build: `aws-audio-tests ${date.toISOString()}`,
        extendedDebugging: true
        },
    'moz:firefoxOptions': {
        args: [],
        prefs: {
            'media.navigator.streams.fake': true,
            'media.navigator.permission.disabled': true,
            'devtools.chrome.enabled': true,
            'devtools.debugger.prompt-connection': false,
            'devtools.debugger.remote-enabled': true
        },
    },
}

FF_MAC_CAPS = {
    browserName: "firefox",
    platformName: "macOS 10.14",
    browserVersion: "latest",
    "sauce:options": {
        seleniumVersion: "3.141.59",
        build: `aws-audio-tests ${date.toISOString()}`,
        extendedDebugging: true
        },
    'moz:firefoxOptions': {
        args: [],
        prefs: {
            'media.navigator.streams.fake': true,
            'media.navigator.permission.disabled': true,
            'devtools.chrome.enabled': true,
            'devtools.debugger.prompt-connection': false,
            'devtools.debugger.remote-enabled': true
        },
    },
}
const CHROME_CAPS = {
    browserName: "chrome",
    platformName: "Windows 10",
    browserVersion: "latest",
    "sauce:options": {
        build: `aws-audio-tests ${date.toISOString()}`

    },
    'goog:chromeOptions': {
        args: ["--use-fake-device-for-media-stream", "--use-fake-ui-for-media-stream"],
    },
}

module.exports.cloneCapabilities = cloneCapabilities
module.exports.CHROME_CAPS = CHROME_CAPS
module.exports.FF_CAPS = FF_CAPS
module.exports.FF_MAC_CAPS = FF_MAC_CAPS

