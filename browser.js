const puppeteer = require('puppeteer')

async function startBrowser(){
    let browser
    try{
        browser = await puppeteer.launch({headless:false, args:['--no-sandbox', '--disable-gpu'], userDataDir:'./tmp', 'ignoreHTTPSErrors':true})
    }catch (e){
        console.log("Could not create a browser instance => :", e)
    }
    return browser
}
module.exports = {
    startBrowser
}