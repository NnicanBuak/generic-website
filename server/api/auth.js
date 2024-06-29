import { useDB } from '~/server/utils/db.js';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

const db = useDB();

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const { user_name, password } = body;

  if (event.req.url.endsWith('/login')) {
    const user = db.prepare('SELECT * FROM users WHERE user_name = ?').get(user_name);

    if (!user) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' });
    }

    const validPassword = await bcrypt.compare(password, user.password_hash);

    if (!validPassword) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid credentials' });
    }

    const apiKey = uuidv4();
    db.prepare('UPDATE users SET access_token = ? WHERE user_id = ?').run(apiKey, user.user_id);

    return {
      api_key: apiKey
    };
  }

  if (event.req.url.endsWith('/logout')) {
    const apiKey = event.req.headers.authorization.split(' ')[1];
    db.prepare('UPDATE users SET access_token = NULL WHERE access_token = ?').run(apiKey);
    return { success: true };
  }

  if (event.req.url.endsWith('/user')) {
    const apiKey = event.req.headers.authorization.split(' ')[1];
    const user = db.prepare('SELECT user_name, is_admin FROM users WHERE access_token = ?').get(apiKey);

    if (!user) {
      throw createError({ statusCode: 401, statusMessage: 'Invalid API Key' });
    }

    return { user };
  }
});
