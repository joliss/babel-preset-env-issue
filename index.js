let babel = require("@babel/core");

console.log(
  babel.transform("class A { }", {
    babelrc: false,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: {
            browsers: 59, // silently ignored
            // browsers: "invalid123", // this fails however
            invalid123: "invalid123" // silently ignored
          }
        }
      ]
    ]
  }).code
);

console.log(
  babel.transform("class A { }", {
    babelrc: false,
    presets: [
      [
        "@babel/preset-env",
        {
          targets: "invalid123" // silently ignored
        }
      ]
    ]
  }).code
);
