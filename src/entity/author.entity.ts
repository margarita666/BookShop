import { AuthorInBooks, PrintingEdition } from 'src/entity';
import { Table, Column, Model, DataType, BelongsToMany, HasMany } from 'sequelize-typescript';

@Table({timestamps: false})
export class Author extends Model<Author> {
      @Column({
        type: DataType.UUID,
        unique: true,
        allowNull: false,
        primaryKey: true,
    })
    id: string;

    @Column({
      type: DataType.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    })
    isDeleted: boolean;

    @Column({allowNull: false})
    name: string;

    @HasMany(() => AuthorInBooks, 'authorId')
    authorBooks: AuthorInBooks[];

}
