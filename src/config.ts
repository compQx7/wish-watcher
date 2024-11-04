import * as fs from 'fs';
import * as path from 'path';
import { CommonConfig } from './types';

const commonConfig: CommonConfig = (() => {
    const configPath = path.resolve(__dirname, './config.json');
    return JSON.parse(fs.readFileSync(configPath, 'utf-8'));
})();

export { commonConfig };
