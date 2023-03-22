import { useQuery } from 'react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function List() {
  const { isLoading, data } = useQuery('case-studies', () => {
    return axios.get('http://localhost:1337/api/case-studies?populate=deep')
  })

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  console.log(data?.data.data)

  return (
    <div className="work grid grid-cols-2 text-4xl max-w-4xl">
      <h3>Work</h3>
      <div className="flex flex-col gap-7">
        {data?.data.data.map((item: any) => (
          <Link key={item.id} to={`./case-studies/${item.id}`}>
            <span>🔒 {item.attributes.hero.title}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
