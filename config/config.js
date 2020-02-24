module.exports = {
	server_port: 3000,
	db_url: 'mongodb://localhost:27017/iruda',
	db_schemas: [
        {file:'./user_schema', collection:'users_profiles', schemaName:'UserSchema_profile', modelName:'UserModel_profile'}
        ,{file:'./board_schema', collection:'boards', schemaName:'BoardSchema_profile', modelName:'BoardModel_profile'}
	],
	route_info: [
	],
}