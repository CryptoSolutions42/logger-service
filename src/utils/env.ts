import dotenv from 'dotenv';
dotenv.config();

export const SERVER_PORT = process.env.SERVER_PORT!;
export const KAFKA_SERVER_URL = process.env.KAFKA_SERVER_URL!;

export const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET!;
