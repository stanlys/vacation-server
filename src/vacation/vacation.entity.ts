import { User } from 'src/user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Vacation {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany((type) => User, (user) => user.id)
  user_id: number;

  @Column()
  year: string;

  @Column()
  dateStart: Date;

  @Column()
  dateEnd: Date;
}
