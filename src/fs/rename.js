import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const oldFilePath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const newFilePath = path.join(__dirname, 'files', 'properFilename.md');

  try {
    await fs.access(oldFilePath);
    try {
      await fs.access(newFilePath);
      throw new Error(`Cannot rename: 'properFilename.md' already exists.`);
    } catch (error) {
      if (error.code !== 'ENOENT') {
        throw error;
      }
    }
    await fs.rename(oldFilePath, newFilePath);
    console.log(`File renamed successfully: 'wrongFilename.txt' -> 'properFilename.md'`);
  } catch (error) {
    if (error.code === 'ENOENT') {
        throw new Error(`File not found: 'wrongFilename.txt' does not exist.`);
      } else {
        throw new Error(`FS operation failed: ${error.message}`);
    }
  }
};

await rename();
