import { Controller, Post as HttpPost, Body, Get } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post as PostEntity } from './post.entity';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @HttpPost()
  create(@Body() createPostDto: CreatePostDto): Promise<PostEntity> {
    return this.postService.create(createPostDto);
  }

  // @Get()
  // findAll(): Promise<PostEntity[]> {
  //   return this.postService.findAll();
  // }
}
