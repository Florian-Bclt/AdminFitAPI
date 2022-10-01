import { Entity, Column,PrimaryGeneratedColumn, ManyToOne, OneToMany, } from 'typeorm'

@Entity({name:'users'})
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id:number;

    @Column('text')
    login:string;

    @Column('text')
    password:string;

    @Column({
        type: 'datetime',
        default: () => 'NOW()',
        nullable: true,
      })
      datetime:string;
}