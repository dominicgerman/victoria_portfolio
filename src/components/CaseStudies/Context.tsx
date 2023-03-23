type Props = {
  context: any
  outcomes: any
  otherDetails: any
}

export default function Context({ context, outcomes, otherDetails }: Props) {
  return (
    <div className="max-w-5xl mx-auto text-2xl">
      <div className="mb-36">
        <p className="mb-8 font-bold">Context</p>
        {context.map((el: string) => (
          <p key={el} className="mb-8">
            {el}
          </p>
        ))}
      </div>
      {outcomes ? (
        <div className="grid grid-cols-2">
          <div className="mb-36">
            <p className="mb-8 font-bold">Business Outcomes</p>
            <ul>
              {outcomes.business.map((item: any) => (
                <li key={item} className="mb-3 mx-8 -indent-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-8 font-bold">Product Outcomes</p>
            <ul>
              {outcomes.product.map((item: any) => (
                <li key={item} className="mb-3 mx-8 -indent-6">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
      {otherDetails ? (
        <div className="mb-36">
          <p className="mb-8 font-bold">{otherDetails.heading}</p>
          <p>{otherDetails.text}</p>
        </div>
      ) : null}
    </div>
  )
}
