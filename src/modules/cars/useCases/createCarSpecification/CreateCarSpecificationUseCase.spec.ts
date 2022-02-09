import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";
import { CreateCarSpecificationUseCase } from "./CreateCarSpecificationUseCase";

let createCarSpecificationUseCase: CreateCarSpecificationUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

beforeEach(() => {
  carsRepositoryInMemory = new CarsRepositoryInMemory();
  createCarSpecificationUseCase = new CreateCarSpecificationUseCase(
    carsRepositoryInMemory
  );
});

describe("Create Car Specification", () => {
  it("Should be able to add a new specification to the car", async () => {
    const car_id = "1234";
    const specification_id = ["54321"];
    await createCarSpecificationUseCase.execute({ car_id, specification_id });
  });
});
