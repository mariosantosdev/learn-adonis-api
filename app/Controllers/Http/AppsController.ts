import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import { schema } from "@ioc:Adonis/Core/Validator";

import AppModel from "App/Models/App";

export default class AppsController {
  private schema = schema.create({
    name: schema.string.nullable(),
    email: schema.string.nullable(),
  });

  public async create({ auth, response, request }: HttpContextContract) {
    const { name, email } = await request.validate({
      schema: this.schema,
      messages: {
        required: "The field {{field}} is required to register an app.",
        nullable: "The field {{field}} is required to register an app.",
      },
    });

    if (!name || !email) return;

    const emailAlreadyExist = await AppModel.findBy("email", email);

    if (emailAlreadyExist)
      return response.badRequest("This email already exist in another app.");

    const app = await AppModel.create({ name, email });

    const { token } = await auth.use("api").generate(app, { name });

    return { app, token };
  }
}
