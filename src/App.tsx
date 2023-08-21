import { DefaultLayout } from '@/components/layout/DefaultLayout'
import { Home } from '@/pages/Home'
import { Shop } from '@/pages/shop/[id]'
import '@/styles/globals.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop/:id" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
