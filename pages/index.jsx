import Image from "next/image"
import { useState } from "react"

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Lang from "../components/Lang"
import Input from "../components/Input"

export default function Home() {
  const { t, i18n } = useTranslation('login')
  const [checkError, setCheckError] = useState('')

  const changeLanguage = (lng) => {    
    i18n.changeLanguage(lng);
  };

  return (
    <>
      <div style={{ backgroundImage: `url(Assets/Backgrounds/login.jpg)` }} className="bg-cover">
        <div className="h-screen bg-white md:max-w-sm flex items-center justify-items-start p-11 shadow w-full overflow-auto relative">
          <div className="absolute top-0 right-0">
            <div className="absolute top-0 right-0">
              <Lang changeLanguage={changeLanguage} />
            </div>
          </div>
          <div className="m-auto w-80 text-center">
            <Image className="logo w-50 m-auto" src="/Assets/Brand/libellum.svg" alt="Libellum" width={133} height={66} priority={true} />
            <h4 className="text-2xl my-2.5 font-bold opensans mb-9 text-libellum-title">{t('title')}</h4>
            <form id="formLogin">
              <Input id="email" name="email" type="email" required={false} label={t('input.email')} />
              <div className="text-left">
                <div className="flex items-center justify-items-start mb-3 text-sm">
                  <input type="checkbox" id="remember" name="remember" className="border mr-2 checkbox rounded accent-libellum" />
                  <label htmlFor="remember" className="text-libellum-gray">{t('label.remember')}</label>
                </div>
                <div className="flex items-center justify-items-start text-sm relative">
                  <input type="checkbox" id="terms" name="terms" className="border mr-2 checkbox rounded accent-libellum" />
                  <label htmlFor="terms" className="text-libellum-gray">{t('label.terms')}</label>
                </div>
                {checkError &&
                  <div className="text-red-600 text-sm w-full mt-1">{checkError}</div>
                }
              </div>
              <div className="mt-10">
                <div className="mb-8">

                </div>
                <span className="text-libellum-gray text-sm cursor-pointer hover:text-underline block">{t('label.recovery')}</span>
                <a href="/free-account" className="text-libellum-gray text-sm">{t('label.free')} / </a><a href="/make-account" className="text-libellum-gray text-sm">{t('label.account')}</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'login',
      ])),
      // Will be passed to the page component as props
    },
  }
}