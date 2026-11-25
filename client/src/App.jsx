import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Header from './components/Header'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [searchText, setSearchText] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState([]);
  const [sortOrder, setSortOrder] = useState('none');

  return (
    <>
      <Header
        searchText={searchText}
        onSearchChange={setSearchText}
        selectedCuisine={selectedCuisine}
        onCuisineChange={setSelectedCuisine}
        sortOrder={sortOrder}
        onSortChange={setSortOrder}
      />
      <main>
        <Routes>
          <Route path="/" element={<HomePage
            searchText={searchText}
            selectedCuisine={selectedCuisine}
            sortOrder={sortOrder}
            onResetFilters={() => {
              setSearchText('');
              setSelectedCuisine([]);
              setSortOrder('none');
            }} />}
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>
    </>
  )
}

export default App
