import { HttpRequest, HttpResponse } from '@presentation/protocols';

interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}

export { Controller };
