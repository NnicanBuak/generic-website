import { getAllPlaces, createPlace } from '~/api/models/place.js';
import { json_response, error_json_response } from '~/utils/responses.js';

export default defineEventHandler(async (event) => {
  try {
    if (event.node.req.method === 'GET') {
      const places = await getAllPlaces();
      return json_response('Successfully retrieved all places', { places });
    }

    if (event.node.req.method === 'POST') {
      const body = await useBody(event);
      const newPlace = await createPlace(body);
      return json_response('Place successfully created', { place: newPlace });
    }

    return error_json_response('Method Not Allowed', 405);
  } catch (error) {
    return error_json_response(error.message);
  }
});
