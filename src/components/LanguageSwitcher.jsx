import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Dropdown, Menu, Tooltip } from 'antd';
import { GlobalOutlined, DownOutlined } from '@ant-design/icons';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const menu = (
    <Menu
      onClick={({ key }) => changeLanguage(key)}
      items={[
        {
          key: 'en',
          label: 'English',
        },
        {
          key: 'tr',
          label: 'Türkçe',
        },
      ]}
    />
  );

  return (
    <Tooltip title="Change Language">
      <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
        <Button>
          <GlobalOutlined /> {i18n.language.toUpperCase()} <DownOutlined />
        </Button>
      </Dropdown>
    </Tooltip>
  );
};

export default LanguageSwitcher;