import { HttpRequest, HttpResponse } from '..';

interface Controller {
  handle(httpRequest: HttpRequest): Promise<HttpResponse>;
}

export { Controller };
