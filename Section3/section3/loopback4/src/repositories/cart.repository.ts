import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Cart, CartRelations, Product, Billing} from '../models';
import {ProductRepository} from './product.repository';
import {BillingRepository} from './billing.repository';

export class CartRepository extends DefaultCrudRepository<
  Cart,
  typeof Cart.prototype.id,
  CartRelations
> {

  public readonly products: HasManyRepositoryFactory<Product, typeof Cart.prototype.id>;

  public readonly billing: HasOneRepositoryFactory<Billing, typeof Cart.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>, @repository.getter('BillingRepository') protected billingRepositoryGetter: Getter<BillingRepository>,
  ) {
    super(Cart, dataSource);
    this.billing = this.createHasOneRepositoryFactoryFor('billing', billingRepositoryGetter);
    this.registerInclusionResolver('billing', this.billing.inclusionResolver);
    this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter,);
    this.registerInclusionResolver('products', this.products.inclusionResolver);
  }
}
