import { getPlaceById, updatePlace, deletePlace } from '~/server/api/models/place.js';
import { json_response, error_json_response } from '~/server/utils/responses.js';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  try {
    if (event.node.req.method === 'GET') {
      const place = await getPlaceById(id);
      return json_response(`Successfully retrieved place with id ${id}`, { place });
    }

    if (event.node.req.method === 'PUT') {
      const body = await useBody(event);
      const place = await updatePlace(id, body);
      return json_response(`Place with id ${id} successfully updated`, { place });
    }

    if (event.node.req.method === 'DELETE') {
      await deletePlace(id);
      return json_response(`Place with id ${id} successfully deleted`);
    }

    return error_json_response('Method Not Allowed', 405);
  } catch (error) {
    return error_json_response(error.message);
  }
});
