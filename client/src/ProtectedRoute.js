import {Navigate} from 'react-router-dom'

const ProtectedRoute = ({isAuthenticated, child}) => {

    if(!isAuthenticated){
        return <Navigate to='/login' replace/>
    }
  return child;
}

export default ProtectedRoute