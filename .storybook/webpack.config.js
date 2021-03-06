module.exports = function ({ config }) {
  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [require.resolve('@storybook/source-loader')],
    enforce: 'pre',
  });

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('awesome-typescript-loader'),
      },
      // Optional
    ],
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: ['to-string-loader', 'css-loader', 'sass-loader']
      // Optional
  });

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};