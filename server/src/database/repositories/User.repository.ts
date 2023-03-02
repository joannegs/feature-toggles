import { appDB as database } from '../../../ormconfig'; 
import { User } from '../entities/User.entity';

const repository = database.getRepository(User);

export const getByEmail = async(email: string) => {
    return await repository.findOneBy({ email: email });
};

