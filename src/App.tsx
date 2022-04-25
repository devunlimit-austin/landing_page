import Landing from 'pages/Landing';
import { useState, useEffect, useCallback } from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

import { IntlProvider } from 'react-intl';

import enMsg from './locale/en.json';
import koMsg from './locale/ko.json';

library.add(faArrowUp);

const locale = navigator.language === 'ko' ? 'ko' : 'en'; // 또는 `navigator.languages[0]`
const messages = { en: enMsg, ko: koMsg }[locale];

function App() {
  return (
    <IntlProvider locale={locale} messages={messages}>
      <Landing />
    </IntlProvider>
  );
}

export default App;
