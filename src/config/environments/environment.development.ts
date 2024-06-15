export const environment = {
  production: false,
  CORS: {
    ORIGIN: ['http://localhost:8080', 'http://localhost:4200'],
  },
  SERVICE_END_POINT: {
    RESOURCE_API_PATH: '/api/v1',
    RESOURCE_MOCK_API_PATH: '/mock-api',
    RESOURCE: {
      AUTH: {
        BASE: 'http://localhost:3000',
        PATH: '/',
      },
      SAPI: {
        BASE: 'http://localhost:8080',
        PATH: '/api/v1/',
      },
    },
  },
};
