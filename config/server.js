module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    // url: 'https://wwi20-11.projekt.dhbw-heidenheim.de/strapi',
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', 'f63a4bdf50a457db0f2e65301aa8f022'),
        },
    },
});
