import { createClient } from '@sanity/client'
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
  const docs = await client.fetch('*[_type == "case-study"]')
  return docs
}
// const data = await client.getDocuments([])

// export async function createPost(post: Post) {
//   const result = client.create(post)
//   return result
// }

// export async function updateDocumentTitle(_id, title) {
//   const result = client.patch(_id).set({title})
//   return result
// }
