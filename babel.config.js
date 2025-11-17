module.exports = {
  presets: ["babel-preset-expo"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@components": "./app/components",
          "@screens": "./app/screens",
          "@navigation": "./app/navigation",
          "@constants": "./app/constants",
          "@utils": "./app/utils",
          "@hooks": "./app/hooks"
        }
      }
    ]
  ]
};
