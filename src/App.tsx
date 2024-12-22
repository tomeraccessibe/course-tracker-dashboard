import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";


const App = () => (
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
);

export default App;
