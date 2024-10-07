import { promises as fs } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';

import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));

const readJsonFile = async (relativePath) => {
    const fullPath = join(__dirname, relativePath);
    const data = await fs.readFile(fullPath, 'utf8');
    return JSON.parse(data);
};

const random = Math.random();
let unknownObject;

if (random > 0.5) {
    unknownObject = await readJsonFile('./files/a.json');
} else {
    unknownObject = await readJsonFile('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;
console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
