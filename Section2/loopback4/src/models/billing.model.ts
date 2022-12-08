import {Entity, model, property, hasOne} from '@loopback/repository';
import {Transaction} from './transaction.model';

@model()
export class Billing extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  billing_id?: string;

  @property({
    type: 'string',
  })
  transaction_id: string;

  @property({
    type: 'string',
    required: true,
  })
  cart_id: string;

  @property({
    type: 'number',
    required: true,
  })
  totalCost: number;

  @property({
    type: 'number',
    required: true,
  })
  payment: number;

  @hasOne(() => Transaction, {keyTo: 'billing_id'})
  transaction: Transaction;

  constructor(data?: Partial<Billing>) {
    super(data);
  }
}

export interface BillingRelations {
  // describe navigational properties here
}

export type BillingWithRelations = Billing & BillingRelations;
