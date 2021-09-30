const { sanitizeEntity } = require("strapi-utils");

module.exports = {
  /**
   * Retrieve the record.
   *
   * @return {Object}
   */

  async find(ctx) {
    const { screen_type, group_id } = ctx.params;
    console.log("screen_type = ", screen_type);
    console.log("group_id = ", group_id);
    const entity = await strapi.services.screen.find({ screen_type, group_id });
    return sanitizeEntity(entity, { model: strapi.models.screen });
  },
};
