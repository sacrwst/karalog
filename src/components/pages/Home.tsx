import { FC } from 'react'

export const Home: FC = () => {
  return (
    <>
      <header className="bg-red-400">
        <h1 className="py-6 text-center text-3xl text-white">Karalog</h1>
      </header>
      <main className="my-6">
        <div className="px-6">
          <div className="cards flex justify-between">
            <div className="max-w-sm overflow-hidden rounded shadow-lg">
              <img className="w-full" src="http://picsum.photos/400/300" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                  perferendis eaque, exercitationem praesentium nihil.
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
            </div>
            <div className="max-w-sm overflow-hidden rounded shadow-lg">
              <img className="w-full" src="http://picsum.photos/400/300" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                  perferendis eaque, exercitationem praesentium nihil.
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
            </div>
            <div className="max-w-sm overflow-hidden rounded shadow-lg">
              <img className="w-full" src="http://picsum.photos/400/300" alt="Sunset in the mountains" />
              <div className="px-6 py-4">
                <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
                <p className="text-base text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et
                  perferendis eaque, exercitationem praesentium nihil.
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
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-red-400">
        <p className="py-6 text-center text-white">Karalog 2023</p>
      </footer>
    </>
  )
}

export default Home
