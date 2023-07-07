import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SideBar from './components/SideBar'
import Listarticles from './components/articles data grid/ProductApp'
import ListCategories from './components/categories/CrudCategMaterialTab'
import ArticlesCards from './components/articles/FetchArticles'

function App() {
  return (
    <Router>
      {/* <SideBar /> */}  
      <Routes>
        <Route path='/' element={<h1>root route "/"</h1>} /> 
        <Route path="articlesCards" element={<ArticlesCards/>}/>
        <Route path="articlesDataGrid" element={<Listarticles/>}/>
        <Route path="categMaterialTab" element={<ListCategories/>}/> 
      </Routes>
    </Router>
  );
}
export default App;
