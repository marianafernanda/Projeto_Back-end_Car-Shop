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

  public async getAll() {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    const carArray = cars.map((car) => this.createCarDomain(car));
    return carArray;
  }

  public async getById(id: string) {
    const carODM = new CarODM();
    const cars = await carODM.getById(id);
    if (cars) {
      const newCar = this.createCarDomain(cars);
      return newCar;
    }
    return cars;
  }
}