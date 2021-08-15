import * as express from 'express';
export declare class Server {
    testing: any;
    app: express.Application;
    schema: import("graphql").GraphQLSchema;
    constructor();
    SetData(): Promise<void>;
    setRoutes(): void;
}
