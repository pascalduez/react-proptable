/* eslint-disable no-param-reassign */

module.exports = (baseConfig) => {
  baseConfig.module.loaders.push({
    test: /\.css$/,
    loaders: [
      'style',
      'css?modules&localIdentName=[name]-[local]_[hash:base64:5]',
    ],
  });

  baseConfig.module.loaders.push({
    test: /\.json$/,
    loaders: [
      'json',
    ],
  });

  return baseConfig;
};
