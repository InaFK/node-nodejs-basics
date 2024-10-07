import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  const source = path.join(__dirname, 'files');
  const destination = path.join(__dirname, 'files_copy');

  try {
    await fs.access(source);
    try {
      await fs.access(destination);
      throw new Error('FS operation failed');
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    await fs.mkdir(destination);
    const files = await fs.readdir(source);
    console.log(files);
    for (const file of files) {
      const srcFile = path.join(source, file);
      const destFile = path.join(destination, file);
      await fs.copyFile(srcFile, destFile);
    }
  } catch (error) {
    throw new Error('FS operation failed');
  }
};

await copy();
