import React from "react";
import { Feature } from "@digitaloptgroup/cms-react";
import "./HelloWorld.css";

function HelloWorld() {
  return (
    <Feature queryName="helloWorld">
      {({ headline, subhead, image, caption }) => {
        return (
          <div>
            <div>
              <img
                src={
                  image &&
                  `https://img.abcloud.io/c_scale,h_150,fl_progressive/${
                    image.path
                  }`
                }
                className="hello-world__img"
              />
              <div>{caption}</div>
            </div>
            <h1>{headline}</h1>
            <h3>{subhead}</h3>
          </div>
        );
      }}
    </Feature>
  );
}

export default HelloWorld;
