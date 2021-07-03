import React , {useState}from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';
import base64 from 'base-64';


let todoAPI = 'https://api-js401.herokuapp.com';

export const AuthContext = React.createContext();

function AuthProvider (props){
    const [loggedIn , setLoggedIn] = useState (false);
    const [user, setUser] = useState({})
    const [token , setToken] = useState (null);

    const [show, setShow] = useState(false);

    const signUp = async function (username , password , role){
        let url = `${todoAPI}/signup`
        let body = {
            username , password , role
        }
        let result = await fetch (url , {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
           
        })

        let user = await result.json()
        console.log (user);

    } 

    const signIn = async function (username , password) {
        const encoded = base64.encode (`${username}:${password}`);
        const result = await fetch(`${todoAPI}/signin` , {
            method: 'post',
            mode: 'cors',
            cache: 'no-cache',
            headers: {Authorization: `Basic ${encoded}`},
        })
        let data = await result.json();
        console.log (` logged in  ${data.user.username}` );
        validateToken (data.token)
    }

    const validateToken = function (token){
        try {
            let user = jwt.decode(token)
            if (user){
               verifyLogIN ( !!user , token , user) 
            }  
        } catch (error) {
            verifyLogIN ( false, null, {}) 
        }
        
    }

    const verifyLogIN = function ( loggedIn , token, user) {
        cookie.save('auth', token );
        setLoggedIn(loggedIn)
        setUser(user)
        setToken (token)
    }

    const signOut = function () {
        setLoggedIn(false)
        setUser({})
        setToken (null)
        cookie.remove('auth');
        console.log (`logged out`);
    }


    const handleClose = function (e) { 
        
        setShow(false)
    };
    const handleShow  = function (e) { 
        e.preventDefault()
        setShow(true) 
    };

    const state = {
        loggedIn ,
        setLoggedIn ,
         
        user,
        setUser,

        signUp,
        signIn,
        signOut,

        token,
        setToken,

        show,
        setShow,

        handleClose,
        handleShow
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    )

}

export default AuthProvider;