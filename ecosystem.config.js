module.exports = {
    apps : [
      {
        name: 'api',
        instances: 1,
        watch: false,
        script: '/usr/bin/bash',
        args: 'gunicorn -b 127.0.0.1 api:app',
        exec_mode: 'fork',
        max_restarts: 10,
        env: {
          'NODE_ENV': 'deveopment'
        }
      }, 
      {
        name: 'react',
        instances: 1,
        watch: false,
        script: '/usr/bin/npm',
        args: 'run deploy',
        exec_mode: 'fork',
        max_restarts: 10,
        env: {
          'NODE_ENV': 'deveopment'
        }
      }
    ],
    deploy: {
      production: {
        key: '/home/doxi/.ssh/id_rsa.pub',
        user: 'doxi',
        host: ['13.66.173.107'],
        ref: 'origin/master',
        repo: 'git@github.com:Doxify/ai-ghostwriter.git',
        path: '/home/doxi/ai-ghostwriter',
        'post-deploy': 'pm2 reload ecosystem.config.js --env production',
      }
    }
  };
  