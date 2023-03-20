import { Link, useParams } from 'react-router-dom'
import Hero from './CaseStudies/Hero'
import Description from './CaseStudies/Description'
import Detail from './CaseStudies/Detail'

type Props = {
  study: {
    hero: {
      title: string
      role: {
        title: string
        dates: string
      }
      description: string
      imagePath: string
    }
    context: string[]
    outcomes?: {
      business: string[]
      product: string[]
    }
    sprintDetails?: string
    details: {
      imagePath: string
      text: string
    }[]
    projectLink: {
      name: string
      url: string
    }
    id: number
  }
}

export default function CaseStudy({ study }: Props) {
  const { id } = useParams()
  console.log(id)
  const { hero, context, details, sprintDetails, outcomes, projectLink } = study
  return (
    <>
      <Hero
        title={hero.title}
        role={hero.role}
        description={hero.description}
        img={hero.imagePath}
      ></Hero>
      <Description
        context={context}
        outcomes={outcomes}
        sprintDetails={sprintDetails}
      ></Description>
      <ul>
        {details.map((item) => (
          <Detail
            key={item.imagePath}
            image={item.imagePath}
            text={item.text}
          ></Detail>
        ))}
      </ul>
      <p>
        Check out the <Link to={projectLink.url}>{projectLink.name}</Link> for
        yourself.
      </p>
    </>
  )
}
