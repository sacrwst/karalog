import { Card } from '@/components/ui/Card'
import { FC } from 'react'

export const Home: FC = () => {
  const shops = [
    {
      id: 1,
      name: '辛い店',
    },
    {
      id: 2,
      name: 'すごく辛い店',
    },
    {
      id: 3,
      name: 'そうでもない店',
    },
  ]
  return (
    <>
      <div className="cards mx-auto flex justify-between gap-x-4 px-10">
        {shops.map((shop) => (
          <Card shop={shop} />
        ))}
      </div>
    </>
  )
}
