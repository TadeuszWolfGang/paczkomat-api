import type { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { device_id } = req.body;

    try {
      const result = await fetch(\`\${process.env.BACKEND_URL}/devices/\${device_id}/open_box\`, {
        method: 'POST'
      });

      const data = await result.json();
      return res.status(200).json(data);
    } catch (error) {
      console.error('API error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
}
