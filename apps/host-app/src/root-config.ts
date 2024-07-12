import { registerApplication, start } from 'single-spa';
import 'systemjs';

declare const System: {
  import: (module: string) => Promise<any>;
};

registerApplication({
  name: 'mfe1',
  app: () => System.import('mfe1'),
  activeWhen: (location) => location.pathname === '/',
});

registerApplication({
  name: 'mfe2',
  app: () => System.import('mfe2'),
  activeWhen: (location) => location.pathname === '/mfe2',
});

registerApplication({
  name: 'mfe3',
  app: () => System.import('mfe3'),
  activeWhen: (location) => location.pathname === '/mfe3',
});

start();
