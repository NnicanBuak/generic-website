import { resolve } from 'path';
import Database from 'better-sqlite3';

const dbPath = resolve('site.sqlite');
const db = new Database(dbPath, { verbose: console.log });


const initDB = () => {
  try {
    const createDistrictsTable = db.prepare(`
      CREATE TABLE IF NOT EXISTS districts (
        district_id INTEGER PRIMARY KEY AUTOINCREMENT,
        district_name TEXT NOT NULL,
        district_image TEXT NOT NULL,
        district_map_image TEXT NOT NULL,
        district_description TEXT NOT NULL
      )
    `);

    const createPlacesTable = db.prepare(`
      CREATE TABLE IF NOT EXISTS places (
        place_id INTEGER PRIMARY KEY AUTOINCREMENT,
        district_id INTEGER NOT NULL,
        place_name TEXT NOT NULL,
        place_category TEXT NOT NULL,
        place_image TEXT,
        place_rating INTEGER,
        place_reviews TEXT,
        place_likes INTEGER,
        place_visits TEXT,
        coordinates_latitude REAL NOT NULL,
        coordinates_longitude REAL NOT NULL,
        FOREIGN KEY (district_id) REFERENCES districts(district_id)
      )
    `);

    createDistrictsTable.run();
    createPlacesTable.run();
    console.log('Database initialized successfully.');
  } catch (error) {
    console.log('Error executing SQL queries:', error);
  }
};

export { db, initDB };
