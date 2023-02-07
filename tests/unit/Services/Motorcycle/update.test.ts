import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

describe('Atualiza moto por id', function () {
  it('Atualiza apenas a moto com o id recebido', async function () {
    const motorcycleInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2014,
      color: 'Red',
      status: true,
      buyValue: 45.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const motorcycleOutput: Motorcycle = new Motorcycle(
      {
        id: '634852326b35b59438fbea2f',
        model: 'Honda Cb 600f Hornet',
        year: 2014,
        color: 'Red',
        status: true,
        buyValue: 45.000,
        category: 'Street',
        engineCapacity: 600,
      },
    );

    Sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.update('634852326b35b59438fbea2f', motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);

    Sinon.restore();
  });
});