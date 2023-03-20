import { Link } from 'react-router-dom'

type Props = {}

export default function Home({}: Props) {
  return (
    <div>
      <h2 className="text-6xl max-w-4xl my-32">
        A lifelong Chicago native, I am currently a Product Design Lead at
        JPMorgan Chase.
      </h2>
      <div className="grid grid-cols-2 text-4xl max-w-4xl">
        <h3>Work</h3>
        <div className="flex flex-col gap-7">
          <Link to="./case-study-one">
            🔒 A newly minted home screen for a growing fintech
          </Link>
          <Link to="./case-study-two">
            🔒 Reimagining the information architecture of M1
          </Link>
          <Link to="./case-study-three">
            🔒 An updated investment planning tool for Northern Trust
          </Link>
          <Link to="./case-study-four">
            🔒 A visual overhaul of Northern Trust’s individual investment
            portfolio
          </Link>
        </div>
      </div>
    </div>
  )
}
