import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <nav style={{display: 'flex', gap: '20px', fontStyle: 'cursive', fontSize: '25px'}}>
          <Link to="/">Home</Link> | 
          <Link to="/add-recipe"> Add Recipe</Link> |  
          <Link to="/favorites"> Favorites</Link> |  
          <Link to="/recommendations"> Recommendations</Link>
      </nav>
      <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/favorites" element={<FavoritesList />} />
          <Route path="/recommendations" element={<RecommendationsList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

