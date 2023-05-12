import { Controller } from '@nestjs/common';

@Controller('comment')
export class CommentController {
  create() {}

  // Only author can update
  update() {}

  // Only author, admin and moderator can delete
  delete() {}
}
