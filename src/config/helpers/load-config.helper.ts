import { NodeEnvs } from '../constants';
import { Config } from '../interfaces/Config';

export let config: Config;

export const loadConfig = async () => {
  const { NODE_ENV, MONGO_URL, PORT } = process.env;

  const nodeEnv = NodeEnvs[NODE_ENV] || NodeEnvs.dev;

  config = {
    nodeEnv,
    port: PORT || 80,
    mongo: {
      url: MONGO_URL,
    },
  };
};

export const loadTestConfig = async () => {
  config = {
    nodeEnv: 'test',
    port: 81,
    mongo: {
      url: 'mongodb://localhost:27018',
    },
  };
};
