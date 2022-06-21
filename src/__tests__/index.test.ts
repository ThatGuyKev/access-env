import { accessEnv } from '../index';

describe('valid variable', () => {
  test('should get NODE env value', () => {
    accessEnv('NODE');
  });
});
