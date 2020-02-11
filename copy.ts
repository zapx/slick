const fs = require('fs');

const dirRoot = 'projects/slick/src/cli';

const dirBuild = 'dist/slick/cli';

const dirOfSchema = 'projects/slick/src/cli/ng-add/';

fs.copyFileSync(dirRoot + '/collection.json', dirBuild + '/collection.json');

fs.copyFileSync(dirRoot + '/ng-add/schema.json', dirBuild + '/ng-add/schema.json');
