// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

const jestTearDown = () => {
  console.log('jestTearDown');

  if (process.env.CI !== 'true') {
    const out = execSync('docker compose -p nest-app-name-testing -f docker-compose-test.yml down');
    console.log(out.toString('utf-8'));
  }
};

module.exports = jestTearDown;
