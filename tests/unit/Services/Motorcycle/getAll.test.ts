import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';

describe('Lista todas as motos', function () {
  it('Lista todas as motos com sucesso', async function () {
    const motorcycleInput = [
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
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
    ];

    const motorcycleOutput = motorcycleInput.map((m) => new Motorcycle(m));

    Sinon.stub(Model, 'find').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motorcycleOutput);

    Sinon.restore();
  });
});