import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'user' })
export class App extends Model<App> {
  @Column({ primaryKey: true })
  id: string;

  @Column({ defaultValue: 'Arthur' })
  firstName: string;
}
