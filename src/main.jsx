import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// Bootstrap CSS moved to index.html (non-blocking) - removed from JS bundle
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/css/main.css'
import './assets/css/responsive.css'
import './assets/css/inline-styles.css'
// Swiper CSS moved to index.html (non-blocking) - removed from JS bundle
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// animate.css moved to index.html (non-blocking) - removed from JS bundle
// import "animate.css";

createRoot(document.getElementById('root')).render(
<StrictMode>
    <App />
</StrictMode>,
)
