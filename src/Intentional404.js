import React from "react";
import { Feature } from "@digitaloptgroup/cms-react";
import "./index.css";

function Intentional404() {
  return (
    <Feature queryName="featureThatDoesNotExistToForceA404">
      {({ isLoading, error, variation, tracking }) => {
        if (variation) {
          return <div>You'll never see this</div>;
        } else if (isLoading) {
          return <div>Loading...</div>;
        }
        if (error) {
          return (
            <div className="intentionalerror">
              Intentionally query for feature that does not exist to show
              behavior:
              <br />
              {error.code} : {error.message}
            </div>
          );
        } else {
          return <div>Unknown Error</div>;
        }
      }}
    </Feature>
  );
}

export default Intentional404;
