import * as dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { User } from './src/database/entities/User.entity';
import { CreateUsers1677041943411 } from './src/database/migrations/1677041943411-createUsers';
import { SeedUsers1677735705328 } from './src/database/migrations/1677735705328-SeedUsers';

dotenv.config({ path: './.env' });

export const appDB = new DataSource({
     type: 'sqlite',
     database: "./src/database/db.sqlite",
     entities: [ User ],
     synchronize: true,
     migrations: [
          CreateUsers1677041943411,
          SeedUsers1677735705328, 
     ],
});
