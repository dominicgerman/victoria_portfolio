import { urlFor } from '../utils/sanity'
import { Hero as HeroProps } from './CaseStudy.types'

type Props = {
  hero: HeroProps
}

export default function Hero({ hero }: Props) {
  return (
    <div className="grid grid-cols-2 gap-x-16 my-20">
      <div className="flex flex-col gap-10 justify-center">
        <strong className="text-xl">
          {hero.role} | {hero.dates}
        </strong>
        <h2 className="text-5xl">{hero.title}</h2>
        <p className="text-2xl">{hero.description}</p>
      </div>
      <div className="justify-self-center">
        <img
          src={urlFor(hero.image.asset._ref).toString()}
          alt="pic"
          className="rounded-2xl max-h-128"
        />
      </div>
    </div>
  )
}
