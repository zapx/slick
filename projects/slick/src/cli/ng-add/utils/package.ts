
/**
 * @license
 * Copyright @zapx. All Right Reserved.
 *
 */
export interface Package {
    name: string;
    version: string;
    scripts: any;
    private: boolean;
    dependencies: { [key: string]: string };
    devDependencies: { [key: string]: string };
}
