import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm";

@Entity()
export class Cinema {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    country: string;

    @Column()
    year: number;

    @Column()
    producer: string;
}
