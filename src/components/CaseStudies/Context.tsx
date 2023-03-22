type Props = {
  context: any
}

export default function Context({ context }: Props) {
  const { id, Description, SprintDetails, Outcome } = context[0]

  const businessOutcomes = Outcome.filter(
    (item: any) => item.Type === 'Business'
  )

  const productOutcomes = Outcome.filter((item: any) => item.Type === 'Product')

  console.log(Description, context, businessOutcomes)
  return (
    <div className="max-w-5xl mx-auto text-2xl">
      <p className="mb-8 font-bold">Context</p>
      <p className="mb-36">{Description}</p>
      {Outcome ? (
        <div className="grid grid-cols-2">
          <div>
            <p className="mb-8 font-bold">Business Outcomes</p>
            <ol className="mb-36 list-decimal">
              {businessOutcomes.map((item: any) => (
                <li className="mx-8">{item.Outcome}</li>
              ))}
            </ol>
          </div>
          <div>
            <p className="mb-8 font-bold">Product Outcomes</p>
            <ol className="mb-36 list-decimal">
              {productOutcomes.map((item: any) => (
                <li className="mx-8">{item.Outcome}</li>
              ))}
            </ol>
          </div>
        </div>
      ) : null}
      {SprintDetails ? (
        <>
          <p className="mb-8 font-bold">Design Sprint</p>
          <p className="mb-36">{SprintDetails}</p>
        </>
      ) : null}
    </div>
  )
}
