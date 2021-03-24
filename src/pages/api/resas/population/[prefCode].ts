import type { NextApiRequest, NextApiResponse } from 'next';

const getPopulation = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { API_KEY, API_HOST, POP_PATH } = process.env;
  const query = `prefCode=${req.query.prefCode}&cityCode=-`;
  const uri = `${API_HOST}/${POP_PATH}?${query}`;

  const headers = {
    'X-API-KEY': API_KEY,
  };

  res.json(await (await fetch(uri, { headers })).json());
};

export default getPopulation;
