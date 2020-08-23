module.exports = function (api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react'
  ];
  const plugins = [
    '@babel/plugin-transform-runtime',
    'babel-plugin-styled-components',
  ];

  return {
    presets,
    plugins
  };
}
