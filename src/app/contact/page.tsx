import EmailForm from '@/components/email-form'

import { getTranslations } from 'next-intl/server'

export default async function Page() {
  const t = await getTranslations('Contact')
  const translations = {
    name: t('name'),
    email: t('email'),
    message: t('message'),
    send: t('send'),
  }

  return (
    <div className="flex h-full flex-col items-stretch justify-between p-10 text-xl leading-[1.7] w600:p-[30px] w600:text-lg w400:p-5 w400:text-base">
      <EmailForm translations={translations} />
    </div>
  )
}
