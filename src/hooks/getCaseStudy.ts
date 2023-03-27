import { useContext } from 'react'
import CaseStudyContext from './CaseStudyContext'
import { CaseStudyProps } from '../components/CaseStudies/CaseStudy.types'

export default function getCaseStudy(pathname: string) {
  const data = useContext(CaseStudyContext)

  const length = data.length

  const caseStudy: CaseStudyProps = data.filter(
    (el: CaseStudyProps) => el.index.toString() === pathname.slice(-1)
  )[0]

  console.log(caseStudy)

  return { caseStudy, length }
}
