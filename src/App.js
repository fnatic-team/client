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
import EditBiodata from "./pages/EditBiodata/EditBiodata";
import Login from "./pages/Login/Login";
import Appointment from "./pages/Appointment/Appointment";
import Profile from "./pages/Profile/Profile";
import SpeakerSchedule from "./pages/SpeakerSchedule/SpeakerSchedule";

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
                    <Route exact path="/profile/edit">
                        <EditBiodata />
                    </Route>
                    <Route exact path="/appointment">
                        <Appointment />
                    </Route>

                    <Route exact path="/profile">
                        <Profile />
                    </Route>
                    <Route exact path="/schedule">
                        <SpeakerSchedule />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
