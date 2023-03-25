import { Link } from 'react-router-dom'

type Props = {
  length: number
  id: number
}

export default function Pagination({ length, id }: Props) {
  return (
    <div>
      {id > 1 && id < length ? (
        <div className="my-48 text-5xl md:text-7xl underline underline-offset-8 flex flex-col text-center md:flex-row items-center justify-center gap-11">
          <Link to={`/case-studies/${id - 1}`}> {'<'} Prev case study</Link>
          <Link to={`/case-studies/${id + 1}`}>Next case study {'>'}</Link>
        </div>
      ) : (
        <div className="my-48 text-5xl md:text-7xl underline underline-offset-8 flex justify-center gap-11">
          {id === 1 ? (
            <Link to={`/case-studies/${id + 1}`}>Next case study {'>'}</Link>
          ) : (
            <Link to={`/case-studies/${id - 1}`}> {'<'} Prev case study</Link>
          )}
        </div>
      )}
    </div>
  )
}
