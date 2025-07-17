import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./components/home";
import AboutUs from "./components/aboutUs";
import GetInvolved from "./components/getInvolved";
import Events from "./components/events";
import Gallery from "./components/gallery";
import RegisterForm from "./components/registeration";
import Education from "./components/single_pages/education";
import Medical from "./components/single_pages/medical";
import GalleryIndex from "./components/galleryIndex";
import YogaUtsav from "./components/single_pages/yoga_utsav";
import CsrRecognition from "./components/single_pages/csr_recognition";
import Gallery2024 from "./components/single_pages/quiz_quest_2024";
import Gallery2025 from "./components/single_pages/quiz_quest_2025";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/events" element={<Events />} />
            <Route path="/registration" element={<RegisterForm />} />
            <Route path="/gallery" element={<Gallery />}>
              <Route index element={<GalleryIndex />} />
              <Route path="quiz_quest_2024" element={<Gallery2024 />}></Route>
              <Route path="quiz_quest_2025" element={<Gallery2025 />}></Route>
              <Route path="education" element={<Education />}></Route>
              <Route path="medical" element={<Medical />}></Route>
              <Route path="yoga_utsav" element={<YogaUtsav />}></Route>
              <Route
                path="csr_recognition"
                element={<CsrRecognition />}
              ></Route>
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
