import { Model, DataTypes } from 'https://deno.land/x/denodb/mod.ts';
import Rating from './Rating.ts';

export default class Product extends Model {
  static table = 'products';
  static timestamps = true;

  static fields = {
    id: {
      type: DataTypes.UUID,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      length: 250
    }
  };

  static ratings() {
    return this.hasMany(Rating)
  }
}
