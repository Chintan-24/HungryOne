import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MegaHome = () => {
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
    <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25, paddingBottom:50}}>
        <View style={{width:'100%',marginTop:10}}>
            <Text style={{fontSize:12}}>
                Find discounts, Offers special
            </Text>
        </View>
        <View style={styles.btnActive}>
                <Text style={{color:'white'}}>
                    Check Offers
                </Text>
            </View>
                {/* =======  */}
            <View>
                
                {/* =======  */}
                <View style={styles.restaurentsList}>
                    <View style={styles.restaurentCard}>
                        <Image
                            style={styles.resCardImg}
                            source={require('../../assets/image/offer1.jpg')}
                        />
                        <Text style={{marginTop:5, fontWeight:500}}>Cafe de Noires</Text>
                        <Image
                            style={styles.resCardDesc}
                            source={require('../../assets/image/starNdDesc.svg')}
                        />
                    </View>
                    <View style={styles.restaurentCard}>
                        <Image
                            style={styles.resCardImg}
                            source={require('../../assets/image/offer2.jpg')}
                        />
                        <Text style={{marginTop:5, fontWeight:500}}>Isso Launge</Text>
                        <Image
                            style={styles.resCardDesc}
                            source={require('../../assets/image/starNdDesc.svg')}
                        />
                    </View>
                    <View style={styles.restaurentCard}>
                        <Image
                            style={styles.resCardImg}
                            source={require('../../assets/image/offer3.jpg')}
                        />
                        <Text style={{marginTop:5, fontWeight:500,}}>Cafe Beans</Text>
                        <Image
                            style={styles.resCardDesc}
                            source={require('../../assets/image/starNdDesc.svg')}
                        />
                    </View>
                </View>
                <View style={{marginBottom:60}}>

                </View>
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
            source={require('../../assets/image/offer_Navigation.png')}
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
    btnActive:{
        backgroundColor:'orange',
        width:'100%',
        textAlign:'center',
        justifyContent:'center',
        height:30,
        width:130,
        borderRadius:30,
        marginTop:30
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
    downIcon:{
        width:10,
        height:10,
        right:160,
        top:5,
    },
    searchBar:{
        backgroundColor:"#e8e8e8",
        height:35,
        width:'100%',
        borderRadius: 30,
        marginTop:40,
    },
    searchLogo:{
        width:17,
        height:17,
        top:8,
        left:14
    },
    cateCard:{
        marginTop:30,
        height:80,
        width:80,
        borderRadius:15
    },
    restaurentsList:{
    },
    restaurentCard:{
        marginTop:20,
    },
    resCardImg:{
        height:160,
        width:'130%',
        right:30,
    },
    resCardDesc:{
        width:'60%',
        height:12
    },
    recentCards:{
        paddingBottom:30
    },
    recCardImg:{
        marginTop:15,
        width:'60%',
        height:72,
    },
    popularCard:{
        marginRight:10
    },
    popImg:{
        marginTop:20,
        height:100,
        width:200,
        borderRadius:10,
    },
    resCardDesc2:{
        width:'70%',
        height:10
    },
});

export default MegaHome;