import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';

const CheckoutPg = () => {
    return (
        <View style={styles.container}>

        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <View style={{marginTop:20,flex:1/20, flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <Text style={{fontSize:18}}>
                    Checkout
                </Text>
            </View>
            <View style={{marginTop:40}}>
                <Text>Delivery Address</Text>
                <View style={{marginTop:20,flexDirection:'row',justifyContent:"space-between"}}>
                    <Text style={{fontWeight:700}}>A/525, Atlantis-x, Vadodara, GJ</Text>
                    <Text style={{color:'orange',fontWeight:700}}>Change</Text>
                </View>
            </View>

            <Image
                style={styles.payment}
                source={require('../../assets/image/Payment_method.png')}
            />
            <View style={{marginTop:30,flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={{fontWeight:700,fontSize:13}}>Sub Total</Text>
                <Text style={{color:'orange',fontWeight:700,fontSize:13}}>₹ 885</Text>
            </View>

            <View style={{marginTop:10,flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={{fontWeight:700,fontSize:13}}>Delivery Cost</Text>
                <Text style={{color:'orange',fontWeight:700,fontSize:13}}>₹ 29</Text>
            </View>

            <View style={{marginTop:10,flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={{fontWeight:700,fontSize:13}}>Discount</Text>
                <Text style={{color:'orange',fontWeight:700,fontSize:13}}>-₹ 9</Text>
            </View>

            <View style={{marginTop:30,flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={{fontWeight:700}}>Total</Text>
                <Text style={{color:'orange',fontWeight:700}}>₹ 905</Text>
            </View>

            <View style={styles.btnActive}>
                <Text style={{color:'white'}}>
                    Send Order
                </Text>
            </View>
            

        </ScrollView>

            <View style={{position:'fixed', bottom:0}}>
                <Image
                style={styles.bottomBar}
                source={require('../../assets/image/grey_Navigation.png')}
                />
            </View>

        </View>
        );
    }
    
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#fff',
            //   alignItems:'center',
            width:'100%',
        },
        bottomBar:{
            top:1,
            // padding:0,
            // margin:0,
            width:400,
            right:20,
            height:110,
            zIndex:111,
        },
        orderIcon:{
            width:90,
            height:90,
            borderRadius:20,
        },
        OrderLine:{
            marginBottom: 5,
            width:100,
            height:15
        },
        OrderLine3:{
            marginBottom: 5,
            width:145,
            height:16
        },
        location:{
            width:12,
            height:16,
            marginRight:5
        },
        btnActive:{
            backgroundColor:'orange',
            width:'100%',
            textAlign:'center',
            justifyContent:'center',
            height:50,
            borderRadius:30,
            marginTop:25,
            marginBottom:70
        },
        payment:{
            width:300,
            height:170,
            marginTop:30
        }
    });

export default CheckoutPg;