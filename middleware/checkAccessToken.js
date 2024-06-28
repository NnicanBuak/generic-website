import { useDB } from '~/server/utils/db.js'

export default function ({ req, res, redirect }) {
  const db = useDB();
  const authHeader = req.headers.authorization;
  const accessToken = authHeader.split(' ')[1];

  if (!accessToken) {
    return true
  }
    const statement = db.prepare('SELECT is_admin FROM users WHERE access_token = ?')
    const valid_access_token = statement.get(accessToken);

    if (accessToken !== valid_access_token) {
      return res.status(401).json({ error: 'Unauthorized: Invalid access token' });
    }
}
