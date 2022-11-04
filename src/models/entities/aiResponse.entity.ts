import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'companies',
})
export class AiResponseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'image_path',
  })
  imagePath: string;

  @Column({
    name: 'video_path',
  })
  videoPath: string;

  @Column()
  description: string;

  @Column()
  comment: string;

  @Column({
    name: 'ai_point',
  })
  aiPoint: number;

  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
  })
  updatedAt: Date;

  @DeleteDateColumn({
    name: 'deleted_at',
  })
  deletedAt?: Date;
}
