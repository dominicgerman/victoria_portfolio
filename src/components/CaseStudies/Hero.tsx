import { urlFor } from '../../hooks/sanity'
import { Hero as HeroProps } from './CaseStudy.types'

type Props = {
  hero: HeroProps
}

export default function Hero({ hero }: Props) {
  return (
    <div className="flex flex-col gap-8 md:grid grid-cols-2 md:gap-x-16 mt-32 md:mt-20 mb-20">
      <div className="flex flex-col gap-10 justify-center">
        <div className="text-xl">
          <span className="pr-2">{hero?.role}</span>|
          <span className="pl-3">{hero?.dates}</span>
        </div>
        <h2 className="text-5xl">{hero?.title}</h2>
        <p className="text-2xl font-accent">{hero?.description}</p>
      </div>
      <div className="self-center md:justify-self-center">
        <img
          src={urlFor(hero?.image.asset._ref).toString()}
          alt="pic"
          className="rounded-2xl max-h-128"
        />
      </div>
    </div>
  )
}
