import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

const today = new Date().toISOString().slice(0, 10)

export const client = createClient({
  projectId: '170ko35j',
  dataset: 'production',
  useCdn: false, // set to `true` to fetch from edge cache
  apiVersion: today, // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getCaseStudies() {
  const docs = await client.fetch('*[_type == "case-study"] | order(index asc)')
  return docs
}

export async function getAboutPage() {
  const about = await client.fetch('*[_type == "about"]')
  return about
}

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(client)

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
export function urlFor(source: { _ref: string; _type: string }) {
  return builder.image(source)
}
