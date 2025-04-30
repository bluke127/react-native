import { PostService } from './post.service';
export declare class PostController {
    private postService;
    constructor(postService: PostService);
    getPosts(): string[];
}
