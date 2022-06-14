import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/NavBar";
import FormComponent from "./components/form/form";
import ResumeComponent from "./components/resume/resume";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
    <Router>
    <NavBar />
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/form" exact component={FormComponent} /> 
        <Route path="/view_resume/:id" exact component={ResumeComponent} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
