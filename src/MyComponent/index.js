import { lazy } from "react";
import { componentExperiment } from "@digitaloptgroup/cms-react";

const MyComponent = componentExperiment(
  {
    a: lazy(() => import("./MyComponentA")),
    b: lazy(() => import("./MyComponentB"))
  },
  { experimentName: "example" }
);

export default MyComponent;
