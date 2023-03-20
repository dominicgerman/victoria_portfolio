import Hero from './CaseStudies/Hero'
import Description from './CaseStudies/Description'
import DetailsList from './CaseStudies/DetailsList'

type Props = {}

export default function CaseStudy({}: Props) {
  return (
    <>
      <Hero></Hero>
      <Description></Description>
      <DetailsList></DetailsList>
    </>
  )
}
