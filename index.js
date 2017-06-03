'use strict';

exports.decorateConfig = config => Object.assign({}, config, {
  backgroundColor: '#1F2D3D',
  foregroundColor: '#E0E6ED',
  borderColor:     '#273444',
  cursorColor:     '#1FEEFF',

  colors: {
    black:        '#1F2D3D',
    red:          '#FF49DB',
    green:        '#13CE66',
    yellow:       '#FFC82C',
    blue:         '#1FB6FF',
    magenta:      '#7E5BEF',
    cyan:         '#1FEEFF',
    white:        '#E5E9F2',
    lightBlack:   '#8492A6',
    lightRed:     '#FF7CE5',
    lightGreen:   '#29EB7F',
    lightYellow:  '#FFD55F',
    lightBlue:    '#85D7FF',
    lightMagenta: '#A389F4',
    lightCyan:    '#1FEEFF',
    lightWhite:   '#F9FAFC'
  },
  css: `
    ${config.css}

    /* Hide title when only one tab */
    .tabs_title {
      display: none !important;
    }

    .tab_active:before {
      border-color: #13CE66;
    }

    .term_fit:not(.term_term) {
      opacity: 0.6;
    }

    .term_fit.term_active {
      opacity: 1;
      transition: opacity 0.12s ease-in-out;
      will-change: opacity;
    }

    .tab_tab::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      background-color: #13CE66;
      transform: scaleX(0);
    }

    .tab_first {
      border-left-color: transparent !important;
    }

    .tab_tab:not(.tab_active) {
      color: #8492A6;
    }

    .tab_tab.tab_active::before {
      transform: scaleX(1);
      transition: all 200ms cubic-bezier(0.0, 0.0, 0.2, 1);
    }
  `
});
