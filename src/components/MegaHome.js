import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MegaHome = () => {
    const navigation = useNavigation();

    return (
    <View style={styles.container}>
    <ScrollView  style={{marginBottom:45,paddingLeft:25,paddingRight:25}}>
        {/* <View style={{marginTop:20,flex:1/20, flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
            <Text>
                Good Morning CB!
            </Text>
            <Image
                style={styles.cartIcon}
                source={require('../../assets/image/shopping-cart.svg')}
            />
        </View> */}
        <View style={{width:'100%',marginTop:20}}>
            <Text style={{color:'#d5d5d5'}}>
                Delivering to
            </Text>
        </View>
            <View style={{flex:1/20, flexDirection:'row',justifyContent:'space-between',width:'100%',left:0}}>
            <Text style={{fontWeight:600}}>
                Current Location
            </Text>
            <Image
                style={styles.downIcon}
                source={require('../../assets/image/downArrow.svg')}
            />
            </View>
            <View style={styles.searchBar}>
            <Image
                style={styles.searchLogo}
                source={require('../../assets/image/find.svg')}
            />
            </View>
                {/* =======  */}
            <View>
                <ScrollView horizontal style={{width:'105%'}}>
                <View style={{width:'23%'}}>
                    <Image
                        style={styles.cateCard}
                        source={require('../../assets/image/burgir.jpg')}
                    />
                    <Text style={{fontWeight:600, textAlign:'center'}}>
                        Burger
                    </Text>
                </View>
                <View style={{width:'23%'}}>
                    <Image
                        style={styles.cateCard}
                        source={require('../../assets/image/pnjabi.png')}
                    />
                    <Text style={{fontWeight:600, textAlign:'center'}}>
                        Panjabi
                    </Text>
                </View>
                <View style={{width:'23%'}}>
                    <Image
                        style={styles.cateCard}
                        source={require('../../assets/image/italian.png')}
                    />
                    <Text style={{fontWeight:600, textAlign:'center'}}>
                        Italian
                    </Text>
                </View>
                <View style={{width:'23%'}}>
                    <Image
                        style={styles.cateCard}
                        source={require('../../assets/image/guj.png')}
                    />
                    <Text style={{fontWeight:600, textAlign:'center'}}>
                        Gujarti
                    </Text>
                </View>
                <View style={{width:'23%'}}>
                    <Image
                        style={styles.cateCard}
                        source={require('../../assets/image/chini.png')}
                    />
                    <Text style={{fontWeight:600, textAlign:'center'}}>
                        Chinese
                    </Text>
                </View>
                </ScrollView>
                {/* =======  */}
                <View style={styles.restaurentsList}>
                    <View style={{marginTop:20, flex:1, flexDirection:'row',justifyContent:'space-between',width:'100%',left:0}}>
                    <Text style={{fontSize:16}}>
                        Popular Restaurents
                    </Text> 
                    <Text style={{color:'orange', fontWeight:500}}>
                        View all
                    </Text> 
                    </View>
                    <TouchableOpacity style={styles.restaurentCard} onPress={() => {navigation.navigate("Order")}}>
                        <Image
                            style={styles.resCardImg}
                            source={require('../../assets/image/pizza1.jpg')}
                        />
                        <Text style={{marginTop:5, fontWeight:500}}>Taste of Pizza</Text>
                        <Image
                            style={styles.resCardDesc}
                            source={require('../../assets/image/starNdDesc.svg')}
                        />
                    </TouchableOpacity>
                    <View style={styles.restaurentCard}>
                        <Image
                            style={styles.resCardImg}
                            source={require('../../assets/image/indian.jpg')}
                        />
                        <Text style={{marginTop:5, fontWeight:500}}>Hotel Indian Spice</Text>
                        <Image
                            style={styles.resCardDesc}
                            source={require('../../assets/image/starNdDesc.svg')}
                        />
                    </View>
                    <View style={styles.restaurentCard}>
                        <Image
                            style={styles.resCardImg}
                            source={require('../../assets/image/kitchn.jpg')}
                        />
                        <Text style={{marginTop:5, fontWeight:500}}>The screat kitchen</Text>
                        <Image
                            style={styles.resCardDesc}
                            source={require('../../assets/image/starNdDesc.svg')}
                        />
                    </View>
                </View>
               
                <View style={styles.restaurentCard}>
                    <View style={{flex:1, flexDirection:'row',justifyContent:'space-between',width:'100%',left:0}}>
                        <Text style={{fontSize:16}}>
                            Most Popular
                        </Text> 
                        <Text style={{color:'orange', fontWeight:500}}>
                            View all
                        </Text> 
                    </View>
                    <ScrollView horizontal style={{width:'105%'}}>
                        <View style={styles.popularCard}>
                            <Image
                                style={styles.popImg}
                                source={require('../../assets/image/thai.jpg')}
                            />
                            <Text style={{fontWeight:600, marginTop:5}}>
                            Thai Town
                            </Text>
                            <Image
                                style={styles.resCardDesc2}
                                source={require('../../assets/image/starNdDesc.svg')}
                            />
                        </View>
                        <View style={styles.popularCard}>
                            <Image
                                style={styles.popImg}
                                source={require('../../assets/image/pizzadhaba.jpg')}
                            />
                            <Text style={{fontWeight:600, marginTop:5}}>
                            Pizza da Dhaba
                            </Text>
                            <Image
                                style={styles.resCardDesc2}
                                source={require('../../assets/image/starNdDesc.svg')}
                            />
                        </View>
                        <View style={styles.popularCard}>
                            <Image
                                style={styles.popImg}
                                source={require('../../assets/image/noodle.jpg')}
                            />
                            <Text style={{fontWeight:600, marginTop:5}}>
                            Noodle Bar
                            </Text>
                            <Image
                                style={styles.resCardDesc2}
                                source={require('../../assets/image/starNdDesc.svg')}
                            />
                        </View>
                    </ScrollView>

                </View>

                <View style={styles.restaurentsList}>
                    <View style={{marginTop:20, flex:1, flexDirection:'row',justifyContent:'space-between',width:'100%',left:0}}>
                        <Text style={{fontSize:16}}>
                            Recent Items
                        </Text> 
                        <Text style={{color:'orange', fontWeight:500}}>
                            View all
                        </Text> 
                    </View>
                    <View style={styles.recentCards}>
                        <Image
                            style={styles.recCardImg}
                            source={require('../../assets/image/Group1.png')}
                        />
                        <Image
                            style={styles.recCardImg}
                            source={require('../../assets/image/Group2.png')}
                        />
                        <Image
                            style={styles.recCardImg}
                            source={require('../../assets/image/Group1.png')}
                        />
                    </View>
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
            source={require('../../assets/image/Bottom_Navigation.png')}
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
        width:'100%'
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