import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  wikiSidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Gameplay',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'comfort-system',
          label: 'Comfort system',
        },
        {
          type: 'doc',
          id: 'well-rested',
          label: 'Well Rested',
        },
        {
          type: 'doc',
          id: 'sleep-overlay',
          label: 'Sleep overlay',
        },
        {
          type: 'doc',
          id: 'player-statistics',
          label: 'Player statistics',
        },
        {
          type: 'doc',
          id: 'summary-screen',
          label: 'Summary screen',
        },
      ],
    },
    {
      type: 'category',
      label: 'Customization',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'custom-facts',
          label: 'Custom facts',
        },
        {
          type: 'doc',
          id: 'custom-achievements',
          label: 'Custom achievements',
        },
        {
          type: 'doc',
          id: 'languages',
          label: 'Languages',
        },
      ],
    },
    {
      type: 'category',
      label: 'Administration',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'commands',
          label: 'Commands',
        },
        {
          type: 'doc',
          id: 'config',
          label: 'Config',
        },
        {
          type: 'doc',
          id: 'for-servers',
          label: 'For servers',
        },
      ],
    },
    {
      type: 'category',
      label: 'Developers',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'kubejs',
          label: 'KubeJS',
        },
        {
          type: 'doc',
          id: 'java-api',
          label: 'Java API',
        },
      ],
    },
    {
      type: 'doc',
      id: 'compatibility',
      label: 'Compatibility',
    },
  ],
};

export default sidebars;
