import { MissingParamError } from '../../errors';
import { HttpRequest, HttpResponse } from '../../protocols';

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest?.body?.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      };
    }
    if (!httpRequest?.body?.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      };
    }
  }
}

export default SignUpController;
