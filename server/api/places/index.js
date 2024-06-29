import { getAllPlaces, createPlace } from '~/server/api/models/place.js';
import { json_response, error_json_response } from '~/server/utils/responses.js';

export default defineEventHandler(async (event) => {
  try {
    if (event.node.req.method === 'GET') {
      const places = await getAllPlaces();
      return json_response('Successfully retrieved all places', { places });
    }

    const accessToken = event.node.req.headers.authorization;

    if (!accessToken || !isValidAccessToken(accessToken)) {
      return error_json_response('Unauthorized', 401);
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
