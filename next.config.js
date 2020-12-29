module.exports = {
    trailingSlash: true,
    env: {
        base_api_url: 'http://localhost:3000/api',
        base_pokemon_url: 'https://pokeapi.co/api/v2',
        MYSQL_HOST: '127.0.0.1',
        MYSQL_PORT: 3306,
        MYSQL_DATABASE: 'next',
        MYSQL_USERNAME: 'root',
        MYSQL_PASSWORD: 'example',
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};
