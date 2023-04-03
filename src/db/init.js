const Database = require("./config")

const initDb = {
  async init() {
    try {
      const db = await Database()
      console.log("Database connection established")

      const createRoomsTable = `CREATE TABLE IF NOT EXISTS rooms (
        id INTEGER PRIMARY KEY,
        pass TEXT
      )`

      const createQuestionsTable = `CREATE TABLE IF NOT EXISTS questions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT,
        read INT,
        room INT
      )`

      await db.exec(createRoomsTable)
      console.log("Rooms table created")

      await db.exec(createQuestionsTable)
      console.log("Questions table created")

      await db.close()
      console.log("Database connection closed")
    } catch (error) {
      console.error(error)
    }
  },
}

initDb.init()
