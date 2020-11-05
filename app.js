const webdriver = require('selenium-webdriver')
const chrome = require('chromedriver')

async function workspacegoogle(){

let driver = await new webdriver.Builder().forBrowser('chrome').build();
 

await driver.get('https://workspace.google.com/signup/businessstarter/welcome?hl=en').then(async function(){
     

    await driver.findElement(webdriver.By.className('whsOnd zHQkBf')).click();
    await driver.findElement(webdriver.By.className('whsOnd zHQkBf')).sendKeys('Espaço W Soluções'); 
    await driver.findElement(webdriver.By.className('SCWude')).click() ;
    await driver.findElement(webdriver.By.className('CwaK9')).click();
        
    async function nexpage(){
    await driver.findElement(webdriver.By.xpath(`//input[@aria-label="First name"]`)).click() ;
    await driver.findElement(webdriver.By.xpath(`//input[@aria-label="First name"]`)).sendKeys('Albert') ;
    await driver.findElement(webdriver.By.xpath(`//input[@aria-label="Last name"]`)).click() ;
    await driver.findElement(webdriver.By.xpath(`//input[@aria-label="Last name"]`)).sendKeys('Ferreira') ;
    await driver.findElement(webdriver.By.xpath(`//input[@aria-label="Current email address"]`)).click() ;
    await driver.findElement(webdriver.By.xpath(`//input[@aria-label="Current email address"]`)).sendKeys('albert@espacow.com.br') ;
    setTimeout(function(){driver.quit() }, 2000);
}

    setTimeout(function(){nexpage() }, 2000);

    
    
});


} 
workspacegoogle()