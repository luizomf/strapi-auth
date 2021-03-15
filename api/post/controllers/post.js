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
};
