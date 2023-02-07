import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

export default class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }

    return null;
  }

  public async register(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.register(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll() {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getAll();
    const motorcycleArray = motorcycles.map((m) => this.createMotorcycleDomain(m));
    return motorcycleArray;
  }

  public async getById(id: string) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.getById(id);
    if (motorcycles) {
      const newMotorcycle = this.createMotorcycleDomain(motorcycles);
      return newMotorcycle;
    }
    return motorcycles;
  }

  public async update(id: string, motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const motorcycles = await motorcycleODM.update(id, motorcycle);
    if (motorcycles) {
      const newMotorcycle = this.createMotorcycleDomain(motorcycles);
      return newMotorcycle;
    }
    return motorcycles;
  }
}