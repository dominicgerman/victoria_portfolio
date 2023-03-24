export type Context = string[]
export type Details = [
  {
    _key: string
    caption: string
    asset: {
      _ref: string
      _type: string
    }
  }
]
export type Hero = {
  dates: string
  description: string
  image: {
    _type: string
    asset: {
      _ref: string
      _type: string
    }
  }
  role: string
  title: string
}
export type Index = number
export type Link = {
  text: string
  url: string
}
export type Outcomes = {
  business: string[]
  product: string[]
}
export type OtherDetails = {
  heading: string
  text: string
}

export type CaseStudyProps = {
  context: Context
  details: Details
  hero: Hero
  index: Index
  link: Link
  outcomes: Outcomes
  otherDetails: OtherDetails
}
