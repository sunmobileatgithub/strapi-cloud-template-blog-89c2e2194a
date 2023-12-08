'use strict';

/**
 * roaming-day-pass service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::roaming-day-pass.roaming-day-pass');
