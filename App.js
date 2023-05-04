import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer style={styles.container}>
    {/* //change back button logo */}
      <Stack.Navigator initialRouteName='Main'>

        <Stack.Screen name="Main" component={MainPage}
            options={{
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
            title:"",
            headerShown: true,
            headerTransparent: true,
        }}
        />
        <Stack.Screen name="Login" component={LoginPage}
            options={{
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
              presentation: 'card'
        }}
        />
        <Stack.Screen name="Signup" component={SignupPage}
            options={{
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Reset Password" component={ResetPwd}
            options={{
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Enter OTP" component={Otppage}
            options={{
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="New Password" component={NewPwd}
            options={{
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Welcome1" component={WelcomeSlider1}
            options={{
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
          title:"",
            headerShown: true,
            headerTransparent: true,
        }}
        />
        <Stack.Screen name="Welcome2" component={WelcomeSlider2}
            options={{
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
          title:"",
            headerShown: true,
            headerTransparent: true,
        }}
        />
        <Stack.Screen name="Welcome3" component={WelcomeSlider3}
            options={{
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
          title:"",
            headerShown: true,
            headerTransparent: true,
        }}
        />
        <Stack.Screen name="Home" component={MegaHome}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Menu" component={MenuPg}
          options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Offers" component={OffersPg}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Profile" component={ProfilePg}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="More" component={MorePg}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Desserts" component={Desserts}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Notifications" component={NotificationPage}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="About Us" component={AboutUs}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Payment Details" component={PaymentDetails}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Orders" component={OrdersPage}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Inbox" component={InboxPg}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Order" component={ItemPg}
          options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cartWhite.svg')}/>),
            title:"",
            headerShown: true,
            headerTransparent: true,
            headerStyle: {
            backgroundColor: '#ffffff00',
            color:'white',
          },
          headerTintColor: 'white'
        }}
        />
        <Stack.Screen name="Checkout" component={CheckoutPg}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
        <Stack.Screen name="Thank You" component={ThankYou}
            options={{
            headerRight: () => (<Image style={styles.cartLogo} source={require('./assets/image/shopping-cart.svg')}/>),
            headerStyle: {
              backgroundColor: '#ffffff00',
          },
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({

container:{
  flex: 1,
  backgroundColor: '#f8f8f8',
  alignItems:'center',
  // justifyContent:'center',
},
cartLogo:{
  width:22,
  height:20,
  right:20
},

});
