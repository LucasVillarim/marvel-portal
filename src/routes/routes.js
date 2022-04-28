import React from 'react';
import HomeComponent from '../pages/home';
import { Routes, Route, Navigate } from 'react-router-dom';
import EventsComponent from '../pages/marvel-content';
import MemberComponent from '../pages/member';

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route exact path="/home" element={<HomeComponent />} />
            <Route exact path="/marvelContent" element={<EventsComponent />} />
            <Route exact path="/members" element={<MemberComponent />} />
        </Routes>
    );
};

export default RoutesComponent;