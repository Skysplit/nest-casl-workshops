declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      DB_URL: string;
      JWT_SECRET: string;
      NODE_ENV?: 'production' | 'development' | 'test';
    }
  }
}

export {};
