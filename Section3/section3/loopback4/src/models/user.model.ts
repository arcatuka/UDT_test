import {Entity, model, property, hasOne, hasMany} from '@loopback/repository';
import {Cart} from './cart.model';
import {Transaction} from './transaction.model';
import { UserCredentials } from './user-credentials.model';
import {Product} from './product.model';

@model()
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  password: string;

  @property({
    type: 'string',
  })
  address?: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
  })
  gender?: string;

  @property({
    type: 'string',
  })
  role?: string;

  @hasOne(() => Cart)
  cart: Cart;
  
  @hasOne(() => UserCredentials)
  userCredentials: UserCredentials;

  @hasMany(() => Transaction, {keyTo: 'user_id'})
  transactions: Transaction[];

  @hasMany(() => Product, {keyTo: 'user_id'})
  products: Product[];

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;
