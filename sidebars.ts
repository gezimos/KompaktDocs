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
        'prepare/unlocking',
        'prepare/mtkclient',
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
        'features/faq',
        'features/eink',
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
    {
      type: 'category',
      label: 'Changelog',
      link: {type: 'doc', id: 'changelog'},
      items: ['changelog/v1-3', 'changelog/v1-2', 'changelog/v1-1'],
    },
    'credits',
  ],
};

export default sidebars;
