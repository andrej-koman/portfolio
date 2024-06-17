'use client'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Button } from './ui/button'

import { sendEmail } from '@/app/actions'
import { useFormState } from 'react-dom'
import { useEffect } from 'react'
import { useToast } from './ui/use-toast'

import { CheckIcon } from 'lucide-react'

export default function EmailForm({
  translations,
}: {
  translations: {
    name: string
    email: string
    message: string
    send: string
  }
}) {
  const [state, formAction] = useFormState<
    { status: string; message: string },
    FormData
  >(sendEmail, {
    status: 'idle',
    message: '',
  })

  const { toast } = useToast()

  useEffect(() => {
    if (state.status === 'success') {
      toast({
        description: (
          <div className="flex w-full flex-row items-center justify-between gap-5">
            <CheckIcon size={24} />
            {state.message}
          </div>
        ),
      })
    }
  }, [state, toast])

  return (
    <form action={formAction} method="post">
      <div className="mb-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="col-start-1 row-start-1">
            {translations.name}
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
            {translations.email}
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
            {translations.message}
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
        <Button type="submit">{translations.send}</Button>
      </div>
    </form>
  )
}
