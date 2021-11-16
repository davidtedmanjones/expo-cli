import { install as installSourceMapSupport } from 'source-map-support';

if (process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test') {
  installSourceMapSupport();
}
export {
  Analytics,
  Android,
  ApiV2,
  AppleDevice,
  Binaries,
  Config,
  AndroidCredentials,
  ConnectionStatus,
  CoreSimulator,
  Detach,
  Doctor,
  Env,
  EmbeddedAssets,
  Exp,
  ErrorCode,
  isDevClientPackageInstalled,
  IosCodeSigning,
  Logger,
  ModuleVersion,
  NotificationCode,
  printBundleSizes,
  PackagerLogsStream,
  LogRecord,
  LogUpdater,
  PKCS12Utils,
  Project,
  Prompts,
  ProjectSettings,
  ProjectAssets,
  ProjectUtils,
  SimControl,
  Simulator,
  ThirdParty,
  UrlUtils,
  UserManager,
  User,
  RobotUser,
  UserSettings,
  UnifiedAnalytics,
  Versions,
  Webpack,
  XDLError,
} from './internal';
