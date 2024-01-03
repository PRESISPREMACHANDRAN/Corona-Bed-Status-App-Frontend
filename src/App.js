
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddData from './Components/AddData';
import NotFound from './Components/NotFound';
import Search from './Components/Search';
import ViewAll from './Components/ViewAll';



function App() {
  return (
    <div >
<BrowserRouter>
<Routes>
  <Route path='/'exact element={<AddData/>}/>
  <Route path='/search' element={<Search/>}/>
  <Route path='/viewAll'element={<ViewAll/>}/>
  <Route path='*' element={<NotFound/>}/>
  </Routes>
  </BrowserRouter>


    </div>
  );
}

export default App;
