import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository";
import { ISpecificationsRepository } from "@modules/cars/repositories/ISpecificationsRepository";
import { AppError } from "@shared/errors/AppError";
import { inject } from "tsyringe";

interface IRequest {
  car_id: string;
  specification_id: string[];
}

class CreateCarSpecificationUseCase {
  constructor(
    // @inject("CarsRepository")
    private carsRepository: ICarsRepository,
    private specificationsRepository: ISpecificationsRepository
  ) {}
  async execute({ car_id, specification_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError("Car does not exists!");
    }

    const specifications = await this.specificationsRepository.findByIds(
      specification_id
    );
    carExists.specifications = specifications;
    await this.carsRepository.create(carExists);
    console.log(carExists);
  }
}

export { CreateCarSpecificationUseCase };
