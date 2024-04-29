const bs = require("better-sqlite3");
const db = new bs(":memory:");
const ver = db.prepare("select sqlite_version()").pluck().get();
console.log("SQLite version: ", ver);
