import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NotificationPage = () => {
    const navigation = useNavigation();

    return (
            <View style={styles.container}>
    
            <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
                <View style={{marginTop:15, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                    <View>
                    <Image
                        style={styles.dot}
                        source={require('../../assets/image/dot1.svg')}
                    />
                    </View>
                    <View style={{marginLeft:25}}>
                        <Text style={{fontSize:14}}>Your Order has been picked up</Text>
                        <Text style={{fontSize:12,color:'#b1b1b1'}}>Now</Text>
                    </View>
                </View>
                <Text style={{
                            borderBottomColor: '#e2e2e2',
                            borderBottomWidth: 1,
                            paddingBottom: 10,                            
                }}
                />

                <View style={{marginTop:15, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                    <View>
                    <Image
                        style={styles.dot}
                        source={require('../../assets/image/dot1.svg')}
                    />
                    </View>
                    <View style={{marginLeft:25}}>
                        <Text style={{fontSize:14}}>Your Order has been delivered</Text>
                        <Text style={{fontSize:12,color:'#b1b1b1'}}>1h ago</Text>
                    </View>
                </View>
                <Text style={{
                            borderBottomColor: '#e2e2e2',
                            borderBottomWidth: 1,
                            paddingBottom: 10,                            
                }}
                />

                <View style={{marginTop:15, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                    <View>
                    <Image
                        style={styles.dot}
                        source={require('../../assets/image/dot1.svg')}
                    />
                    </View>
                    <View style={{marginLeft:25}}>
                        <Text style={{fontSize:14}}>Lorem ipsum dolor sit amet consecnar</Text>
                        <Text style={{fontSize:12,color:'#b1b1b1'}}>3h ago</Text>
                    </View>
                </View>
                <Text style={{
                            borderBottomColor: '#e2e2e2',
                            borderBottomWidth: 1,
                            paddingBottom: 10,                            
                }}
                />

                <View style={{marginTop:15, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                    <View>
                    <Image
                        style={styles.dot}
                        source={require('../../assets/image/dot1.svg')}
                    />
                    </View>
                    <View style={{marginLeft:25}}>
                        <Text style={{fontSize:14}}>Lorem ipsum dolor sit amet consecnar</Text>
                        <Text style={{fontSize:12,color:'#b1b1b1'}}>5h ago</Text>
                    </View>
                </View>
                <Text style={{
                            borderBottomColor: '#e2e2e2',
                            borderBottomWidth: 1,
                            paddingBottom: 10,                            
                }}
                />

                        <View style={{marginTop:15, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                    <View>
                    <Image
                        style={styles.dot}
                        source={require('../../assets/image/dot1.svg')}
                    />
                    </View>
                    <View style={{marginLeft:25}}>
                        <Text style={{fontSize:14}}>Lorem ipsum dolor sit amet consecnar</Text>
                        <Text style={{fontSize:12,color:'#b1b1b1'}}>02 May 2023</Text>
                    </View>
                </View>
                <Text style={{
                            borderBottomColor: '#e2e2e2',
                            borderBottomWidth: 1,
                            paddingBottom: 10,                            
                }}
                />

                <View style={{marginTop:15, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                    <View>
                    <Image
                        style={styles.dot}
                        source={require('../../assets/image/dot1.svg')}
                    />
                    </View>
                    <View style={{marginLeft:25}}>
                        <Text style={{fontSize:14}}>Lorem ipsum dolor sit amet consecnar</Text>
                        <Text style={{fontSize:12,color:'#b1b1b1'}}>25 April 2023</Text>
                    </View>
                </View>
                <Text style={{
                            borderBottomColor: '#e2e2e2',
                            borderBottomWidth: 1,
                            paddingBottom: 10,                            
                }}
                />

                <View style={{marginTop:15, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                    <View>
                    <Image
                        style={styles.dot}
                        source={require('../../assets/image/dot1.svg')}
                    />
                    </View>
                    <View style={{marginLeft:25}}>
                        <Text style={{fontSize:14}}>Lorem ipsum dolor sit amet consecnar</Text>
                        <Text style={{fontSize:12,color:'#b1b1b1'}}>16 April 2023</Text>
                    </View>
                </View>
                <Text style={{
                            borderBottomColor: '#e2e2e2',
                            borderBottomWidth: 1,
                            paddingBottom: 10,                            
                }}
                />

                <View style={{marginTop:15, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                    <View>
                    <Image
                        style={styles.dot}
                        source={require('../../assets/image/dot1.svg')}
                    />
                    </View>
                    <View style={{marginLeft:25}}>
                        <Text style={{fontSize:14}}>Lorem ipsum dolor sit amet consecnar</Text>
                        <Text style={{fontSize:12,color:'#b1b1b1'}}>12 March 2023</Text>
                    </View>
                </View>
                <Text style={{
                            borderBottomColor: '#e2e2e2',
                            borderBottomWidth: 1,
                            paddingBottom: 10,                            
                }}
                />
    
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
            dot:{
                width:10,
                height:10,
            },
        });
        
export default NotificationPage;