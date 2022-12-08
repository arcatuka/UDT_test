import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Transaction, TransactionRelations, Billing} from '../models';
import {BillingRepository} from './billing.repository';

export class TransactionRepository extends DefaultCrudRepository<
  Transaction,
  typeof Transaction.prototype.transaction_id,
  TransactionRelations
> {

  public readonly billing: HasOneRepositoryFactory<Billing, typeof Transaction.prototype.transaction_id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('BillingRepository') protected billingRepositoryGetter: Getter<BillingRepository>,
  ) {
    super(Transaction, dataSource);
    this.billing = this.createHasOneRepositoryFactoryFor('billing', billingRepositoryGetter);
    this.registerInclusionResolver('billing', this.billing.inclusionResolver);
  }
}
