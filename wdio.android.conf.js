const { join } = require('path');
const { config } = require('./wdio.shared.conf.js')

config.capabilities =[
    {
       
            maxInstances: 1,
            platformName: 'Android',
            automationName : 'UiAutomator2',
            deviceName: 'Pixel XL API 30',
            app:  join(process.cwd(),'./app/SpringHealth-2.17.0(10).apk'),
            
        }
    
];

exports.config = config
