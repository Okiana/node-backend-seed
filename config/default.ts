// tslint:disable-next-line:no-default-export
export default {
    server: {
        host: 'localhost',
        port: 3000,
        baseApiRoute: '/api',
        logLevel: 'debug',
        sessionSecret: '4199ec28-3f1a-4cc6-ba60-02e5dc5a32a5',
        requestLimit: '100kb',
    },
    swagger: {
        enabled: true,
    },
};
