import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class TokensController {
  public async revoke({ auth, response }: HttpContextContract) {
    await auth.use("api").authenticate();

    if (!auth.use("api").user)
      return response.unauthorized("Token has not informed.");

    await auth.use("api").revoke();
  }
}
