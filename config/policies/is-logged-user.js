module.exports = async (ctx, next) => {
  console.log('Minha policy que checa o usuário.');

  if(!ctx.request.headers.authorization) {
    return ctx.unauthorized('You need to be logged in to access this rote');
  }

  const [_, token] = ctx.request.headers.authorization.split(' ');

  let tokenData;
  try {
    tokenData = await strapi.plugins['users-permissions']
      .services.jwt.verify(token);
  } catch(e) {
    return ctx.unauthorized(e.toString());
  }

  if (tokenData.id !== ctx.state.user.id) {
    return ctx.unauthorized('You cannot access this data.');
  }

  return await next(); // Outra policy, ou controller
};
