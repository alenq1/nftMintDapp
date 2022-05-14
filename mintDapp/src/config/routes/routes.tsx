import {useRoutes} from 'react-router-dom';
import Gallery from '../../views/Gallery';
import AdminCollection from '../../views/AdminCollection';
import Home from '../../views/Home'
import NotFound from '../../views/NotFound';


const WrappedRoutes = () =>{

  const element = useRoutes([
    // These are the same as the props you provide to <Route>
    { path: "/", element: <Home/> },
    { path: "/gallery", element: <Gallery/> },
    { path: "/admin", element: <AdminCollection/> },    
    // Not found routes work as you'd expect
    { path: "*", element: <NotFound /> }
  ]);

  // The returned element will render the entire element
  // hierarchy with all the appropriate context it needs
  return element;
}

export default WrappedRoutes