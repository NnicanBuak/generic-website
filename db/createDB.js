import Database from 'better-sqlite3';
import { readFileSync } from 'fs'

const db_path = './db/storage.db';

const db = new Database(db_path, { verbose: console.log });

db.pragma('foreign_keys = on')
const schema = readFileSync('./db/schema.sql', 'utf8');
db.exec(schema);