module.exports = async (ctx, next) => {
  console.log('Minha segunda policy foi executada.');
  return await next(); // Outra policy, ou controller
};
