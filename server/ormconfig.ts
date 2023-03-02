import * as dotenv from 'dotenv';
import { DataSource } from "typeorm";
import { User } from './src/database/entities/User.entity';
import { CreateUsers1677041943411 } from './src/database/migrations/1677041943411-createUsers';
import { CreateLikes1677732253797 } from './src/database/migrations/1677732253797-CreateLikes';
import { Like } from './src/database/entities/Like.entity';
import { SeedUsers1677735705328 } from './src/database/migrations/1677735705328-SeedUsers';

dotenv.config({ path: './.env' });

export const appDB = new DataSource({
     type: 'sqlite',
     database: "./src/database/db.sqlite",
     entities: [ User, Like ],
     synchronize: true,
     migrations: [
          CreateUsers1677041943411,
          SeedUsers1677735705328,
          CreateLikes1677732253797 
     ],
});
