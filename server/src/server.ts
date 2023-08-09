import * as grpc from '@grpc/grpc-js';
import {
  ClientRequest,
  ClientResponse,
  ClientServiceRoutesService,
} from './proto/clientService';

const clients = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'john.doe@gmail.com',
    active: true,
  },
  {
    id: 2,
    firstName: 'Alexander',
    lastName: 'Angel',
    age: 26,
    email: 'alexander.angel@gmail.com',
    active: true,
  },
];

class gRPC extends grpc.Server {
  constructor() {
    super();
    this.addService(ClientServiceRoutesService, {
      client: this.getClient,
    });
  }

  /**
   * getClient request handler.
   */
  protected getClient(
    call: grpc.ServerUnaryCall<ClientRequest, ClientResponse>,
    callback: grpc.sendUnaryData<ClientResponse>
  ) {
    const id = call.request.id;
    const client = clients?.find((client) => client.id === id);
    callback(null, client);
  }
}

/**
 * Starts an RPC server that receives requests for the clientService service at the
 * sample server port
 */
function main() {
  const server = new gRPC();
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    (error) => {
      // Start server
      server.start();
      // On error
      if (error) {
        console.error(error);
      } else {
        console.log('Starting gRPC server on port: 0.0.0.0:50051');
      }
    }
  );
}

main();
