import { MissingParamError } from '../../errors';
import { badRequest } from '../../helpers';
import { HttpRequest, HttpResponse } from '../../protocols';

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest?.body?.email) {
      return badRequest(new MissingParamError('email'));
    }
    if (!httpRequest?.body?.name) {
      return badRequest(new MissingParamError('name'));
    }
  }
}

export default SignUpController;
