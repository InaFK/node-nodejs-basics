import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  const folderPath = path.join(__dirname, 'files');

  try {
    await fs.access(folderPath);
    const files = await fs.readdir(folderPath);
    console.log(files);
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('FS operation failed: The "files" folder does not exist.');
    } else {
      throw new Error(`FS operation failed: ${error.message}`);
    }
  }
};

await list();
