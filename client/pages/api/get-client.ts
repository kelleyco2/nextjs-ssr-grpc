import { ClientService } from 'core/grpc-service';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.body;

  const clientService = new ClientService();

  const data = await clientService.getClient(id);

  res.status(200).send(data);
}
