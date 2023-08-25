import { User } from 'src/user/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, OneToOne } from 'typeorm';

@Entity()
export class Vacation {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToOne((type) => User, (user) => user.id)
  user_id: User;

  @Column()
  year: string;

  @Column()
  dateStart: Date;

  @Column()
  dateEnd: Date;
}
