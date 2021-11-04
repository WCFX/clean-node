import { HttpRequest, HttpResponse } from '../../protocols';

class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest?.body?.email) {
      return {
        statusCode: 400,
        body: new Error('Missing param: email'),
      };
    }
    if (!httpRequest?.body?.name) {
      return {
        statusCode: 400,
        body: new Error('Missing param: name'),
      };
    }
  }
}

export default SignUpController;
