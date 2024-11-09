import * as fs from 'fs';
import * as path from 'path';

export interface Config {
    inputDirectory: string;
    outputDirectory?: string | undefined;
    minimumWaitTime: number;
}

const configPath = path.resolve(__dirname, './config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export default config;
