import CaseStudyList from './CaseStudies/CaseStudyList'

export default function Home() {
  return (
    <div>
      <h2 className="text-4xl md:text-6xl md:leading-snug max-w-4xl my-20 md:my-32">
        A lifelong Chicago native, I am currently a Product Design Lead at
        JPMorgan Chase.
      </h2>
      <CaseStudyList />
    </div>
  )
}
