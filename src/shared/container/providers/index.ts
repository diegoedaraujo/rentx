import { container } from "tsyringe";
import { IDateProvider } from "./DayjsProvider/IDateProvider";
import { DayjsDateProvider } from "./DayjsProvider/implementations/DayjsDateProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);
