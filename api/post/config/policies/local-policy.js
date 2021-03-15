module.exports = async (ctx, next) => {
  console.log('LOCAL POLICY');
  return await next();
};
