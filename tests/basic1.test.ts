import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

// E2E scenarios for banking application

// TC#1 -- Launching the application

describe('E2E Automation', function(){
	it('this will launch the application',function(){
		browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		browser.manage().window().maximize();
		browser.sleep(5000);
	})
		// TC #2 (validating the title of the application)
		it('Validate the browser title',async function():Promise<any>{
		browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
		var e1 = expect(await browser.getTitle()).toEqual('Protractor practice website - Banking App');
		// element(by.className('btn home')).click();
         browser.sleep(5000);
        })
        it('This test case validates the login and deposit feature',function(){

            element(by.tagName('button.btn.btn-primary.btn-lg')).click(); // this will click on customer login
             browser.sleep(5000);
           var s1=  element(by.id('userSelect'));
           s1.$(('[value="2"]')).click();
           element(by.buttonText('Login')).click();
           console.log('logged in sucess');
           element(by.linkText('Deposit')).click();

                          
        })
	
});

