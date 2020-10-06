import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

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