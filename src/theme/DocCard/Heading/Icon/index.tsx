import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import type {Props} from '@theme/DocCard/Heading/Icon';
import styles from './styles.module.css';

const svg = (...paths: string[]): ReactNode => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.7}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true">
    {paths.map((d, i) => (
      <path key={i} d={d} />
    ))}
  </svg>
);

const ICONS: Record<string, ReactNode> = {
  // Top level
  overview: svg('M3 10.5 12 3l9 7.5', 'M5 9.5V21h14V9.5', 'M10 21v-6h4v6'),
  compatibility: svg(
    'M10 4a2 2 0 1 1 4 0v2h3a1 1 0 0 1 1 1v3h-2a2 2 0 1 0 0 4h2v3a1 1 0 0 1-1 1h-3v-2a2 2 0 1 0-4 0v2H7a1 1 0 0 1-1-1v-3H4a2 2 0 1 1 0-4h2V7a1 1 0 0 1 1-1h3V4Z',
  ),

  // Categories
  gameplay: svg(
    'M20.5 13.5A8.5 8.5 0 0 1 10.5 3.5a8.5 8.5 0 1 0 10 10Z',
    'M17 3.5v3M15.5 5h3',
  ),
  customization: svg(
    'M4 7h10M18 7h2M4 17h4M12 17h8',
    'M16 7a2 2 0 1 0 0 .01Z',
    'M10 17a2 2 0 1 0 0 .01Z',
  ),
  administration: svg(
    'M12 3 20 6v6c0 4.2-3.2 7.9-8 9-4.8-1.1-8-4.8-8-9V6l8-3Z',
    'M9 12l2 2 4-4',
  ),
  developers: svg('M9 7 4 12l5 5', 'M15 7l5 5-5 5', 'M13 4l-2 16'),

  // Gameplay
  'comfort-system': svg(
    'M3 18v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7',
    'M3 14h18M3 18h18',
    'M7 9V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2',
  ),
  'well-rested': svg(
    'M12 3.5 13.9 9h5.6l-4.5 3.4 1.7 5.6L12 14.6 7.3 18l1.7-5.6L4.5 9h5.6L12 3.5Z',
  ),
  'sleep-overlay': svg(
    'M20.5 13.5A8.5 8.5 0 0 1 10.5 3.5a8.5 8.5 0 1 0 10 10Z',
    'M4.5 5.5h.01M7.5 3.5h.01M4 9.5h.01',
  ),
  'player-statistics': svg('M4 20V10M10 20V4M16 20v-7M22 20H2'),
  'summary-screen': svg(
    'M3 5h18v14H3z',
    'M3 9h18',
    'M7 13h6M7 16h4',
  ),

  // Customization
  'custom-facts': svg(
    'M4 5.5A1.5 1.5 0 0 1 5.5 4H12v16H5.5A1.5 1.5 0 0 1 4 18.5v-13Z',
    'M20 5.5A1.5 1.5 0 0 0 18.5 4H12v16h6.5a1.5 1.5 0 0 0 1.5-1.5v-13Z',
  ),
  'custom-achievements': svg(
    'M8 4h8v5a4 4 0 1 1-8 0V4Z',
    'M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3',
    'M12 13v4M9 21h6M10 17h4',
  ),
  languages: svg(
    'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
    'M3.5 9h17M3.5 15h17',
    'M12 3c2.5 2.4 3.8 5.5 3.8 9S14.5 18.6 12 21c-2.5-2.4-3.8-5.5-3.8-9S9.5 5.4 12 3Z',
  ),

  // Administration
  commands: svg('M4 4h16v16H4z', 'M7.5 9l2.5 2.5L7.5 14', 'M13 15h4'),
  config: svg(
    'M4 8h9M17 8h3M4 16h3M11 16h9',
    'M15 8a2 2 0 1 0 0 .01Z',
    'M9 16a2 2 0 1 0 0 .01Z',
  ),
  'for-servers': svg(
    'M3 5h18v5H3zM3 14h18v5H3z',
    'M7 7.5h.01M7 16.5h.01',
  ),

  // Developers
  kubejs: svg(
    'M9 4H7.5A2.5 2.5 0 0 0 5 6.5v3A2.5 2.5 0 0 1 2.5 12 2.5 2.5 0 0 1 5 14.5v3A2.5 2.5 0 0 0 7.5 20H9',
    'M15 4h1.5A2.5 2.5 0 0 1 19 6.5v3a2.5 2.5 0 0 0 2.5 2.5 2.5 2.5 0 0 0-2.5 2.5v3a2.5 2.5 0 0 1-2.5 2.5H15',
  ),
  'java-api': svg(
    'M9 3v5M15 3v5',
    'M7 8h10v4a5 5 0 0 1-10 0V8Z',
    'M12 17v4',
  ),
};

function iconKey(item: Props['item']): string {
  if (item.type === 'link') {
    return item.docId ?? item.label;
  }
  if (item.type === 'category') {
    return item.label;
  }
  return '';
}

export default function DocCardHeadingIcon({item, icon}: Props): ReactNode {
  const custom = ICONS[iconKey(item).toLowerCase()];

  return (
    <span
      className={clsx(
        ThemeClassNames.docs.docCard.icon,
        styles.cardTitleIcon,
        custom && styles.cardTitleSvg,
      )}>
      {custom ?? icon}
    </span>
  );
}
