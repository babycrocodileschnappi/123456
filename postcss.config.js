module.exports = {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
      process.env.NODE_ENV === 'production' &&
        require('@fullhuman/postcss-purgecss')({
          content: ['./src/**/*.ts', './src/**/*.tsx', './src/**/*.js', './src/**/*.jsx'], // 根据你的项目结构修改路径
          defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
        }),
    ],
  };
  