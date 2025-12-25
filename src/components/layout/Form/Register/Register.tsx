import React, { useState } from 'react'
import styles from './Register.module.scss'
import { useTranslation } from 'react-i18next'

const Register = () => {
    const [ form, setForm ] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    })

    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setForm((prev) => ({...prev, [name]:value }))
    }
    console.log(form)


    const { t } = useTranslation()
  return (
    <div className={styles.container}>
        <div className={styles.form}>
            <h1 className={styles.title}>{t('formRegister.title')}</h1>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t("formRegister.name")}</label>
              <input 
                type="text"
                name='name'
                placeholder={t("formRegister.placehoderName")}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='email'>{t("formRegister.email")}</label>
              <input
                type='email'
                name='email' 
                placeholder={t("formRegister.placehoderEmail")}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='password'>{t("formRegister.password")}</label>
              <input 
                type='password' 
                name='password' 
                placeholder={t("formRegister.placehoderPassword")}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor='confirmPassword'>{t("formRegister.confirmPassword")}</label>
              <input 
                type='password' 
                name='confirmPassword' 
                placeholder={t("formRegister.placehoderConfirmPassword")}
                onChange={handleChange}
              />
            </div>

            <button className={styles.btnDk}>{t("formRegister.register")}</button>
        </div>
    </div>
  )
}

export default Register