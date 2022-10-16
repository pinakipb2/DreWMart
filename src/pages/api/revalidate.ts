import { NextApiRequest } from 'next';

export default async function handler(req: NextApiRequest, res: any) {
  try {
    const { warrantyId } = req.query;
    await res.revalidate(`/warranty/${warrantyId}`);
    return res.json({ revalidated: true });
  } catch (err) {
    return res.status(500).json({ error: 'Error revalidating' });
  }
}
