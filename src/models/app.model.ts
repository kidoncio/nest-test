import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export class App extends Model {
  @Column({ primaryKey: true })
  id: string;

  @Column({ defaultValue: 'Arthur' })
  firstName: string;
}
