module.exports = {
  tokenDecrypt: async function (ctx) {
    const { token } = ctx.request.body;

    if (!token) {
      return ctx.unauthorized('`token` param is missing')
    }

    try {
      const tokeData = await strapi.plugins[
        'users-permissions'
      ].services.jwt.verify(token);

      return tokeData;
    } catch (err) {
      return ctx.unauthorized(err.toString());
    }
  }
};
