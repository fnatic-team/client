import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

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
import DetailSpeaker from "./pages/DetailSpeaker/DetailSpeaker";
import ContactUs from "./pages/ContactUs/ContactUs";

function App() {
    return (
        <div className="App">
            <Provider store={store}>
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
                        <Route exact path="/profile/edit/:id">
                            <EditBiodata />
                        </Route>
                        <Route exact path="/appointment">
                            <Appointment />
                        </Route>

                        <Route exact path="/speaker/profile/:id">
                            <Profile />
                        </Route>
                        <Route exact path="/speaker/schedule/:id">
                            <SpeakerSchedule />
                        </Route>
                        <Route exact path="/speaker/:id">
                            <DetailSpeaker />
                        </Route>
                        <Route exact path="/contactus">
                            <ContactUs />
                        </Route>
                    </Switch>
                    <Footer className="footer" />
                </Router>
            </Provider>
        </div>
    );
}

export default App;
