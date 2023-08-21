import { FC } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  shop: {
    id: number
    name: string
  }
}

export const Card: FC<Props> = ({ shop }) => {
  return (
    <Link to={`shop/${shop.id}`} className="w-1/3 overflow-hidden rounded shadow-lg">
      <img className="w-full" src="http://picsum.photos/400/300" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="mb-2 text-xl font-bold">{shop.name}</div>
        <p className="text-base text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis
          eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pb-2 pt-4">
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #photography
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #travel
        </span>
        <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
      </div>
    </Link>
  )
}
