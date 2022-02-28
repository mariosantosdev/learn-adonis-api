import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

import ApiToken from "App/Models/ApiToken";
import App from "App/Models/App";

export default class TokensController {
  schema = schema.create({
    email: schema.string.nullable(),
  });

  public async generate({ auth, request, response }: HttpContextContract) {
    const { email } = await request.validate({ schema: this.schema });

    const app = await App.findBy("email", email);

    if (!app) return response.badRequest("App don't found.");

    const alreadyExistToken = await ApiToken.findBy("app_id", app.id);

    if (alreadyExistToken)
      return response.badRequest("This app already have an active token.");

    const { token } = await auth.use("api").generate(app, { name: app.name });

    return { token };
  }

  public async revoke({ auth, response }: HttpContextContract) {
    await auth.use("api").authenticate();

    if (!auth.use("api").user)
      return response.unauthorized("Token has not informed.");

    await auth.use("api").revoke();
  }
}
