
import './App.css';
import { BrowserRouter,Route} from "react-router-dom";
import Header from './component/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import { makeStyles } from "@material-ui/core";



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
        <Route path="/" component={Homepage} exact/>
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
