import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import MainPage from './src/components/MainPage'
import LoginPage from './src/components/LoginPage';
import SignupPage from './src/components/SignupPage';
import ResetPwd from './src/components/ResetPwd';
import Otppage from './src/components/Otppage';
import NewPwd from './src/components/NewPwd';
import WelcomeSlider1 from './src/components/WelcomeSlider1';
import WelcomeSlider2 from './src/components/WelcomeSlider2';
import WelcomeSlider3 from './src/components/WelcomeSlider3';
import MegaHome from './src/components/MegaHome';
import MenuPg from './src/components/MenuPg';
import Desserts from './src/components/Desserts';
import ItemPg from './src/components/ItemPg';
import OffersPg from './src/components/OffersPg';
import ProfilePg from './src/components/ProfilePg';
import MorePg from './src/components/MorePg';
import PaymentDetails from './src/components/PaymentDetails';
import NotificationPage from './src/components/NotificationPage';
import AboutUs from './src/components/AboutUs';
import InboxPg from './src/components/InboxPg';
import OrdersPage from './src/components/OrdersPage';
import CheckoutPg from './src/components/CheckoutPg';
import ThankYou from './src/components/ThankYou';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <MainPage/> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}
      {/* <ResetPwd/> */}
      <Otppage/>
      {/* <NewPwd/> */}
      {/* <WelcomeSlider1/> */}
      {/* <WelcomeSlider2/> */}
      {/* <WelcomeSlider3/> */}
      {/* <MegaHome/> */}
      {/* <MenuPg/> */}
      {/* <Desserts/> */}
      {/* <ItemPg/> */}
      {/* <OffersPg/> */}
      {/* <ProfilePg /> */}
      {/* <MorePg/> */}
      {/* <PaymentDetails /> */}
      {/* <NotificationPage /> */}
      {/* <AboutUs /> */}
      {/* <InboxPg /> */}
      {/* <OrdersPage /> */}
      {/* <CheckoutPg /> */}
      {/* <ThankYou /> */}

    </View>
);
}

const styles = StyleSheet.create({

container:{
  flex: 1,
  backgroundColor: '#fff',
  alignItems:'center',
  // justifyContent:'center',
},

});
