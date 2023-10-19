module.exports = {
  filters: {
    comments: true,
  },
  plugins: {
    '@textlint/markdown': {
      extensions: ['.mdx'],
    },
  },
  rules: {
    'preset-ja-technical-writing': {
      'sentence-length': {
        max: 100,
        exclusionPatterns: ['/\\(.*\\)/'],
      },
      'ja-no-mixed-period': {
        allowPeriodMarks: [':::'],
      },
      'max-kanji-continuous-len': {
        max: 6,
      },
    },
    // 'textlint-rule-preset-ja-spacing': true,
    prh: {
      rulePaths: ['./prh.yaml'],
    },
  },
};
