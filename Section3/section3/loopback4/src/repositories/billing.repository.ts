import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Billing, BillingRelations, Transaction} from '../models';
import {TransactionRepository} from './transaction.repository';

export class BillingRepository extends DefaultCrudRepository<
  Billing,
  typeof Billing.prototype.billing_id,
  BillingRelations
> {


  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Billing, dataSource);
  }
}
