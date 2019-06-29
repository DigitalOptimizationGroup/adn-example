import * as React from "react";
import { Feature } from "@digitaloptgroup/cms-react";
import "./Loading.css";

function MyComponentTest({ component: componentName }) {
  let MyComponent;
  if (componentName === "a") {
    MyComponent = React.lazy(() => import("./MyComponentA"));
  } else if (componentName === "b") {
    MyComponent = React.lazy(() => import("./MyComponentB"));
  } else {
    MyComponent = React.lazy(() => import("./MyComponentDefault"));
  }
  return (
    <React.Suspense
      fallback={<div class="my-component-loading">Loading...</div>}
    >
      <MyComponent />
    </React.Suspense>
  );
}

function MyComponent() {
  return (
    <Feature
      queryName="componentExperiment"
      args={{ experimentName: "example" }}
    >
      {({ isLoading, error, variation, tracking }) => {
        if (variation) {
          return (
            <Feature.Track {...tracking}>
              {({ trackingRef }) => (
                <div ref={trackingRef}>
                  <MyComponentTest component={variation.component} />
                </div>
              )}
            </Feature.Track>
          );
        } else {
          return null;
        }
      }}
    </Feature>
  );
}

export default MyComponent;
