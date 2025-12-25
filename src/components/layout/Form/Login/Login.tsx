import React from 'react'
import styles from './Login.module.scss'
import { useTranslation } from 'react-i18next'

const Login = () => {
    const { t } = useTranslation()
  return (
    <div className={styles.container}>
        <div className={styles.form}>
            <h1>{t('formLogin.title')}</h1>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t("formLogin.name")}</label>
              <input type="text" name='name' placeholder={t("formLogin.name")}/>
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='email'>{t("formLogin.email")}</label>
              <input type='email' name='email' placeholder={t("")}/>
            </div>
        </div>
    </div>
  )
}

export default Login