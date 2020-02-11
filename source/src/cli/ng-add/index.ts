import {
  Rule,
  Tree,
  SchematicContext,
  chain,
  SchematicsException,
} from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';
import { addDependencies } from './utils/add-dependencies';
import { latestVersions } from './utils/latest-versions';
import { experimental } from '@angular-devkit/core';
import { scriptsPath, stylesPath } from './utils/path';
import { ExistsPath } from './utils/exists-path';
export default function(options: any): Rule {
  return (tree: Tree, context: SchematicContext) => {
    return chain([
      updatePackageJson('package.json'),
      updateAngularJson('angular.json', options),
      installDependencies(),
    ])(tree, context);
  };
}

function updatePackageJson(path: string) {
  return (host: Tree) => {
    const packageBuf = host.read(path);
    if (!packageBuf) {
      throw new SchematicsException('Cound not find file package.json');
    }

    const packageContent = packageBuf.toString();
    const packageObj = JSON.parse(packageContent);

    addDependencies(packageObj, [
      { name: 'jquery', version: latestVersions.Jquery },
      { name: 'slick-carousel', version: latestVersions.slickCarousel },
    ]);

    host.overwrite(path, JSON.stringify(packageObj, null, '\t'));
    return host;
  };
}

function updateAngularJson(path: string, options: any) {
  return (host: Tree) => {
    const workspaceConfigBuf = host.read(path);
    if (!workspaceConfigBuf) {
      throw new SchematicsException('Cound not find file angular.json');
    }

    const workspaceContent = workspaceConfigBuf.toString();

    const workspaceObj:
      | experimental.workspace.WorkspaceSchema
      | any = JSON.parse(workspaceContent);

    const projectName: string | undefined = options.name;

    if (!projectName || !workspaceObj.projects[projectName]) {
      throw new SchematicsException('Project not exists !');
    }

    const workspaceOptions =
      workspaceObj.projects[projectName].architect.build.options;

    if (!workspaceOptions) {
      throw new SchematicsException(
        'Cound not find property options in angular.json file',
      );
    }

    for (const script of scriptsPath) {
      if (!ExistsPath(workspaceOptions.scripts, script)) {
        workspaceOptions.scripts.push(script);
      }
    }

    for (const style of stylesPath) {
      if (!ExistsPath(workspaceOptions.styles, style)) {
        workspaceOptions.styles.push(style);
      }
    }

    host.overwrite(path, JSON.stringify(workspaceObj, null, '\t'));
  };
}

function installDependencies() {
  return (host: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());
    return host;
  };
}
