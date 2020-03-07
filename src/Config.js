const fs = require('fs');
const path = require('path');
const os = require('os');

class Config {

    constructor() {
        if (!Config.instance) {
            Config.instance = this;
        }
        this.contents = 'unloaded';
        this.loadData();
        return Config.instance;
    }

    loadData() {
        let transformFile = path.resolve('.json-log-viewer.json');
        if (!fs.existsSync(transformFile)) {
            transformFile = path.join(os.homedir(), '.json-log-viewer.json');
        }
        if (fs.existsSync(transformFile)) {
            this.contents = fs.readFileSync(transformFile, 'utf8');
        } else {
            this.contents = {
                'columns': [{
                        'title': 'Timestamp',
                        'key': 'timestamp',
                    },
                    /*
                    {
                        'title': 'D',
                        'key': 'data',
                        'format': '*',
                    },
                    */
                    {
                        'title': 'Level',
                        'key': 'level',
                        'format': 'L',
                    },
                    {
                        'title': 'Process',
                        'key': 'process',
                    },
					{
                        'title': 'Method',
                        'key': 'method',
                        'format': ' ',
                    },
                    {
                        'title': 'Id',
                        'key': 'processId',
                    },
                    
                    {
                        'title': 'Activity',
                        'key': 'activity',
                        'format': ' ',
                    },
                    {
                        'title': 'event',
                        'key': 'event',
                        'format': ' ',
                    },
                    {
                        'title': 'Message',
                        'key': 'message',
                    },
                ],
            };
        }
    }

    get() {
        return this.contents;
    }

}

const instance = new Config();
Object.freeze(instance);

module.exports = instance;
