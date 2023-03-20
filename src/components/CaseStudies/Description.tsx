type Props = {
  context: string[]
  sprintDetails?: string
  outcomes?: {
    business: string[]
    product: string[]
  }
}

export default function Description({ context }: Props) {
  return (
    <div className="max-w-5xl mx-auto text-2xl">
      <p className="mb-8 font-bold">Context</p>
      <p className="mb-36">{context}</p>
    </div>
  )
}
