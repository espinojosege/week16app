import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Video from "./pages/Video";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";
import "https://maps.googleapis.com/maps/api/js?key=AIzaSyBWK76t8Q-Wb6Fxjijhz4VPwLkGtFmMa9M&callback=initMap&libraries=&v=weekly";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Video" element={<Video />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
