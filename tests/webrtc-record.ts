describe("WebRTC test", ()=> {
    it(`should record stream and play it back`, ()=> {
        browser.url("https://webrtc.github.io/samples/src/content/getusermedia/record/");
        let startBtn = $('#start');
        startBtn.click();

        let recordBtn = $('#record');
        recordBtn.click();

        browser.pause(5000);
        
        recordBtn.click();
        
        let playBtn = $('#play');
        playBtn.click();
        
        browser.pause(10000);


    })

})


