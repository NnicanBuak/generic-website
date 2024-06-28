DROP TABLE IF EXISTS districts;
DROP TABLE IF EXISTS places;

CREATE TABLE districts (
  district_id INTEGER PRIMARY KEY AUTOINCREMENT,
  district_name TEXT NOT NULL,
  district_image TEXT NOT NULL,
  district_map_image TEXT NOT NULL,
  district_description TEXT NOT NULL,
);

CREATE TABLE places (
  place_id INTEGER,
  district_id TEXT NOT NULL,
  place_name TEXT NOT NULL,
  place_category TEXT NOT NULL,
  place_image TEXT,
  place_rating INTEGER,
  place_reviews TEXT,
  place_likes INTEGER,
  place_visits TEXT,
  coordinates_latitude REAL NOT NULL,
  coordinates_longitude REAL NOT NULL,
);

CONSTRAINT PLACE_PK PRIMARY KEY (place_id),
CONSTRAINT PLACE_FK FOREIGN KEY (district_id) REFERENCES districts(district_id)