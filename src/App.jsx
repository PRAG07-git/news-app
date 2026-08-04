import './App.css';
import NavBar from './components/NavBar';
import NewsComp from './components/NewsComp';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  const pageSize = 6;
  return (
    <div>
      <Router>
          <NavBar/>
         <Routes>
           <Route exact path="/" element={<NewsComp key="general" country={"us"} pageSize={pageSize} category={"general"}/>}/>
           <Route exact path="/business" element={<NewsComp key="business" country={"us"} pageSize={pageSize} category={"business"}/>}/>
           <Route exact path="/entertainment" element={<NewsComp key="entertainment" country={"us"} pageSize={pageSize} category={"entertainment"}/>}/>
           <Route exact path="/general" element={<NewsComp key="general" country={"us"} pageSize={pageSize} category={"general"}/>}/>
           <Route exact path="/health" element={<NewsComp key="health" country={"us"} pageSize={pageSize} category={"health"}/>}/>
           <Route exact path="/science" element={<NewsComp key="science" country={"us"} pageSize={pageSize} category={"science"}/>}/>
           <Route exact path="/sports" element={<NewsComp key="sports" country={"us"} pageSize={pageSize} category={"sports"}/>}/>
           <Route exact path="/technology" element={<NewsComp key="technology" country={"us"} pageSize={pageSize} category={"technology"}/>}/>
         </Routes>
      </Router>
    </div>

  )
}
