import { Link } from 'react-router-dom'

type Props = {
  length: number
  id: number
}

export default function Pagination({ length, id }: Props) {
  return (
    <div>
      {id > 1 && id < length ? (
        <div className="my-48 text-7xl flex justify-center gap-11">
          <Link to={`/case-study-${id - 1}`}> {'<'} Prev case study</Link>
          <Link to={`/case-study-${id + 1}`}>Next case study {'>'}</Link>
        </div>
      ) : (
        <div className="my-48 text-7xl flex justify-center gap-11">
          {id === 1 ? (
            <Link to={`/case-study-${id + 1}`}>Next case study {'>'}</Link>
          ) : (
            <Link to={`/case-study-${id - 1}`}> {'<'} Prev case study</Link>
          )}
        </div>
      )}
    </div>
  )
}
