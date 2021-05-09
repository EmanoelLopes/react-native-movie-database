module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        require.resolve('babel-plugin-module-resolver'),
        {
          "root": ["./"],
          "extensions": ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          "alias": {
            "assets": "./assets",
            "@components": "./src/components",
            "@containers": "./src/containers",
            "@constants": "./src/constants",
            "@icons": "./src/icons",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@utils": "./src/utils",
            "@root-types": "./src/types"
          }
        }
      ],
      [
        "module:react-native-dotenv", 
        {
          "moduleName": "@env",
          "path": ".env",
          "blacklist": null,
          "whitelist": null,
          "safe": false,
          "allowUndefined": true
        }
      ]
    ],
  };
};
