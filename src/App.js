import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";
import BrowserSpeaker from "./pages/BrowserSpeaker/BrowserSpeaker";
import RegistrasiAudience from "./pages/RegisterAudience/RegisterAudience";
import RegistrasiSpeaker from "./pages/RegisterSpeaker/RegisterSpeaker";
import Registrasi from "./pages/Registrasi/Registrasi";
import Login from "./pages/Login/Login";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>
                    <Route exact path="/search">
                        <BrowserSpeaker />
                    </Route>
                    <Route exact path="/registrasi/audience">
                        <RegistrasiAudience />
                    </Route>
                    <Route exact path="/registrasi/speaker">
                        <RegistrasiSpeaker />
                    </Route>
                    <Route exact path="/registrasi">
                        <Registrasi />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
