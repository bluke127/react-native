import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
export declare class PostService {
    private postRepo;
    constructor(postRepo: Repository<Post>);
    create(createPostDto: CreatePostDto): Promise<Post>;
}
