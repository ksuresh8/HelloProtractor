import { browser, element, by, By, $, $$, ExpectedConditions } from 'protractor';

describe('Protractor Typescript Demo', function() {
	it('title verifications', function() {
		console.log("Running first test case....");
			browser.get('https://angularjs.org/');
			browser.getTitle().then(function(title){
			console.log("The title is  : "+title)
			browser.sleep(5000);
			})
	});
}); 

describe('async function', function() {
	it('should wait on async function in conditional', async function() : Promise<any> {
	  await browser.get('http://www.angularjs.org');
	  let todoList = element.all(by.repeater('todo in todoList.todos'));
	  if ((await todoList.count()) > 1) {
		debugger
		expect((await todoList.get(1).getText())).toEqual('build an AngularJS app');
	  }
	});
  });

describe('Protractor Demo App', function () {

	it('should have a title', async function() : Promise<any> {

		browser.driver.get('http://www.way2automation.com/angularjs-protractor/banking/#/');
		expect(await browser.getTitle()).toEqual('Protractor practice website - Banking App');
		element(by.buttonText('Bank Manager Login')).click();
		element(by.buttonText('Open Account')).click();

		//Drop down selection  using option's visibility text 
		element(by.model('currency')).element(by.css("[value='Dollar']")).click();

		//This is a short form. $ in short form for  .By.css
		// element(by.model('currency')).$('[value="Dollar"]').click();

		//To select using index
		var select = element(by.id('userSelect'));
		select.$('[value="1"]').click(); // To select using the index .$ means a shortcut to .By.css
		element(by.buttonText("Process")).click();
		browser.sleep(7500);// wait in miliseconds
		browser.switchTo().alert().accept();

	});
});