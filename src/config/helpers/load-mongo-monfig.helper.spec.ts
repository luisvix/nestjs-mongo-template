import { describe, it, expect } from 'vitest';
import { loadTestConfig } from './load-config.helper';
import { loadMongoConfig } from './load-mongo-config.helper';

describe('loadMongoConfig', () => {
  it('should map values correctly', () => {
    loadTestConfig();
    const result = loadMongoConfig();
    const expected = { uri: 'mongodb://localhost:27018' };

    expect(result).toMatchObject(expected);
  });
});
