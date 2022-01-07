import { AddAccountRepository } from '@data/protocols';
import { AccountModel } from '@domain/models';
import { AddAccountModel } from '@domain/usecases';
import { MongoHelper } from '../..';

export class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accountCollection = MongoHelper.getColletion('accounts');
    const result = await accountCollection.insertOne(accountData);
    return MongoHelper.map(accountData, result.insertedId);
  }
}
