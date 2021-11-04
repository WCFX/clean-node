import { MissingParamError } from '../../errors';
import { badRequest } from '../../helpers';
import { HttpRequest, HttpResponse } from '../../protocols';

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredField = ['name', 'email'];
    for (const field of requiredField) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}

export default SignUpController;
