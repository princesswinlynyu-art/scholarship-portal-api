import type { Core } from '@strapi/strapi';

export default ({ env }: Core.Config.Shared.ConfigParams) => ({
     host: env('HOST', '0.0.0.0'),
     port: env.int('PORT', 1337),
     url: env('PUBLIC_URL', ''),
     proxy: { koa: true },
     app: {
       keys: env.array('APP_KEYS'),
     },
   });