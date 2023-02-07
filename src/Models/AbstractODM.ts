import { Model, Schema, model, models } from 'mongoose';

export default abstract class AbstractODM<T> {
  private schema: Schema;
  public model: Model<T>;
  public modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(this.modelName, this.schema);
  }

  public async register(vehicle: T): Promise<T> {
    return this.model.create({ ...vehicle });
  }

  public async getAll(): Promise<T[]> {
    return this.model.find();
  }

  public async getById(_id: string): Promise<T | null> {
    return this.model.findOne({ _id });
  }

  public async update(_id: string, vehicle: Partial<T>): Promise<T | null> {
    return this.model.findByIdAndUpdate(_id, vehicle, { new: true });
  }
}