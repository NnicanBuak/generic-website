import { useDB } from '~/server/utils/db.js'

const getAllPlaces = () => {
  const db = useDB();
  const statement = db.prepare('SELECT * FROM places');
  return statement.all();
};

const getPlaceById = (id) => {
  const db = useDB();
  const statement = db.prepare('SELECT * FROM places WHERE id = ?');
  return statement.get(id);
};

const createPlace = (place) => {
  const db = useDB();
  const statement = db.prepare('INSERT INTO places (district_id, place_name, category, image, reviews, likes, visits, latitude, longitude, rating) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
  const info = statement.run(
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
  const db = useDB();
  const statement = db.prepare('UPDATE places SET district_id = ?, place_name = ?, category = ?, image = ?, reviews = ?, likes = ?, visits = ?, latitude = ?, longitude = ?, rating = ? WHERE id = ?');
  statement.run(
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
  const db = useDB();
  const statement = db.prepare('DELETE FROM places WHERE id = ?');
  statement.run(id);
  return { message: 'Place deleted' };
};

export { getAllPlaces, getPlaceById, createPlace, updatePlace, deletePlace };
