import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Before you start',
      collapsed: false,
      items: [
        'prepare/requirements',
        'prepare/mtkclient',
        'prepare/unlocking',
      ],
    },
    {
      type: 'category',
      label: 'Install',
      collapsed: false,
      items: [
        'install/editions',
        'install/install-kompaktos',
        'install/post-install',
        'install/updates',
        'install/going-back',
        'install/erase-frp',
        'install/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Features',
      items: [
        'features/what-works',
        'features/eink',
        'features/per-app',
        'features/sleep-screen',
        'features/aod',
        'features/battery',
        'features/backup',
        'features/hardware/offline-switch',
        'features/hardware/notification-light',
        'features/hardware/sim-esim',
        'features/hardware/fm-radio',
        'features/hardware/fingerprint',
        'features/hardware/camera',
      ],
    },
    {
      type: 'category',
      label: 'Extras',
      items: ['develop/understanding-android', 'develop/kernel-and-vendor', 'develop/building', 'develop/last-resort'],
    },
    'changelog',
    'credits',
  ],
};

export default sidebars;
