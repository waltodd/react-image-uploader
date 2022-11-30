import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {DragAndDrop, Preview} from './components/index'
const App = () =>  (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<DragAndDrop />} />
        <Route exact path='/:name' element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );


export default App