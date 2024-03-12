module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@asset': './src/asset',
          '@component': './src/component',
          '@constant': './src/constant',
          '@context': './src/context',
          '@hook': './src/hook',
          '@screen': './src/screen',
          '@style': './src/style',
          '@util': './src/util',
          '@type': './src/type',
          '@navigation': './src/navigation',
          '@store': './src/store',
          '@model': './src/model',
          '@layout': './src/layout',
          '@providers': './src/providers',
          '@types': './src/types',
        },
      },
    ],
  ],
};
