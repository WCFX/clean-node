import { Collection, MongoClient, ObjectId } from 'mongodb';

const MongoHelper = {
  client: null as MongoClient,
  uri: null as string,

  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await MongoClient.connect(uri);
  },

  async disconnect(): Promise<void> {
    await this.client.close();
    this.client = null;
    this.db = null;
  },

  getColletion(name: string): Collection {
    return this.client.db().collection(name);
  },

  map(data: any, _id: ObjectId): any {
    const id = String(_id);
    return {
      ...data,
      id,
    };
  },
};

export default MongoHelper;
