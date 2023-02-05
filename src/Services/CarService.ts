import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }

    return null;
  }

  public async registerCar(car: ICar) {
    const carODM = new CarODM();
    const newCar = await carODM.registerCar(car);
    return this.createCarDomain(newCar);
  }
}