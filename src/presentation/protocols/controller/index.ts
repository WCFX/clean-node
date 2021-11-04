import { HttpRequest, HttpResponse } from '..';

interface Controller {
  handle(httpRequest: HttpRequest): HttpResponse;
}

export { Controller };
