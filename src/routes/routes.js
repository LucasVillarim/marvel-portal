import React from 'react';
import HomeComponent from '../pages/home';
import { Routes, Route } from 'react-router-dom';
import EventsComponent from '../pages/events';
import ComicsComponent from '../pages/comics';
import MemberComponent from '../pages/member';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route exact path="/home" element={<HomeComponent />} />
            <Route exact path="/events" element={<EventsComponent />} />
            <Route exact path="/comics" element={<ComicsComponent />} />
            <Route exact path="/members" element={<MemberComponent />} />
        </Routes>
    );
};

export default RoutesComponent;