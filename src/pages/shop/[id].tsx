import { FC } from 'react'
import { useParams } from 'react-router-dom'

export const Shop: FC = () => {
  const { id } = useParams()
  return (
    <>
      <div>ID: {id}</div>
      <div>からい店詳細</div>
    </>
  )
}
