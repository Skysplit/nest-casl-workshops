import { Comment } from '@app/comment/comment.model';
import { User } from '@app/user/user.model';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ default: false })
  isPublished: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: 'text' })
  content: string;

  @ManyToOne(() => User, {
    eager: true,
  })
  author: User;

  @OneToMany(() => Comment, (comment: Comment) => comment.post)
  comments: Comment[];
}
