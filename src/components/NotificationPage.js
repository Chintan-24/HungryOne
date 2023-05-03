import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';

const NotificationPage = () => {
    return (
            <View style={styles.container}>
    
            <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
                <View style={{marginTop:20,flex:1/20, flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                    <Text style={{fontSize:17}}>
                        Notification
                    </Text>
                    <Image
                        style={styles.cartIcon}
                        source={require('../../assets/image/shopping-cart.svg')}
                    />
                </View>
                
                <View style={{marginTop:65, flex:1, flexDirection:'row',alignItems:'baseline'}}>
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