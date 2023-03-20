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

      {id > 1 && id < length ? (
        <div className="my-48 text-7xl">
          <Link to={`/case-study-${id - 1}`}> {'<'} Prev case study</Link>
          <Link to={`/case-study-${id + 1}`}>Next case study {'>'}</Link>
        </div>
      ) : (
        <div className="my-48 text-7xl">
          {id === 1 ? (
            <Link to={`/case-study-${id + 1}`} className="my-48 text-7xl">
              Next case study {'>'}
            </Link>
          ) : (
            <Link to={`/case-study-${id - 1}`}> {'<'} Prev case study</Link>
          )}
        </div>
      )}
    </>
  )
}
