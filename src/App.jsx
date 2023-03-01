import { useState } from "react";

import "./App.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./scenes/home/Home";
import ItemDetail from "./scenes/itemDetail/ItemDetail";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";
import CartModal from "./scenes/global/CartModal";
import LoginScreen from "./scenes/auth/LoginScreen";
import SignUpScreen from "./scenes/auth/SignUpScreen";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
        const ScrollToTop = () => {
                const { pathname } = useLocation();
                useEffect(() => {
                        window.scrollTo(0, 0);
                }, [pathname]);
                return null;
        };
        return (
                <main className="app">
                        <BrowserRouter>
                                <Navbar />
                                <ScrollToTop />
                                <Routes>
                                        <Route path="/" element={<Home />} />
                                        <Route path="/login" element={<LoginScreen />} />
                                        <Route path="/sign-up" element={<SignUpScreen />} />
                                        <Route path="item/:id" element={<ItemDetail />} />
                                        <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>}/>
                                        <Route path="/checkout/success" element={<Confirmation />} />
                                </Routes>
                        </BrowserRouter>
                </main>
        );
}

export default App;
