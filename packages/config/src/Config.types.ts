import { ModConfig } from '@expo/config-plugins';
import { ExpoConfig } from '@expo/config-types';

export { ExpoConfig };

export type PackageJSONConfig = Record<string, any>;

export interface ProjectConfig {
  /**
   * Fully evaluated Expo config with default values injected.
   */
  exp: ExpoConfig;
  /**
   * Dynamic config for processing native files during the generation process.
   */
  mods?: ModConfig | null;
  /**
   * Project package.json object with default values injected.
   */
  pkg: PackageJSONConfig;
  /**
   * Unaltered static config (app.config.json, app.json, or custom json config).
   * For legacy, an empty object will be returned even if no static config exists.
   */
  rootConfig: AppJSONConfig;
  /**
   * Path to the static json config file if it exists.
   * If a project has an app.config.js and an app.json then app.json will be returned.
   * If a project has an app.config.json and an app.json then app.config.json will be returned.
   * Returns null if no static config file exists.
   */
  staticConfigPath: string | null;
  /**
   * Path to an app.config.js or app.config.ts.
   * Returns null if no dynamic config file exists.
   */
  dynamicConfigPath: string | null;

  /**
   * Returns the type of the value exported from the dynamic config.
   * This can be used to determine if the dynamic config is potentially extending a static config when (v === 'function').
   * Returns null if no dynamic config file exists.
   */
  dynamicConfigObjectType: string | null;
}
export type AppJSONConfig = { expo: ExpoConfig; [key: string]: any };
export type BareAppConfig = { name: string; [key: string]: any };
export type HookArguments = {
  config: any;
  url: any;
  exp: ExpoConfig;
  iosBundle: string | Uint8Array;
  iosSourceMap: string | null;
  iosManifest: any;
  androidBundle: string | Uint8Array;
  androidSourceMap: string | null;
  androidManifest: any;
  projectRoot: string;
  log: (msg: any) => void;
};

export type ExpoGoConfig = {
  mainModuleName: string;
  // A string that flipper checks to determine if Metro bundler is running
  // by adding it to the manifest, we can trick Flipper into working properly.
  // https://github.com/facebook/flipper/blob/9ca8bee208b7bfe2b8c0dab8eb4b79688a0c84bc/desktop/app/src/dispatcher/metroDevice.tsx#L37
  __flipperHack: 'React Native packager is running';
  debuggerHost: string;
  logUrl: string;
  developer: {
    tool: string | null;
    projectRoot?: string;
  };
  packagerOpts: {
    [key: string]: any;
  };
};

export type ExpoAppManifest = ExpoConfig &
  Partial<ExpoGoConfig> & {
    sdkVersion: string;
    bundledAssets?: string[];
    isKernel?: boolean;
    kernel?: { androidManifestPath?: string; iosManifestPath?: string };
    assetUrlOverride?: string;
    publishedTime?: string;
    commitTime?: string;
    releaseId?: string;
    revisionId?: string;
    env?: Record<string, any>;
    bundleUrl?: string;
    hostUri?: string;
    id?: string;
  };

export interface ExpoUpdatesManifestAsset {
  url: string;
  key: string;
  contentType: string;
  hash?: string;
}

export interface ExpoUpdatesManifest {
  id: string;
  createdAt: string;
  runtimeVersion: string;
  launchAsset: ExpoUpdatesManifestAsset;
  assets: ExpoUpdatesManifestAsset[];
  metadata: { [key: string]: string };
  extra: { [key: string]: any };
}

export type Hook = {
  file: string;
  config: any;
};

export type HookType = 'postPublish' | 'postExport';

export enum ProjectPrivacy {
  PUBLIC = 'public',
  UNLISTED = 'unlisted',
}

export type ExpRc = { [key: string]: any };
export type Platform = 'android' | 'ios' | 'web';
export type ProjectTarget = 'managed' | 'bare';

export type ConfigErrorCode =
  | 'NO_APP_JSON'
  | 'NOT_OBJECT'
  | 'NO_EXPO'
  | 'MODULE_NOT_FOUND'
  | 'INVALID_MODE'
  | 'INVALID_FORMAT'
  | 'INVALID_PLUGIN'
  | 'INVALID_CONFIG';

export type ConfigContext = {
  projectRoot: string;
  /**
   * The static config path either app.json, app.config.json, or a custom user-defined config.
   */
  staticConfigPath: string | null;
  packageJsonPath: string | null;
  config: Partial<ExpoConfig>;
};

export type GetConfigOptions = {
  isPublicConfig?: boolean;
  /**
   * Should the config `mods` be preserved in the config? Used for compiling mods in the eject command.
   *
   * @default false
   */
  isModdedConfig?: boolean;
  skipSDKVersionRequirement?: boolean;
  /**
   * Dangerously skip resolving plugins.
   */
  skipPlugins?: boolean;
  strict?: boolean;
};

export type WriteConfigOptions = { dryRun?: boolean };

export type ConfigFilePaths = { staticConfigPath: string | null; dynamicConfigPath: string | null };
