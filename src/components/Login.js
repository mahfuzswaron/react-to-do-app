import React, { useEffect } from 'react';
import auth from './firebase.init';
import { useAuthState, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [user, loading, error] = useAuthState(auth);
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user || gUser) {
      navigate('/')
    }
  }, [user, gUser, navigate])
    if (error || gError) {
    return (
      <div>
        <p>Error: {error.message || gError.message}</p>
      </div>
    );
  }
  if (gLoading || loading) {
    return <p>Loading...</p>;
  }
  
    return (
        <div>
            <h2 className='text-2xl font-bold my-5'>One Click login</h2>
            <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-xs sm:btn-sm md:btn-md lg:btn-md">Login with Google</button>
        </div>
    );
};

export default Login;