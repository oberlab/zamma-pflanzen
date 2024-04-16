export var STRAPI_URL = "http://localhost:1337";

if (import.meta.env.VITE_STRAPI_URL) {
  STRAPI_URL = import.meta.env.VITE_STRAPI_URL;
}
