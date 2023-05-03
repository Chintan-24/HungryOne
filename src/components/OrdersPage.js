import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';

const OrdersPage = () => {
    return (
        <View style={styles.container}>

        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <View style={{marginTop:20,flex:1/20, flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <Text style={{fontSize:18}}>
                    My Orders
                </Text>
            </View>
            <View style={{marginTop:40}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View>
                        <Image
                            style={styles.orderIcon}
                            source={require('../../assets/image/order.jpg')}
                        />
                    </View>
                    <View>
                        <View style={{marginLeft:20}}>
                            <Text style={{fontSize:16, fontWeight:700,marginBottom: 5}}>King Burgers</Text>
                            <Image
                                style={styles.OrderLine}
                                source={require('../../assets/image/line2.svg')}
                            />
                            <Image
                                style={styles.OrderLine3}
                                source={require('../../assets/image/line3.svg')}
                            />

                            <View style={{flexDirection:"row"}}>
                            <Image
                            style={styles.location}
                            source={require('../../assets/image/location-pin.svg')}
                            />
                            <Image
                                style={styles.OrderLine3}
                                source={require('../../assets/image/line4.svg')}
                            />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        
            <View style={{marginTop:40,flexDirection:'row',justifyContent:"space-between"}}>
                <Text>Classic cheese Burger x1</Text>
                <Text style={{fontWeight:700}}>₹ 159</Text>
            </View>
            <Text style={{
                        borderBottomColor: '#e2e2e2',
                        borderBottomWidth: 1,
                        paddingBottom: 10,                            
            }}
            />

            <View style={{marginTop:20,flexDirection:'row',justifyContent:"space-between"}}>
                <Text>Paneer makhni Burger x1</Text>
                <Text style={{fontWeight:700}}>₹ 199</Text>
            </View>
            <Text style={{
                        borderBottomColor: '#e2e2e2',
                        borderBottomWidth: 1,
                        paddingBottom: 10,                            
            }}
            />

            <View style={{marginTop:20,flexDirection:'row',justifyContent:"space-between"}}>
                <Text>Supreme Veggie Burger x1</Text>
                <Text style={{fontWeight:700}}>₹ 119</Text>
            </View>
            <Text style={{
                        borderBottomColor: '#e2e2e2',
                        borderBottomWidth: 1,
                        paddingBottom: 10,                            
            }}
            />

            <View style={{marginTop:20,flexDirection:'row',justifyContent:"space-between"}}>
                <Text>Rajma Patty Burger x1</Text>
                <Text style={{fontWeight:700}}>₹ 149</Text>
            </View>
            <Text style={{
                        borderBottomColor: '#e2e2e2',
                        borderBottomWidth: 1,
                        paddingBottom: 10,                            
            }}
            />

            <View style={{marginTop:20,flexDirection:'row',justifyContent:"space-between"}}>
                <Text>Pizza Burger x1</Text>
                <Text style={{fontWeight:700}}>₹ 259</Text>
            </View>
            <Text style={{
                        borderBottomColor: '#e2e2e2',
                        borderBottomWidth: 1,
                        paddingBottom: 10,                            
            }}
            />

            <View style={{marginTop:20,flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={{fontWeight:700}}>Delivery Instructions</Text>
                <Text style={{color:'orange'}}>+ Add Notes</Text>
            </View>

            <View style={{marginTop:30,flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={{fontWeight:700,fontSize:13}}>Sub Total</Text>
                <Text style={{color:'orange',fontWeight:700,fontSize:13}}>₹ 885</Text>
            </View>

            <View style={{marginTop:10,flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={{fontWeight:700,fontSize:13}}>Delivery Cost</Text>
                <Text style={{color:'orange',fontWeight:700,fontSize:13}}>₹ 29</Text>
            </View>

            <View style={{marginTop:30,flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={{fontWeight:700}}>Total</Text>
                <Text style={{color:'orange',fontWeight:700}}>₹ 914</Text>
            </View>

            <View style={styles.btnActive}>
                <Text style={{color:'white'}}>
                    Checkout
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
    });
export default OrdersPage;