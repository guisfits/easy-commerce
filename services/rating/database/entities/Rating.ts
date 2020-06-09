import { Model, DataTypes, Relationships } from 'https://deno.land/x/denodb/mod.ts';
import Product from './Product.ts';

export default class Rating extends Model {
  static table = 'products';
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    rate: {
      type: DataTypes.INTEGER
    },
    comment: {
      type: DataTypes.TEXT,
    },
    productId: Relationships.belongsTo(Product)
  };
}
