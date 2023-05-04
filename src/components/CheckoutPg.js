import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CheckoutPg = () => {
    const navigation = useNavigation();

    return (
        
        <View style={styles.container}>

        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <View style={{marginTop:10}}>
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
            <Text style={{
                        borderBottomColor: '#e2e2e2',
                        borderBottomWidth: 1,
                        paddingBottom: 10,                            
            }}
            />

            <View style={{marginTop:10,flexDirection:'row',justifyContent:"space-between"}}>
                <Text style={{fontWeight:700}}>Total</Text>
                <Text style={{color:'orange',fontWeight:700}}>₹ 905</Text>
            </View>

            <TouchableOpacity style={styles.btnActive} onPress={() => {navigation.navigate("Thank You")}}>
                <Text style={{color:'white'}}>
                    Send Order
                </Text>
            </TouchableOpacity>
            

        </ScrollView>
        <TouchableOpacity style={{borderRadius:'50%',position:'absolute',height:65,width:65,zIndex:222,bottom:42,left:147}}
    onPress={() => {navigation.navigate("Home")}}    
    >
    </TouchableOpacity>

    <TouchableOpacity style={{borderRadius:'50%',position:'absolute',height:40,width:40,zIndex:224,bottom:20,left:14,}}
    onPress={() => {navigation.navigate("Menu")}}    
    >
    </TouchableOpacity>

    <TouchableOpacity style={{borderRadius:'50%',position:'absolute',height:40,width:40,zIndex:224,bottom:20,left:85,}}
    onPress={() => {navigation.navigate("Offers")}}    
    >
    </TouchableOpacity>

    <TouchableOpacity style={{borderRadius:'50%',position:'absolute',height:40,width:40,zIndex:224,bottom:20,left:233,}}
    onPress={() => {navigation.navigate("Profile")}}    
    >
    </TouchableOpacity>

    <TouchableOpacity style={{borderRadius:'50%',position:'absolute',height:40,width:40,zIndex:224,bottom:20,left:300,}}
    onPress={() => {navigation.navigate("More")}}    
    >
    </TouchableOpacity>
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
            backgroundColor: '#f8f8f8',
            //   alignItems:'center',
            width:'100%',
        },
        bottomBar:{
            top:1,
            // padding:0,
            // margin:0,
            width:410,
        right:28,
        height:110,
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