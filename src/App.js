import './App.css';
import { useEffect, lazy, Suspense  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import AppBar from './Components/AppBar';
import { authOperations, authSelectors } from './redux/auth';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const HomeView = lazy(() => import('./views/HomeView.js'));
const RegisterView = lazy(() => import('./views/RegisterView.js'));
const LoginView = lazy(() => import('./views/LoginView.js'));
const ContactsView = lazy(() => import('./views/ContactsView.js'));
 
export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    
    <Container >
      <CssBaseline />
      <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} >
      
      <ToastContainer
           autoClose={3000}
           position="top-center"
          />
      <AppBar />
      {isFetchingCurrentUser ? (
      <Loader
                     type="ThreeDots"
                     color="#3f51b5"
                     height={100}
                     width={100}
                    />
    ) : (
      
      <Suspense fallback={<Loader
                     type="ThreeDots"
                     color="#3f51b5"
                     height={100}
                     width={100}
                    />}>
      <Switch>
        <PublicRoute exact path="/">
          <HomeView />
        </PublicRoute>
        <PublicRoute exact path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        <PublicRoute exact path="/login" redirectTo="/contacts" restricted>
          <LoginView />
        </PublicRoute>
        <PrivateRoute path="/contacts" redirectTo="/login">
          <ContactsView />
        </PrivateRoute>
      </Switch>
          </Suspense>)}
      </Typography>
    </Container>
       
    );
};
