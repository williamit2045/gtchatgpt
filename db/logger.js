const Database = require("better-sqlite3");
const path = require("path");

// Initialize SQLite database and create the error_logs table if it doesn’t exist
const db = new Database(path.join(__dirname, "../db/logs.db"), { verbose: console.log });

db.prepare(`
  CREATE TABLE IF NOT EXISTS error_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    message TEXT NOT NULL,
    stack TEXT,
    route TEXT,
    user TEXT,
    statusCode INTEGER,
    metadata TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();

// Function to insert an error log into the database
function logError({ message, stack, route, user, statusCode, metadata }) {
  const insert = db.prepare(`
    INSERT INTO error_logs (message, stack, route, user, statusCode, metadata)
    VALUES (@message, @stack, @route, @user, @statusCode, @metadata)
  `);

  insert.run({
    message,
    stack: stack || null,
    route: route || null,
    user: user || "Guest",
    statusCode: statusCode || 500,
    metadata: metadata ? JSON.stringify(metadata) : null
  });
}

module.exports = { logError, db };
