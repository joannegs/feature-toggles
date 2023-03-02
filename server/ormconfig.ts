import * as dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { User } from './src/database/entities/User.entity';
import { CreateUsers1677041943411 } from './src/database/migrations/1677041943411-createUsers';
import { UsersSeed1677079781507 } from './src/database/migrations/1677079781507-UsersSeed';

dotenv.config({ path: './.env' });

export const appDB = new DataSource({
     type: 'sqlite',
     database: "./src/database/db.sqlite",
     entities: [ User ],
     synchronize: true,
     migrations: [
          CreateUsers1677041943411,
          UsersSeed1677079781507
     ],
});
