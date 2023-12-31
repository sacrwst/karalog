import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

export const DefaultLayout: FC = () => {
  return (
    <>
      <header className="bg-red-400">
        <Link to={'/'}>
          <h1 className="py-6 text-center text-3xl text-white">Karalog</h1>
        </Link>
      </header>
      <main className="my-6">
        <div className="mx-auto max-w-7xl px-6">
          <Outlet />
        </div>
      </main>
      <footer className="bg-red-400">
        <p className="py-6 text-center text-white">Karalog 2023</p>
      </footer>
    </>
  )
}
