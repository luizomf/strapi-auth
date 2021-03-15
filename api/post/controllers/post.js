const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

module.exports = {
  /**
   * Create a record.
   *
   * @return {Object}
   */

  async create(ctx) {
    const { id } = ctx.state.user;
    const { title, content } = ctx.request.body;
    const post = { title, content, user: id };

    const entity = await strapi.services.post.create(post);
    return sanitizeEntity(entity, { model: strapi.models.post });
  },

  async find(ctx) {
    let entities;

    const query = { ...ctx.query, user: ctx.state.user.id };

    if (ctx.query._q) {
      entities = await strapi.services.post.search(query);
    } else {
      entities = await strapi.services.post.find(query);
    }

    return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.post }));
  },
};
