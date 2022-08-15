import { config } from './load-config.helper';

export const loadMongoConfig = () => {
  return {
    uri: config?.mongo?.url,
  };
};
