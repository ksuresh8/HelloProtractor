import { element, protractor } from "protractor";
import { browser, by, By, $, $$, ExpectedConditions } from 'protractor';
import { Alert} from 'selenium-webdriver';



//var script = require (‘protractor’) ;

//var webdriver = require (‘selenium-webdriver’) ;


describe("This test case validates the manager login",function(){


   it("clicks on the manager login button",function(){

   
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    browser.navigate().refresh;
    browser.manage().window().maximize();
    browser.sleep(5000);
   //var ele1= element(by.className('btn btn-primary btn-lg')).click();
   //element(by.xpath("//button[contains(text(),'Bank Manager Login')]")).click();
   element(by.buttonText('Bank Manager Login')).click();
   //console.log('e1e1');
   element(By.buttonText('Add Customer')).click();
   element(by.model('fName')).sendKeys('sri');
   element(by.model('lName')).sendKeys('kanth');
   element(by.model('postCd')).sendKeys('500090');
   element(by.className('btn btn-default')).click();
   browser.sleep(2000);
   let ale:Alert = browser.switchTo().alert();
   //element(by.name("OK")).click();
   //let ale: Alert = browser.switchTo().alert();
   ale.getText().then(function (text) {
      console.log(text);
      var n = text.indexOf(":") + 1;
      var newstr = text.substring(n);
      ale.accept();
      browser.sleep(2000);
      element(by.buttonText('Open Account')).click();
      var select = element(by.model('custId'));
       select.$('[value="'+newstr+'"]').click();
      //element.all(by.id('userSelect')).element(by.model('custId')).
      //var size =element.all(by.model('currency')).getSize();
      //console.log(size);
      var select1 = element(by.model('currency'));
      select1.$('[value="Rupee"]').click();
      browser.sleep(2000);
      element(by.buttonText('Process')).click();
      let ale1:Alert = browser.switchTo().alert();
      ale1.getText();
      ale1.accept();
      browser.sleep(2000);
      element(by.buttonText('Customers')).click();
      element(by.model('searchCustomer')).sendKeys('sri');
      browser.sleep(10000);
   });
  
   //popupAlert.accept();
   });
   

});

