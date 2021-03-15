module.exports = async (ctx, next) => {
  console.log('Minha primeira policy foi executada.');
  return await next(); // Outra policy, ou controller
};
