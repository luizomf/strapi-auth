// https://github.com/strapi/strapi/issues/3601#issuecomment-510810027
module.exports = {
  tokenDecrypt: async function (ctx) {
    const { token } = ctx.request.body;

    if (!token) {
      return ctx.badRequest('`token` missing')
    }

    try {
      const obj = await strapi.plugins[
        'users-permissions'
      ].services.jwt.verify(token);

      return obj;
    } catch (err) {
      return ctx.unauthorized(err.toString());
    }
  }
};
