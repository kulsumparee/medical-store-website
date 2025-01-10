import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from "../layout/Index"
import FirstScreen from '../pages/page1/Index';
import DrawerComp from '../components/header/Drawer';
import FooterSec from '../components/footer/Index';
import SingleCard from '../pages/page3';
import AddToCartPage from '../pages/page4/Index';
import CheckoutCard from '../pages/page5/Index';
import OrderCompleted from '../pages/page5/OrderCompleted';
import SignInForm from '../components/form/Signin';
import SignUpForm from '../components/form/SignUp';
import ForgetPassword from '../components/form/ForgetPassword';
import HeadSetPage from '../pages/headSet/Index';
import SingleItemsDetails from '../components/singleData';

const AppContent = () => {
    const location = useLocation();
    console.log(location, "location");

    const currentPath = location.pathname.split('?')[0].toLowerCase(); 
    const shouldShowHeaderAndFooter = !['/sign-in', '/sign-up', '/forget-password'].includes(currentPath);

    return (
        <>
            {shouldShowHeaderAndFooter && <DrawerComp />}

            <Routes>
                <Route path="/" element={<Layout />} />
                <Route path="shopNow" element={<FirstScreen />} />
                <Route path="singleCardDetails" element={<SingleCard />} />
                <Route path="cart" element={<AddToCartPage />} />
                <Route path="checkout" element={<CheckoutCard />} />
                <Route path="completeOrder" element={<OrderCompleted />} />
                <Route path="headset" element={<HeadSetPage />} />
                <Route path="sign-in" element={<SignInForm />} />
                <Route path="sign-up" element={<SignUpForm />} />
                <Route path="forget-password" element={<ForgetPassword />} />
                <Route path="item-details" element={<SingleItemsDetails/>} />
            </Routes>

            {shouldShowHeaderAndFooter && <FooterSec />}
        </>
    );
};

export default AppContent