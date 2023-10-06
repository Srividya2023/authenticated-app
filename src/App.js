import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login' 
import About from './components/About' 
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
const App = () => (
    <BrowserRouter>
    <Switch>
    <Route exact path='/login' component={Login} />
    <ProtectedRoute exact path='/' component={Home} />
    
    <ProtectedRoute exact path='/about' component={About} />
    <Route component= {NotFound} />
    </Switch>
    </BrowserRouter>
)

export default App
