import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Local {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ type: "varchar" })
    name: string;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "varchar" })
    category: string;

    @Column({ type: "varchar" })
    contact: string;

    @Column({ type: "double" })
    latitude: number;

    @Column({ type: "double" })
    longitude: number;
}