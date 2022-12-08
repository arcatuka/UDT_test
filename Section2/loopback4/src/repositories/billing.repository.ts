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

  public readonly transaction: HasOneRepositoryFactory<Transaction, typeof Billing.prototype.billing_id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('TransactionRepository') protected transactionRepositoryGetter: Getter<TransactionRepository>,
  ) {
    super(Billing, dataSource);
    this.transaction = this.createHasOneRepositoryFactoryFor('transaction', transactionRepositoryGetter);
    this.registerInclusionResolver('transaction', this.transaction.inclusionResolver);
  }
}
