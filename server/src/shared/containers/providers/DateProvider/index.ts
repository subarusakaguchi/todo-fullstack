import { container } from "tsyringe";

import { DayjsDateProvider } from "./implementations/DayjsDateProvider";
import { IDateProvider } from "./interface/IDateProvider";

container.registerSingleton<IDateProvider>(
  "DayjsDateProvider",
  DayjsDateProvider
);
