import { appDB as database } from '../../../ormconfig'; 
import { Like } from './../entities/Like.entity';

const repository = database.getRepository(Like);

export const create = async(userId: string, productId: string) => {
    let like = new Like();
    like.product_id = Number(productId);
    like.user_id = Number(userId);
    return await repository.save(like);
};

export const getByUser = async(userId: string) => {
    return await repository.findBy({ user_id: Number(userId) });
};

export const getLikeId = async(userId: string, productId: string) => {
    return await repository.findOneBy({ user_id: Number(userId), product_id: Number(productId) })
};

export const deleteLike = async(id: number) => {
    return await repository.delete(id);
};

