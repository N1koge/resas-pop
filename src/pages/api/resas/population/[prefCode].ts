import type { NextApiRequest, NextApiResponse } from 'next';

const getPopulation = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { RESAS_API_KEY, RESAS_API_HOST, RESAS_POP_PATH } = process.env;
  const query = `prefCode=${req.query.prefCode}&cityCode=-`;
  const uri = `${RESAS_API_HOST}/${RESAS_POP_PATH}?${query}`;

  const headers = {
    'X-API-KEY': RESAS_API_KEY,
  };

  res.json(await (await fetch(uri, { headers })).json());
};

export default getPopulation;
