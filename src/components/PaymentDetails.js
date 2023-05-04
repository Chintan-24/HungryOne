import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView,borderBottom } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaymentDetails = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <Text style={styles.smallHead}>Customize Your payment method</Text>
            <View style={styles.PaymentCard}>
                <View style={styles.cardLines}>
                    <Text style={{fontWeight:500}}>
                        Cash/Card on delivery
                    </Text>
                    <Image
                    style={styles.checked}
                    source={require('../../assets/image/checkLogo.svg')}
                    />
                </View>
                <View style={styles.cardLines}>
                <Image
                    style={styles.VisaLabel}
                    source={require('../../assets/image/visaLabel.png')}
                />
                <View style={styles.btnPassive}>
                <Text style={{color:'orange',fontSize:12}}>
                    Delete Card
                </Text>
                </View>
                </View>
                <View>
                    <Text style={{fontWeight:500}}>
                        Other Methods
                    </Text>
                </View>
            </View>
                <View style={styles.btnActive}>
                <Text style={{color:'white',alignItems:'center'}}>
                    <Image
                        style={styles.PlusSign}
                        source={require('../../assets/image/plusWhite.svg')}
                    />
                    &nbsp; Add Another Credit/Debit Card
                </Text>
                </View>
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
        cartIcon:{
            width:20,
            height:20,
        },
        smallHead:{
            fontWeight:700,
            marginBottom:5,
            marginTop:10,
            borderBottomColor: '#c2c2c2',
            borderBottomWidth: 1,
            paddingBottom: 10,
            marginBottom:10
        },
        PaymentCard:{
            width:'120%',
            padding:30,
            right:30,
            shadowColor: '#171717',
            shadowOffset: {width: 2, height: 30},
            shadowOpacity: 0.2,
            shadowRadius: 50,
        },
        checked:{
            width:25,
            height:20,
            
        },
        cardLines:{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-between',
            borderBottomColor: '#e2e2e2',
            borderBottomWidth: 1,
            paddingBottom: 10,
            marginBottom:10
        },
        VisaLabel:{
            width:'60%',
            height:20,
        },
        btnActive:{
            backgroundColor:'orange',
            width:'100%',
            textAlign:'center',
            justifyContent:'center',
            height:45,
            borderRadius:30,
            marginTop:50
          },
          btnPassive:{
            borderWidth:1,
            borderColor:'orange',
            backgroundColor:'white',
            textAlign:'center',
            justifyContent:'center',
            height:25,
            borderRadius:30,
            paddingVertical:10,
            paddingHorizontal:10,
          },
          PlusSign:{
            width:15, 
            height:15,
          }
    });

export default PaymentDetails;