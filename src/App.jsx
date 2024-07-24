import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactScreen from './Screens/ContactScreen/ContactScreen.jsx';
import ChatScreen from './Screens/ChatScreen/ChatScreen.jsx';
import InfoScreen from './Screens/InfoScreen/InfoScreen.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ContactScreen />} />
      <Route path="/mensaje/:id" element={<ChatScreen />} />
      <Route path="/contactInfo/:contactoID" element={<InfoScreen />} />
    </Routes>
  );
}

export default App;