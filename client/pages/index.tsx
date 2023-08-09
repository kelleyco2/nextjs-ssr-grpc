import type { GetServerSideProps } from 'next';
import { ClientResponse } from 'core/clientService';
import { ClientService } from 'core/grpc-service';

interface Props {
  client: ClientResponse;
}

export default function Home({ client }: Props) {
  return (
    <div className="container">
      <span>id: {client.id}</span>
      <span>FistName: {client.firstName}</span>
      <span>LastName: {client.lastName}</span>
      <span>Email: {client.email}</span>
      <span>Age: {client.age}</span>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const clientService = new ClientService();

    const { client, error } = await clientService.getClient(1);

    console.log(client);
    console.log(error);

    return {
      props: { client },
    };
  } catch (error) {
    return {
      props: { error },
    };
  }
};
