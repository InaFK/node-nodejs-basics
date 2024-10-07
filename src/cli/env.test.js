import { spawn } from 'child_process';
import assert from 'assert';

const testParseEnv = () => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn('node', ['env.js'], {
      env: {
        ...process.env,
        RSS_name1: 'value1',
        RSS_name2: 'value2',
        RSS_secret: 'abc123'
      }
    });

    let output = '';

    childProcess.stdout.on('data', (data) => {
      output += data.toString();
    });

    childProcess.on('close', () => {
      const expected = 'RSS_name1=value1; RSS_name2=value2; RSS_secret=abc123';
      
      try {
        assert.strictEqual(output.trim(), expected);
        console.log('Test passed.');
        resolve();
      } catch (err) {
        console.error('Test failed:', err);
        reject(err);
      }
    });
  });
};

testParseEnv().catch(() => process.exit(1));
// for run test node env.test.js