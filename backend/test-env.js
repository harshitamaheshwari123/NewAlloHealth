const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, ".env") });

console.log("DB_URI:", process.env.DB_URI);
console.log("PORT:", process.env.PORT);
