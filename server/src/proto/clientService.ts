/* eslint-disable */
import {
  CallOptions,
  ChannelCredentials,
  Client,
  ClientOptions,
  ClientUnaryCall,
  handleUnaryCall,
  makeGenericClientConstructor,
  Metadata,
  ServiceError,
  UntypedServiceImplementation,
} from "@grpc/grpc-js";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "clientService";

export interface ClientRequest {
  id: number;
}

export interface ClientResponse {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  active: boolean;
}

function createBaseClientRequest(): ClientRequest {
  return { id: 0 };
}

export const ClientRequest = {
  encode(message: ClientRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientRequest {
    return { id: isSet(object.id) ? Number(object.id) : 0 };
  },

  toJSON(message: ClientRequest): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientRequest>, I>>(base?: I): ClientRequest {
    return ClientRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientRequest>, I>>(object: I): ClientRequest {
    const message = createBaseClientRequest();
    message.id = object.id ?? 0;
    return message;
  },
};

function createBaseClientResponse(): ClientResponse {
  return { id: 0, firstName: "", lastName: "", age: 0, email: "", active: false };
}

export const ClientResponse = {
  encode(message: ClientResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint32(message.id);
    }
    if (message.firstName !== "") {
      writer.uint32(18).string(message.firstName);
    }
    if (message.lastName !== "") {
      writer.uint32(26).string(message.lastName);
    }
    if (message.age !== 0) {
      writer.uint32(32).uint32(message.age);
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.active === true) {
      writer.uint32(48).bool(message.active);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClientResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClientResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.id = reader.uint32();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.firstName = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.lastName = reader.string();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.age = reader.uint32();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.active = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ClientResponse {
    return {
      id: isSet(object.id) ? Number(object.id) : 0,
      firstName: isSet(object.firstName) ? String(object.firstName) : "",
      lastName: isSet(object.lastName) ? String(object.lastName) : "",
      age: isSet(object.age) ? Number(object.age) : 0,
      email: isSet(object.email) ? String(object.email) : "",
      active: isSet(object.active) ? Boolean(object.active) : false,
    };
  },

  toJSON(message: ClientResponse): unknown {
    const obj: any = {};
    if (message.id !== 0) {
      obj.id = Math.round(message.id);
    }
    if (message.firstName !== "") {
      obj.firstName = message.firstName;
    }
    if (message.lastName !== "") {
      obj.lastName = message.lastName;
    }
    if (message.age !== 0) {
      obj.age = Math.round(message.age);
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.active === true) {
      obj.active = message.active;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ClientResponse>, I>>(base?: I): ClientResponse {
    return ClientResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ClientResponse>, I>>(object: I): ClientResponse {
    const message = createBaseClientResponse();
    message.id = object.id ?? 0;
    message.firstName = object.firstName ?? "";
    message.lastName = object.lastName ?? "";
    message.age = object.age ?? 0;
    message.email = object.email ?? "";
    message.active = object.active ?? false;
    return message;
  },
};

/** Define the services containing methods here */
export type ClientServiceRoutesService = typeof ClientServiceRoutesService;
export const ClientServiceRoutesService = {
  /** Basic function call, makes request and returns value */
  client: {
    path: "/clientService.ClientServiceRoutes/client",
    requestStream: false,
    responseStream: false,
    requestSerialize: (value: ClientRequest) => Buffer.from(ClientRequest.encode(value).finish()),
    requestDeserialize: (value: Buffer) => ClientRequest.decode(value),
    responseSerialize: (value: ClientResponse) => Buffer.from(ClientResponse.encode(value).finish()),
    responseDeserialize: (value: Buffer) => ClientResponse.decode(value),
  },
} as const;

export interface ClientServiceRoutesServer extends UntypedServiceImplementation {
  /** Basic function call, makes request and returns value */
  client: handleUnaryCall<ClientRequest, ClientResponse>;
}

export interface ClientServiceRoutesClient extends Client {
  /** Basic function call, makes request and returns value */
  client(
    request: ClientRequest,
    callback: (error: ServiceError | null, response: ClientResponse) => void,
  ): ClientUnaryCall;
  client(
    request: ClientRequest,
    metadata: Metadata,
    callback: (error: ServiceError | null, response: ClientResponse) => void,
  ): ClientUnaryCall;
  client(
    request: ClientRequest,
    metadata: Metadata,
    options: Partial<CallOptions>,
    callback: (error: ServiceError | null, response: ClientResponse) => void,
  ): ClientUnaryCall;
}

export const ClientServiceRoutesClient = makeGenericClientConstructor(
  ClientServiceRoutesService,
  "clientService.ClientServiceRoutes",
) as unknown as {
  new (address: string, credentials: ChannelCredentials, options?: Partial<ClientOptions>): ClientServiceRoutesClient;
  service: typeof ClientServiceRoutesService;
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
