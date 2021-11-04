import { MissingParamError } from '../../errors';
import { badRequest } from '../../helpers';
import { Controller, HttpRequest, HttpResponse } from '../../protocols';

class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredField = ['name', 'email', 'password', 'passwordConfirmation'];
    for (const field of requiredField) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}

export default SignUpController;
