import { Routes, Route, Outlet, BrowserRouter} from 'react-router-dom'

import { Error, Landing, Register, ProtectedRoute } from './pages';
import { Addjob, AllJob, Profile, Stats, SharedLayout } from './pages/dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
            <SharedLayout />
        }>
          <Route index element={<Stats />}/>
          <Route path='add-job' element={<Addjob />}/>
          <Route path='all-job' element={<AllJob />}/>
          <Route path='profile' element={<Profile />}/>
        </Route>
        <Route path='/landing' element={ <Landing /> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path='*' element={ <Error /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
