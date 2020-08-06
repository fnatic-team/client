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

import DetailSpeaker from "./pages/DetailSpeaker/DetailSpeaker"
import RegisterFacebookSpeaker from "./pages/RegisterFacebookSpeaker/RegisterFacebookSpeaker"
import RegisterFacebookAudience from './pages/RegisterFacebookAudience/RegisterFacebookAudience'
import RegisterGoogleAudience from './pages/RegisterGoogleAudience/RegisterGoogleAuidience'
import RegisterGoogleSpeaker from './pages/RegisterGoogleSpeaker/RegisterGoogleSpeaker'
import ContactUs from "./pages/ContactUs/ContactUs";
import PageSchedule from "./pages/PageAudience/PageAudience"

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
                        <Route exact path="/appointment/:id">
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
                        {/* <Route exact path="/registrasi/speaker/facebook">
                            <RegisterFacebookSpeaker/>
                        </Route>
                         <Route exact path="/registrasi/audience/facebook">
                            <RegisterFacebookAudience/>
                        </Route>
                        <Route exact path="/registrasi/audience/google">
                            <RegisterGoogleAudience/>
                        </Route>
                        <Route exact path="/registrasi/speaker/google">
                            <RegisterGoogleSpeaker/>
                        </Route> */}
                        <Route exact path="/contactus">
                            <ContactUs />
                        </Route>
                        <Route exact path="/audience/schedule/:id">
                            <PageSchedule />
                        </Route>
                    </Switch>
                    <Footer className="footer" />
                </Router>
            </Provider>
        </div>
    );
}

export default App;
