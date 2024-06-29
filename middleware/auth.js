import { useDB } from '@server/utils/db.js';

export default defineEventHandler((event) => {
  const db = useDB();
  const authHeader = event.req.headers.authorization;

  if (!authHeader) {
    event.res.status(401).json({ error: 'Unauthorized: Access token is missing' });
    return;
  }

  const accessToken = authHeader.split(' ')[1];

  if (!accessToken) {
    event.res.status(401).json({ error: 'Unauthorized: Access token is missing' });
    return;
  }

  const statement = db.prepare('SELECT is_admin FROM users WHERE access_token = ?');
  const validAccessToken = statement.get(accessToken);

  if (!validAccessToken) {
    event.res.status(401).json({ error: 'Unauthorized: Invalid access token' });
    return;
  }

  event.context.auth = {
    user: {
      id: validAccessToken.user_id,
      isAdmin: validAccessToken.is_admin,
    },
  };

  next();
});
