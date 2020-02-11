const fs = require('fs');

const dirRoot = 'source/src/cli';

const dirBuild = 'dist/source/cli';

const dirOfSchema = 'source/src/cli/ng-add/';

fs.copyFileSync(dirRoot + '/collection.json', dirBuild + '/collection.json');

fs.copyFileSync(
  dirRoot + '/ng-add/schema.json',
  dirBuild + '/ng-add/schema.json',
);
