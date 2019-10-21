import React, { Component } from 'react';
import jwt from 'jsonwebtoken';

export default function (Page) {
   class Auth extends Component {
        constructor(props) {
            super(props);
            this.state = {
                user: null
            }
        }

       componentDidMount() {
        const { history } = this.props;
        const token = localStorage.getItem('token');
        const user = this.verifyToken(token);
        if(!user){
             history.push('/login');
        } else {
            this.setState({ user })
        }
       }

       verifyToken(token) {
        return jwt.verify(token,
            process.env.REACT_APP_JWT_SECRET_KEY, 
        (error, decodedToken) => {
            if(error) return false;
            return decodedToken;
        });
       }

       render() {
            const {user} = this.state;
           return(
               <Page user={user} {...this.props} />
           );
       }
   }
   return Auth;
};
