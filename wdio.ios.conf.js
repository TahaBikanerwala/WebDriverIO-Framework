const { join } = require('path');
const { config } = require('./wdio.shared.conf.js')

config.capabilities =[
    {
       
            maxInstances: 1,
            platformName: 'iOS',
            automationName : 'UiAutomator',
            deviceName: 'iPhone 13 mini',
            app:  join(process.cwd(),''),
            
        }
    
];

exports.config = config