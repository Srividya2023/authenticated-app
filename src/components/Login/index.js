// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class  Login extends Component {
        setCookie = (jwtToken) => {
                Cookies.set('jwt_token' , jwtToken , {expires : 30})
                const {history} = this.props
                console.log(history)
                history.replace("/")
        }


        onClickLogin = async() => {
                
                const url="https://apis.ccbp.in/login" 
                const userDetails = {username : 'rahul' , password : 'rahul@2021'}
                const options = {
                        method : "POST", 
                        body : JSON.stringify(userDetails) 

                }

                const response = await fetch (url, options) 
                console.log(response)

                const data = await response.json() 

                console.log(data)

                if(response.ok === true) {
                        this.setCookie(data.jwt_token)
                }

        }
        render(){
                const jwtToken = Cookies.get('jwt_token') 
                if (jwtToken !== undefined) {
                        return <Redirect to='/' />
                }
                return(
        

                <div className='flex-props'>
                <h1>Please Login</h1>
                <button type='button' onClick={this.onClickLogin}>Login with Sample Creds</button>
                </div>
        )
        }
       
}
export default Login