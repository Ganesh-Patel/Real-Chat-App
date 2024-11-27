import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import Home from './pages/Home';
import MyFriends from './pages/Friend/FriendsList';
import FriendDetails from './pages/Friend/FriendDetails';
import Suggestions from './pages/Friend/Suggestions';


const App = () => {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-friends" element={<MyFriends />} />
         <Route path="/suggestions" element={<Suggestions />} />
          {/* <Route path="/requests" element={<Requests />} />
          <Route path="/requested" element={<Requested />} /> */}
          {/* <Route path="/suggestions" element={<Suggestions />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} /> */}
             {/* Dynamic route for FriendDetails */}
             <Route path="/friend/:id" element={<FriendDetails />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
};

export default App;
