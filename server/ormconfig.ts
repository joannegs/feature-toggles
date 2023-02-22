import dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { User } from './src/database/entities/User.entity';
import { CreateUsers1677041943411 } from './src/database/migrations/1677041943411-createUsers';

dotenv.config({ path: './.env' });

export const appDB = new DataSource({
     type: 'sqlite',
     database: "./src/database/db.sqlite",
     entities: [User],
     synchronize: false,
     migrations: [
          CreateUsers1677041943411
     ],
});
