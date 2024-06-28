import Database from 'better-sqlite3'

export const useDB = () => {
  return new Database('./db/storage.db');
};