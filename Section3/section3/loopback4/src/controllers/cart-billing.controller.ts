import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Cart,
  Billing,
} from '../models';
import {CartRepository} from '../repositories';

export class CartBillingController {
  constructor(
    @repository(CartRepository) protected cartRepository: CartRepository,
  ) { }

  @get('/carts/{id}/billing', {
    responses: {
      '200': {
        description: 'Cart has one Billing',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Billing),
          },
        },
      },
    },
  })
  async get(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Billing>,
  ): Promise<Billing> {
    return this.cartRepository.billing(id).get(filter);
  }

  @post('/carts/{id}/billing', {
    responses: {
      '200': {
        description: 'Cart model instance',
        content: {'application/json': {schema: getModelSchemaRef(Billing)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Cart.prototype.id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Billing, {
            title: 'NewBillingInCart',
            exclude: ['billing_id'],
            optional: ['cart_id']
          }),
        },
      },
    }) billing: Omit<Billing, 'billing_id'>,
  ): Promise<Billing> {
    return this.cartRepository.billing(id).create(billing);
  }

  @patch('/carts/{id}/billing', {
    responses: {
      '200': {
        description: 'Cart.Billing PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Billing, {partial: true}),
        },
      },
    })
    billing: Partial<Billing>,
    @param.query.object('where', getWhereSchemaFor(Billing)) where?: Where<Billing>,
  ): Promise<Count> {
    return this.cartRepository.billing(id).patch(billing, where);
  }

  @del('/carts/{id}/billing', {
    responses: {
      '200': {
        description: 'Cart.Billing DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Billing)) where?: Where<Billing>,
  ): Promise<Count> {
    return this.cartRepository.billing(id).delete(where);
  }
}
