const parseEnv = () => {
    const envVars = process.env;
    const rssVars = Object.entries(envVars)
      .filter(([key]) => key.startsWith('RSS_'))
      .map(([key, value]) => `${key}=${value}`);
  
    console.log(rssVars.join('; '));
  };
  
  parseEnv();
  
  // for run script in PowerShell: $env:RSS_name1="value1"; $env:RSS_name2="value2"; $env:RSS_secret="abc123"; node env.js
  // for run test in terminal: node env.test.js