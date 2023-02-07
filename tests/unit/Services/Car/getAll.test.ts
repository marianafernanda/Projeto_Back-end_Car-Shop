import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../../src/Domains/Car';
import CarService from '../../../../src/Services/CarService';

describe('Lista todos os carros', function () {
  it('Lista todos os carros com sucesso', async function () {
    const carInput = [
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
      {
        id: '634852326b35b59438fbea31',
        model: 'Tempra',
        year: 1995,
        color: 'Black',
        buyValue: 39,
        doorsQty: 2,
        seatsQty: 5,
      },
    ];

    const carOutput = carInput.map((car) => new Car(car));

    Sinon.stub(Model, 'find').resolves(carOutput);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(carOutput);

    Sinon.restore();
  });
});