import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

  try {
    await fs.access(filePath);

    const content = await fs.readFile(filePath, 'utf-8');
    
    console.log(content);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed: The file "fileToRead.txt" does not exist.');
    } else {
      throw new Error(`FS operation failed: ${error.message}`);
    }
  }
};

await read();
