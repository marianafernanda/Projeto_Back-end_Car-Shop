import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Motorcycle from '../../../../src/Domains/Motorcycle';
import MotorcycleService from '../../../../src/Services/MotorcycleService';
import IMotorcycle from '../../../../src/Interfaces/IMotorcycle';

describe('Registra uma moto', function () {
  it('Registra uma moto com sucesso', async function () {
    const motorcycleInput: IMotorcycle = {
      model: 'Honda Cb 600f Hornet',
      year: 2005,
      color: 'Yellow',
      status: true,
      buyValue: 30.000,
      category: 'Street',
      engineCapacity: 600,
    };
    const motorcycleOutput: Motorcycle = new Motorcycle(
      {
        id: '63e0408d95f724b214d9d87d',
        model: 'Honda Cb 600f Hornet',
        year: 2005,
        color: 'Yellow',
        status: true,
        buyValue: 30.000,
        category: 'Street',
        engineCapacity: 600,
      },
    );
    Sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const service = new MotorcycleService();
    const result = await service.register(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);

    Sinon.restore();
  });
});