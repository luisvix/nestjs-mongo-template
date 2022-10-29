// eslint-disable-next-line @typescript-eslint/no-var-requires
const { execSync } = require('child_process');

export const setup = () => {
  console.log('Starting test setup');

  if (process.env.CI !== 'true') {
    const out = execSync(
      'docker compose -p nest-app-name-testing -f docker-compose-test.yml up -d',
    );
    console.log(out.toString('utf-8'));
  }
};

export const teardown = () => {
  console.log('Starting test TearDown');

  if (process.env.CI !== 'true') {
    const out = execSync('docker compose -p nest-app-name-testing -f docker-compose-test.yml down');
    console.log(out.toString('utf-8'));
  }
};
