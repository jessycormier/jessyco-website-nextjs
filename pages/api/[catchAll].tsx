import type { NextApiRequest, NextApiResponse } from 'next';


export default function allAPI(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    'Jessy Cormier',
    'Thanks for looking around. How are you?',
    'Resume: GET /api/resume'
  ]);
}
