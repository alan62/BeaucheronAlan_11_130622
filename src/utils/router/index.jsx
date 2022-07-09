import { Routes, Route } from 'react-router-dom'
import About from '../../routes/About'
import AccommodationSheet from '../../routes/AccommodationSheet'
import Home from '../../routes/Home'
import NotFound from '../../routes/NotFound'

/**
 * Manages the display of the main section of the different routes of the app.
 *
 * @returns {JSX.Element} The Router component
 */
export default function Router() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/accommodation-sheet/:id" element={<AccommodationSheet />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}
