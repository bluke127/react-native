import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepo: Repository<Post>,
  ) {}

  create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = this.postRepo.create(createPostDto);
    return this.postRepo.save(newPost);
  }
}
