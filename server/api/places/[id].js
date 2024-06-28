import { getPlaceById, updatePlace, deletePlace } from '../models/place';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;

  if (event.node.req.method === 'GET') {
    const place = getPlaceById(id);
    if (!place) {
      throw createError({ statusCode: 404, statusMessage: 'Place not found' });
    }
    return place;
  }

  if (event.node.req.method === 'PUT') {
    const body = await useBody(event);
    const place = updatePlace(id, body);
    if (!place) {
      throw createError({ statusCode: 404, statusMessage: 'Place not found' });
    }
    return place;
  }

  if (event.node.req.method === 'DELETE') {
    deletePlace(id);
    return { message: 'Place deleted' };
  }
});
