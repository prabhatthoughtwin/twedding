import db from './models';
import path from 'path';
import grpc, { GrpcObject } from "grpc";
import {loadSync} from "@grpc/proto-loader";
import {Server} from "http";

import userObj from './function/user';

db;

var packageDefinition = loadSync(path.join(__dirname, '../proto/user.proto'), {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

var usersProto = grpc.loadPackageDefinition(packageDefinition) as any;

const server = new grpc.Server();

server.addService(usersProto.UserService.service, userObj);

server.bind("127.0.0.1:30043", grpc.ServerCredentials.createInsecure());
console.log("Server running at http://127.0.0.1:30043");
server.start();
