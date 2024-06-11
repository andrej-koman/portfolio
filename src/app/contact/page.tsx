import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function Page() {
  return (
    <div className="flex h-full flex-col items-stretch justify-between p-10 text-xl leading-[1.7] w600:p-[30px] w600:text-lg w400:p-5 w400:text-base">
      <div className="mb-5 flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="col-start-1 row-start-1">
            Name
          </Label>
          <Input id="name" className="col-span-2 col-start-1 row-start-2" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email" className="col-start-1 row-start-1">
            Email
          </Label>
          <Input
            id="email"
            type="email"
            className="col-span-2 col-start-1 row-start-2"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="message" className="col-start-1 row-start-1">
            Message
          </Label>
          <Textarea
            rows={12}
            id="message"
            className="col-span-2 col-start-1 row-start-2"
          />
        </div>
      </div>
      <div className="flex w-full justify-end">
        <Button type="submit">Send</Button>
      </div>
    </div>
  )
}
