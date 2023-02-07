import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../../src/Domains/Car';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';

describe('Registra um carro', function () {
  it('Registra um carro com sucesso', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carOutput: Car = new Car(
      {
        id: '63e0408d95f724b214d9d87d',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
    );
    Sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.register(carInput);

    expect(result).to.be.deep.equal(carOutput);

    Sinon.restore();
  });
});