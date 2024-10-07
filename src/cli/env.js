const parseEnv = () => {
    const envVars = process.env;
    const rssVars = Object.entries(envVars)
      .filter(([key]) => key.startsWith('RSS_'))
      .map(([key, value]) => `${key}=${value}`);
  
    console.log(rssVars.join('; '));
  };
  
  parseEnv();
  
  // for run test in terminal node env.test.js