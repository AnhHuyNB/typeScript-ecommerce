import React from 'react'
import styles from './Header.module.scss'
import UseTheme from '../../../app/styles/config/useTheme'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { toggleTheme } = UseTheme()
  const { t, i18n } = useTranslation()

  const handleChangeLanguage = () => {
    const language = i18n.language === 'vi'? 'en' : 'vi'
    i18n.changeLanguage(language)
  }
  return (
    <div className={styles.header}>
      <h1>{t('hello')}</h1>
      <button onClick={handleChangeLanguage}>{i18n.language}</button>
      <button onClick={toggleTheme}>click</button>
    </div>
  )
}

export default Header