import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-2">
      <Button
        type={i18n.language === 'en' ? 'primary' : 'default'}
        onClick={() => changeLanguage('en')}
        className="font-medium"
      >
        EN
      </Button>
      <Button
        type={i18n.language === 'tr' ? 'primary' : 'default'}
        onClick={() => changeLanguage('tr')}
        className="font-medium"
      >
        TR
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
