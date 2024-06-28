CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_name TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  is_admin INTEGER DEFAULT 0,
  admin_token TEXT UNIQUE
);

CREATE TABLE IF NOT EXISTS districts (
        district_id INTEGER PRIMARY KEY AUTOINCREMENT,
        district_name TEXT NOT NULL,
        district_image TEXT NOT NULL,
        district_map_image TEXT NOT NULL,
        district_description TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS places (
        place_id INTEGER PRIMARY KEY AUTOINCREMENT,
        district_id INTEGER NOT NULL,
        place_name TEXT NOT NULL,
        place_category TEXT NOT NULL,
        place_image TEXT,
        place_rating INTEGER CHECK (place_rating >= 1 AND place_rating <= 5),
        place_reviews TEXT,
        place_likes INTEGER,
        place_visits TEXT,
        coordinates_x REAL NOT NULL,
        coordinates_y REAL NOT NULL,
        FOREIGN KEY (district_id) REFERENCES districts(district_id)
);

CREATE INDEX idx_coordinates_x ON places (coordinates_x);
CREATE INDEX idx_coordinates_y ON places (coordinates_y);