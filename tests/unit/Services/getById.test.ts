import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import CarService from '../../../src/Services/CarService';

describe('Lista carro por id', function () {
  it('Lista apenas o carro com o id recebido', async function () {
    const carOutput: Car = new Car(
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 2002,
        color: 'Black',
        status: true,
        buyValue: 15.99,
        doorsQty: 4,
        seatsQty: 5,
      },
    );

    Sinon.stub(Model, 'findOne').resolves(carOutput);

    const service = new CarService();
    const result = await service.getById('634852326b35b59438fbea2f');

    expect(result).to.be.deep.equal(carOutput);

    Sinon.restore();
  });
});