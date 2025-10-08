    import { StrictMode } from 'react';
    import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'
    import App from './App'; // Assuming your main component is App

    const rootElement = document.getElementById('root'); // Get the root DOM element
    const root = createRoot(rootElement); // Create a root

    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );