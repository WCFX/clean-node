import { MongoHelper } from '../../index';

describe('Account mongo Respoitory', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });
});
