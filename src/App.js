import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import SideBar from './components/SideBar'
import Listarticles from './components/articles data grid/ProductApp'
import ListCategories from './components/categories/CrudCategMaterialTab'
import ArticlesCards from './components/articles/FetchArticles'

function App() {
  return (
    <Router>
     
      <Routes>
        <Route path='/' element={ <SideBar />  } > 
              <Route index path="/" element={<ArticlesCards/>}/>
              <Route path="articlesDataGrid" element={<Listarticles/>}/>
              <Route path="categMaterialTab" element={<ListCategories/>}/> 
       </Route> 
      </Routes>
    </Router>
  );
}
export default App;
