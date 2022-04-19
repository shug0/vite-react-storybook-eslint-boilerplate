import './assets/index.css';
import { useTranslation } from 'react-i18next';

import './config/i18next.js';

function App() {
  const { t } = useTranslation();
  return <div>{t('welcome')}</div>;
}

export default App;
