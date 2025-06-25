const { MongoClient } = require("mongodb")
require ("dotenv"). config({path: "./config-env"})

async function main() {
    const Db = process.env.ATLAS_URI
    const client = new MongoClient(Db)
    await client. connect()
}