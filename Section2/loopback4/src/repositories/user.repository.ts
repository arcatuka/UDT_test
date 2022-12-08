import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasOneRepositoryFactory, HasManyRepositoryFactory} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {User, UserRelations, Cart, Transaction, Product} from '../models';
import {CartRepository} from './cart.repository';
import {TransactionRepository} from './transaction.repository';
import {ProductRepository} from './product.repository';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.id,
  UserRelations
> {

  public readonly cart: HasOneRepositoryFactory<Cart, typeof User.prototype.id>;

  public readonly transactions: HasManyRepositoryFactory<Transaction, typeof User.prototype.id>;

  public readonly products: HasManyRepositoryFactory<Product, typeof User.prototype.id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource, @repository.getter('CartRepository') protected cartRepositoryGetter: Getter<CartRepository>, @repository.getter('TransactionRepository') protected transactionRepositoryGetter: Getter<TransactionRepository>, @repository.getter('ProductRepository') protected productRepositoryGetter: Getter<ProductRepository>,
  ) {
    super(User, dataSource);
    this.products = this.createHasManyRepositoryFactoryFor('products', productRepositoryGetter,);
    this.registerInclusionResolver('products', this.products.inclusionResolver);
    this.transactions = this.createHasManyRepositoryFactoryFor('transactions', transactionRepositoryGetter,);
    this.registerInclusionResolver('transactions', this.transactions.inclusionResolver);
    this.cart = this.createHasOneRepositoryFactoryFor('cart', cartRepositoryGetter);
    this.registerInclusionResolver('cart', this.cart.inclusionResolver);
  }
}
