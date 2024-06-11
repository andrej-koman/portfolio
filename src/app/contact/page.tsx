import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

import { getTranslations } from 'next-intl/server'
import { sendEmail } from '../actions'

export default async function Page() {
  const t = await getTranslations('Contact')

  return (
    <div className="flex h-full flex-col items-stretch justify-between p-10 text-xl leading-[1.7] w600:p-[30px] w600:text-lg w400:p-5 w400:text-base">
      <form action={sendEmail} method="post">
        <div className="mb-5 flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="col-start-1 row-start-1">
              {t('name')}
            </Label>
            <Input
              id="name"
              name="name"
              type="text"
              required={true}
              className="col-span-2 col-start-1 row-start-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email" className="col-start-1 row-start-1">
              {t('email')}
            </Label>
            <Input
              id="email"
              type="email"
              name="email"
              required={true}
              className="col-span-2 col-start-1 row-start-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="message" className="col-start-1 row-start-1">
              {t('message')}
            </Label>
            <Textarea
              rows={12}
              id="message"
              name="message"
              className="col-span-2 col-start-1 row-start-2"
            />
          </div>
        </div>
        <div className="flex w-full justify-end">
          <Button type="submit">{t('send')}</Button>
        </div>
      </form>
    </div>
  )
}
