import type { NextApiRequest, NextApiResponse } from 'next'


export default function allAPI(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ 
    name: 'Jessy Cormier',
    message: 'Thanks for looking around. How are you?'
  })
}
