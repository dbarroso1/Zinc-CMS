var config = {
    development: {
        url: 'http://zinc-dev.com',
        database: {
            host: '127.0.0.1',
            port: '27017',
            db: 'zinc-dev',
            atlas: 'mongodb://dbarroso:vfoWhIDuItZCGCKX@database-shard-00-00-xalpg.mongodb.net:27017,database-shard-00-01-xalpg.mongodb.net:27017,database-shard-00-02-xalpg.mongodb.net:27017/Zinc?ssl=true&replicaSet=database-shard-0&authSource=admin'
        },
        server: {
            host: '127.0.0.1',
            port: '3000'
        }
    },
    production: {
        url: 'http://zinc.com',
        database: {
            host: '127.0.0.1',
            port: '27017',
            db: 'zinc'
        },
        server: {
            host: '127.0.0.1',
            port: '4200'
        }
    }
};
module.exports = config;