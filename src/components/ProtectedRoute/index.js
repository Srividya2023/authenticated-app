// Write your JS code here
import {Redirect, Route} from 'react-router-dom' 
import Cookies from 'js-cookie'

const ProtectedRoute = (props) => {
    const token = Cookies.get('jwt_token') 
    if(token === undefined){
        console.log("hi")
        return <Redirect to='/login' />
    }
    
    return <Route {...props} />
}

export default ProtectedRoute