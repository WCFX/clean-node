import { AccountMongoRepository } from '.';
import { MongoHelper } from '@infra/db/mongodb';

describe('Account mongo Respoitory', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  // interface makeSutTypes {
  //   sut: AccountMongoRepository;

  // }

  const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository();
  };

  test('Should return an account on success', async () => {
    const sut = makeSut();
    const account = await sut.add({
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password',
    });
    expect(account).toBeTruthy();
    expect(account.id).toBeTruthy();
    expect(account.name).toEqual('any_name');
    expect(account.email).toEqual('any_email@mail.com');
    expect(account.password).toEqual('any_password');
  });
});
