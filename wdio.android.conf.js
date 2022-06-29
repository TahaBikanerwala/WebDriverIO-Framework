import { join } from 'path';
import { config } from './wdio.shared.conf.js';

config.capabilities =[
    {
       
            maxInstances: 1,
            platformName: 'Android',
            automationName : 'UiAutomator2',
            deviceName: 'Pixel 5 API 30',
            app:  join(process.cwd(),'./app/SpringHealth.apk'),

        }
    
];

const _config = config;
export { _config as config };
