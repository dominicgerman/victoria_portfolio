import { Outlet } from 'react-router-dom'
import List from '../components/List'

export default function Home() {
  return (
    <div>
      <h2 className="text-6xl max-w-4xl my-32">
        A lifelong Chicago native, I am currently a Product Design Lead at
        JPMorgan Chase.
      </h2>
      <List />
      <Outlet />
    </div>
  )
}
