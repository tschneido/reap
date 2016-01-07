var config = {};

config.pgp = require("pg-promise")(/*options*/);
config.db = pgp("postgres://reapuser:12345@localhost/reap");

module.exports = config;