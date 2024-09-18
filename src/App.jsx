import React from "react";
import Navbar from "../src/components/Navbar.jsx";
import { ThemeProvider } from "../src/components/ThemeContext";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "../src/components/Home.jsx"
import RecipeDetailsPage from "./components/RecipeDetailsPage.jsx";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const App = () => {
  return (
    <ThemeProvider>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <Router>
        <Navbar />
        <Routes >
<Route path='/' element={<Home/>}/>
<Route path='/recipe/:id' element={<RecipeDetailsPage/>}/>
        </Routes>
        </Router>
      </ClerkProvider>
    </ThemeProvider>
  );
};

export default App;
