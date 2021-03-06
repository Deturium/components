import { configure } from '@storybook/react';

const req = require.context('../stories', true, /\.story\.jsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));

  // require('../stories');
}

configure(loadStories, module);
