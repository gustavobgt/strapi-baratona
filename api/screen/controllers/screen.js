const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve the record.
   *
   * @return {Object}
   */

  async findOne(ctx) {
    const { screen_type, group_id } = ctx.params;
    const entity = await strapi.services.screen.findOne({
      screen_type,
      group_id,
    });
    return sanitizeEntity(entity, { model: strapi.models.screen });
  },
};
