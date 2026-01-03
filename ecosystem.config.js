module.exports = {
  apps: [
    {
      name: 'host-app',
      cwd: './apps/host',
      script: 'pnpm',
      args: 'preview --port 5173 --host',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'react-remote',
      cwd: './apps/react-remote',
      script: 'pnpm',
      args: 'preview --port 5002 --host',
      env: {
        NODE_ENV: 'production'
      }
    },
    {
      name: 'cue-remote',
      cwd: './apps/cue',
      script: 'pnpm',
      args: 'preview --port 5001 --host',
      env: {
        NODE_ENV: 'production'
      }
    }
  ]
};