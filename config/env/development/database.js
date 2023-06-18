module.exports =  ({ env }) => ({
	connection: {
		client: 'postgres',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 5432),
			database: env('DATABASE_NAME', 'batbase'),
			user: env('DATABASE_USERNAME', 'lasgac'),
			password: env('DATABASE_PASSWORD', 'tye8RS8gvzRUGu2JnBmZxdvqNSz'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
