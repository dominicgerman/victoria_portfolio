import { Link } from 'react-router-dom'
import Hero from './CaseStudies/Hero'
import Description from './CaseStudies/Description'
import Detail from './CaseStudies/Detail'
import Pagination from './Pagination'

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
  length: number
}

export default function CaseStudy({ study, length }: Props) {
  const { hero, context, details, sprintDetails, outcomes, projectLink, id } =
    study

  return (
    <>
      <Hero
        title={hero.title}
        role={hero.role}
        description={hero.description}
        img={hero.imagePath}
      />
      <Description
        context={context}
        outcomes={outcomes}
        sprintDetails={sprintDetails}
      />
      <ul>
        {details.map((item) => (
          <Detail
            key={item.imagePath}
            image={item.imagePath}
            text={item.text}
          ></Detail>
        ))}
      </ul>
      <p className="text-center text-xl">
        Check out the{' '}
        <Link to={projectLink.url}>
          <span className="underline underline-offset-2">
            {projectLink.name}
          </span>
        </Link>{' '}
        for yourself.
      </p>
      <Pagination length={length} id={id} />
    </>
  )
}
