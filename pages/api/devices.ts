export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { device_id } = req.body;
    const result = await fetch(`${process.env.BACKEND_URL}/devices/${device_id}/open_box`, {
      method: 'POST'
    });
    const data = await result.json();
    return res.status(200).json(data);
  }
  return res.status(405).end();
}