import { expect } from 'chai';
import { Model } from 'mongoose';
import Sinon from 'sinon';
import Car from '../../../../src/Domains/Car';
import ICar from '../../../../src/Interfaces/ICar';
import CarService from '../../../../src/Services/CarService';

describe('Atualiza carro por id', function () {
  it('Atualiza apenas o carro com o id recebido', async function () {
    const carInput: ICar = {
      model: 'Marea',
      year: 1992,
      color: 'Red',
      status: true,
      buyValue: 12.000,
      doorsQty: 2,
      seatsQty: 5,
    };
    const carOutput: Car = new Car(
      {
        id: '634852326b35b59438fbea2f',
        model: 'Marea',
        year: 1992,
        color: 'Red',
        status: true,
        buyValue: 12.000,
        doorsQty: 2,
        seatsQty: 5,
      },
    );

    Sinon.stub(Model, 'findByIdAndUpdate').resolves(carOutput);

    const service = new CarService();
    const result = await service.update('634852326b35b59438fbea2f', carInput);

    expect(result).to.be.deep.equal(carOutput);

    Sinon.restore();
  });
});