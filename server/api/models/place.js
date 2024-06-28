import { db } from '../../plugins/db/init';

const getAllPlaces = () => {
  const stmt = db.prepare('SELECT * FROM places');
  return stmt.all();
};

const getPlaceById = (id) => {
  const stmt = db.prepare('SELECT * FROM places WHERE id = ?');
  return stmt.get(id);
};

const createPlace = (place) => {
  const stmt = db.prepare('INSERT INTO places (district_id, place_name, category, image, reviews, likes, visits, latitude, longitude, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
  const info = stmt.run(
    place.district_id,
    place.name,
    place.category,
    place.image,
    JSON.stringify(place.reviews),
    place.likes || 0,
    JSON.stringify(place.visits),
    place.latitude,
    place.longitude,
    place.rating
  );
  return { id: info.lastInsertRowid, ...place };
};

const updatePlace = (id, place) => {
  const stmt = db.prepare('UPDATE places SET district_id = ?, name = ?, category = ?, image = ?, reviews = ?, likes = ?, visits = ?, latitude = ?, longitude = ?, rating = ? WHERE id = ?');
  stmt.run(
    place.district_id,
    place.name,
    place.category,
    place.image,
    JSON.stringify(place.reviews),
    place.likes || 0,
    JSON.stringify(place.visits),
    place.latitude,
    place.longitude,
    place.rating,
    id
  );
  return getPlaceById(id);
};

const deletePlace = (id) => {
  const stmt = db.prepare('DELETE FROM places WHERE id = ?');
  stmt.run(id);
  return { message: 'Place deleted' };
};

export { getAllPlaces, getPlaceById, createPlace, updatePlace, deletePlace };
