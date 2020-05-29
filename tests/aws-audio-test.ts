import { expect } from 'chai';
import { v4 as uuidv4 } from 'uuid';
 
let startMeeting = (userName :string, meetingID :string, baseURL :string) => {
    browser.url(`${baseURL}?m=${meetingID}`)

    let inputName = $('#inputName')
    inputName.setValue(userName)

    let joinBtn = $('#authenticate')
    joinBtn.click()

    browser.pause(10000)

    joinBtn = $('#joinButton')
    joinBtn.click()

}
let generateRandomID = () :number => {
    return uuidv4();
}

let meetingID = generateRandomID()
let userID = generateRandomID()
let user1Window;

describe("AWS Audio test", ()=> {
    it(`should start user ${userID} in meeting`, ()=> {
        let baseURL = process.env.CHIME_LOCAL ? "http://localhost:8080" : "https://xijghn8zxf.execute-api.us-east-1.amazonaws.com/Prod"
        startMeeting(userID.toString(), meetingID.toString(), baseURL);
        browser.pause(10000)
        user1Window = browser.getWindowHandle()
        let roster = $('#roster')
        roster.waitForDisplayed(10000)
        let users = roster.$$('li')
        expect(users).to.be.lengthOf(1)
        users.forEach(user => {
            user.getText()
        }); 
    })
})


