import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'recipeui',
  outputTargets: [
    { type: 'dist', esmLoaderPath: '../loader' },
    {
      type: 'dist-custom-elements',
      dir: 'dist/custom-elements',
      customElementsExportBehavior: 'bundle'
    }
  ],
  testing: { browserHeadless: 'new' }
};