/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    static: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
      '@snowpack/plugin-typescript',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ]
};
