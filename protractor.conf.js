exports.config = {
        framework: 'jasmine', //Type of Framework used 
        directConnect:true, 
        specs: ['tests/**/*[tT]est.ts'], //Name of the Specfile 
        onPrepare() { 
              require('ts-node').register({ 
              project: require('path').join(__dirname, './tsconfig.json') // Relative path of tsconfig.json file 
        	});
        } 
}