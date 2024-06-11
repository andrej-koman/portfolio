'use server'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function setLocale(locale: string, url: string) {
  // Set the cookie NEXT_LOCALE to the new locale
  // and reload the page
  cookies().set('NEXT_LOCALE', locale)

  // Redirect to the current page
  redirect(url)
}

export async function sendEmail(formData: FormData) {
  // Send an email with the form data
  // using the email API
  console.log('Sending email with form data:', formData)
}