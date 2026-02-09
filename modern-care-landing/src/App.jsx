
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AIHealthAssistant } from './pages/AIHealthAssistant';
import { GoogleTranslate } from './components/GoogleTranslate';

function App() {
  return (
    <Router>
      <GoogleTranslate />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai-assistant" element={<AIHealthAssistant />} />
      </Routes>
    </Router>
  );
}

export default App;
