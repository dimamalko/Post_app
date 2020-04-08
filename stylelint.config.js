const BEM_PATTERN =
  '?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+))?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$';

module.exports = {
  extends: ['stylelint-config-prettier', 'stylelint-config-sass-guidelines'],
  ignoreFiles: ['*/.csv', '*/.gif', '*/.js', '*/.json', '*/.svg'],
  plugins: ['stylelint-prettier', 'stylelint-selector-bem-pattern'],
  rules: {
    'declaration-no-important': true,
    'max-nesting-depth': 4,
    'plugin/selector-bem-pattern': {
      componentName: '[a-z]+',
      componentSelectors: {
        initial: componentName => {
          return new RegExp(
            `^\\.${componentName
              .replace(/(?<l>[a-z])(?<u>[A-Z])/gu, '$1-$2')
              .toLowerCase()}${BEM_PATTERN}`,
            'u'
          );
        }
      },
      ignoreSelectors: '#{.*}',
      implicitComponents: [
        'src/admin/components/*/.scss',
        'src/admin/screens/*/.scss',
        'src/components/*/.scss',
        'src/screens/*/.scss'
      ],
      preset: 'bem'
    },
    'prettier/prettier': true,
    'selector-class-pattern': [
      `^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)${BEM_PATTERN}`,
      {
        message: 'Selector should be written in BEM (block__element--modifier)'
      }
    ]
  }
};
