import type { GetServerSideProps } from 'next';
import { ClientResponse } from 'core/clientService';
import { ClientService } from 'core/grpc-service';
import { useEffect, useState } from 'react';

interface Props {
  client: ClientResponse;
}

export default function Home({ client }: Props) {
  const [clientFromClient, setClientFromClient] =
    useState<ClientResponse | null>(null);

  useEffect(() => {
    const getClient = async () => {
      const res = await fetch('/api/get-client', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id: 2 }),
      });

      const { client, error } = await res.json();
      console.log(client);
      console.log(error);

      setClientFromClient(client);
    };

    getClient();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ display: 'flex', flexDirection: 'column', padding: 48 }}>
        <h3>Data from getServerSideProps:</h3>
        <span>id: {client.id}</span>
        <span>FistName: {client.firstName}</span>
        <span>LastName: {client.lastName}</span>
        <span>Email: {client.email}</span>
        <span>Age: {client.age}</span>
      </div>
      {clientFromClient && (
        <div style={{ display: 'flex', flexDirection: 'column', padding: 48 }}>
          <h3>Data from client calling get-client endpoint:</h3>
          <span>id: {clientFromClient.id}</span>
          <span>FistName: {clientFromClient.firstName}</span>
          <span>LastName: {clientFromClient.lastName}</span>
          <span>Email: {clientFromClient.email}</span>
          <span>Age: {clientFromClient.age}</span>
        </div>
      )}
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
