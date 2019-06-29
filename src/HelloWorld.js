import React from "react";
import { Feature } from "@digitaloptgroup/cms-react";
import "./HelloWorld.css";

const HelloWorld = ({ headline, subhead, image, caption, trackingRef }) => {
  return (
    <div ref={trackingRef}>
      <div>
        {image ? (
          <img
            src={`https://img.abcloud.io/c_scale,h_150,fl_progressive/${
              image.path
            }`}
            className="hello-world__img"
            alt="Hello world"
          />
        ) : (
          <div style={{ height: "150px" }} />
        )}
        <div>{caption}</div>
      </div>
      <h1>{headline}</h1>
      <h3>{subhead}</h3>
    </div>
  );
};

function HelloWorldFeature() {
  return (
    <Feature queryName="helloWorld">
      {({ isLoading, error, variation, tracking }) => {
        if (variation) {
          return (
            <Feature.Track {...tracking}>
              {({ trackingRef }) => {
                return <HelloWorld {...variation} trackingRef={trackingRef} />;
              }}
            </Feature.Track>
          );
        } else if (isLoading) {
          return <div>Loading...</div>;
        }
        if (error) {
          return (
            <div>
              {error.code} : {error.message}
            </div>
          );
        } else {
          return <div>Unknown Errorn</div>;
        }
      }}
    </Feature>
  );
}

export default HelloWorldFeature;
