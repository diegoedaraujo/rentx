import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from "@modules/cars/repositories/ISpecificationsRepository";
import { getRepository, Repository } from "typeorm";
import { Specification } from "../entities/Specification";

class SpecificationsRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;
  constructor() {
    this.repository = getRepository(Specification);
  }
  async create({
    description,
    name,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specification = this.repository.create({ description, name });
    await this.repository.save(specification);
    return specification;
  }
  async findByName(name: string): Promise<Specification> {
    //O () já dá o return implicito, já as {} tem que dar o return explicito.
    const specification = this.repository.findOne({ name });
    return specification;
  }
  findByIds(ids: string[]): Promise<Specification[]> {
    throw new Error("Method not implemented.");
  }
}
export { SpecificationsRepository };
