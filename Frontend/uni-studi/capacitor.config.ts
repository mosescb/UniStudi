import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.university.student',
  appName: 'UniStudi',
  webDir: 'dist/uni-studi',
  bundledWebRuntime: true,
  android : {
    allowMixedContent: true
  }
};

export default config;
