'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import nodemailer from 'nodemailer'

export async function setLocale(locale: string, url: string) {
  // Set the cookie NEXT_LOCALE to the new locale
  // and reload the page
  cookies().set('NEXT_LOCALE', locale)

  // Redirect to the current page
  redirect(url)
}

type State = {
  status: string
  message: string
}

export async function sendEmail(
  _state: State,
  payload: FormData,
): Promise<State> {
  // Send an email with the form data
  // using the email API
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
  return {
    status: 'success',
    message: 'Email sent successfully',
  }
}
