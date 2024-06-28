import { getAllPlaces, createPlace } from './models/place';

export default defineEventHandler(async (event) => {
  if (event.node.req.method === 'GET') {
    return getAllPlaces();
  }

  if (event.node.req.method === 'POST') {
    const body = await useBody(event);
    return createPlace(body);
  }
});
