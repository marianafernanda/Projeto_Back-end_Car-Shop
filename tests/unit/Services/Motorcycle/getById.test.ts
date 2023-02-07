import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('Lista moto por id', function () {
  it('Lista apenas a moto com o id recebido', async function () {
    const motorcycleOutput: Motorcycle = new Motorcycle(
      {
        id: '634852326b35b59438fbea31',
        model: 'Honda Cbr 1000rr',
        year: 2011,
        color: 'Orange',
        status: true,
        buyValue: 59.900,
        category: 'Street',
        engineCapacity: 1000,
      },
    );

    Sinon.stub(Model, 'findOne').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.getById('634852326b35b59438fbea31');

    expect(result).to.be.deep.equal(motorcycleOutput);

    Sinon.restore();
  });
});