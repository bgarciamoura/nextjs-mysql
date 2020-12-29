import type { NextApiRequest, NextApiResponse } from 'next';
import executeQuery from '../../../../lib/db';

export default async (_req: NextApiRequest, res: NextApiResponse) => {
    const results = await executeQuery({ query: 'SELECT * FROM users', values: [] });

    res.json(results);
};
