import { ServerError } from '@presentation/errors';
import { HttpResponse } from '@presentation/protocols';

const badRequest = (error: Error): HttpResponse => ({
  statusCode: 400,
  body: error,
});

const OK = (data: any): HttpResponse => ({
  statusCode: 200,
  body: data,
});

const serverError = (): HttpResponse => ({
  statusCode: 500,
  body: new ServerError(),
});

export { badRequest, serverError, OK };
