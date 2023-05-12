import { JwtGuard } from '@app/auth/jwt.guard';
import { Controller, Post, UseGuards } from '@nestjs/common';

@Controller('post')
export class PostController {
  // Can be listed by everyone
  // Show only published posts unless admin, moderator or author (owner)
  list() {}

  @UseGuards(JwtGuard)
  @Post()
  create() {
    return {};
  }

  // Can be updated by author, admin and moderator
  update() {}

  // Can be viewed by everyone only when is published; otherwise
  // Can be viewed by author, admin and moderator
  view() {}

  // Can be deleted by author and admin
  delete() {}

  // Can be published only by author
  publish() {}

  // Can be unpublished by author, admin and moderator
  unpublish() {}
}
