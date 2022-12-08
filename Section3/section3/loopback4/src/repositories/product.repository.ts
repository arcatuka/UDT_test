import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDataSource} from '../datasources';
import {Product, ProductRelations, User} from '../models';

export class ProductRepository extends DefaultCrudRepository<
  Product,
  typeof Product.prototype.product_id,
  ProductRelations
> {

  public readonly user: BelongsToAccessor<User, typeof Product.prototype.product_id>;

  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Product, dataSource);
  }
}
