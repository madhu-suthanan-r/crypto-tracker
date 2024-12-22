
import './App.css';
import { BrowserRouter,Route} from "react-router-dom";
import Header from './component/Header';
import { makeStyles } from "@material-ui/core";
import Alert from './component/Alert';
import { lazy, Suspense } from 'react';

const Homepage = lazy(() => import("./Pages/Homepage"));
const CoinPage = lazy(() => import("./Pages/CoinPage"));

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));


function App() {
  const classes = useStyles();

  return (
    <BrowserRouter >
     <div className={classes.App}>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Route path="/" component={Homepage} exact />
          <Route path="/coins/:id" component={CoinPage} exact />
        </Suspense>
      </div>
      <Alert/>
    </BrowserRouter>
  );
}

export default App;
