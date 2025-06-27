module.exports = {
  // 'include' makes the contents of these files available for other tokens to reference.
  include: [
    'tokens/base.json',
    'tokens/sizing.json'
  ],
  // 'source' contains the token files we actually want to process into CSS.
  source: [
    'tokens/light.color.json',
    'tokens/dark.color.json',
    'tokens/high-contrast.color.json'
  ],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      // We process the 'source' files and output them based on their original filename.
      // This is simpler and less error-prone than complex filters.
      files: [
        {
          destination: 'light.css',
          format: 'css/variables',
          filter: {
            // We only want tokens from the light.color.json file for this output.
            // The references to 'base' and 'sizing' will still work because of 'include'.
            filePath: 'tokens/light.color.json'
          }
        },
        {
          destination: 'dark.css',
          format: 'css/variables',
          filter: {
            filePath: 'tokens/dark.color.json'
          },
          options: {
            selector: `[data-theme='dark']`,
          },
        },
        {
          destination: 'high-contrast.css',
          format: 'css/variables',
          filter: {
            filePath: 'tokens/high-contrast.color.json'
          },
          options: {
            selector: `[data-theme='high-contrast']`,
          },
        }
      ]
    }
  }
};