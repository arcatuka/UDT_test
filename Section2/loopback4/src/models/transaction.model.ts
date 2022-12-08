import {Entity, model, property} from '@loopback/repository';

@model()
export class Transaction extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  transaction_id?: string;

  @property({
    type: 'string',
    required: true,
  })
  user_id: string;

  @property({
    type: 'string',
    required: true,
  })
  totalCost: string;

  @property({
    type: 'string',
  })
  billing_id?: string;

  constructor(data?: Partial<Transaction>) {
    super(data);
  }
}

export interface TransactionRelations {
  // describe navigational properties here
}

export type TransactionWithRelations = Transaction & TransactionRelations;
