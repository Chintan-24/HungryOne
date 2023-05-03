import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';

const MorePg = () => {
    return (
        <View style={styles.container}>

        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <View style={{marginTop:20,flex:1/20, flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <Text style={{fontSize:17}}>
                    More
                </Text>
                <Image
                    style={styles.cartIcon}
                    source={require('../../assets/image/shopping-cart.svg')}
                />
            </View>
            <View style={styles.menuWrapper1}>
                <View style={{flex:1}}>
                <View style={{backgroundColor:'#e5e5e5',borderRadius:'50%',width:50,height:50, top:10,left:10}}>

                <Image
                style={styles.menuImg}
                source={require('../../assets/image/more1.png')}
            />
                </View>
                </View>
                <View style={styles.menuBar}>  
                    <Text style={styles.menuTxt}>Payment Details</Text>
                </View>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideArrow}
                    source={require('../../assets/image/sideArrowGrey.svg')}
                />
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <View style={{flex:1}}>
                <View style={{backgroundColor:'#e5e5e5',borderRadius:'50%',width:50,height:50, top:10,left:10}}>
                <Image
                style={styles.menuImg}
                source={require('../../assets/image/more2.png')}
            />
                    
                </View>
                </View>
                <View style={styles.menuBar}>  
                    <Text style={styles.menuTxt}>My Orders</Text>
                </View>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideArrow}
                    source={require('../../assets/image/sideArrowGrey.svg')}
                />
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <View style={{flex:1}}>
                <View style={{backgroundColor:'#e5e5e5',borderRadius:'50%',width:50,height:50, top:10,left:10}}>

                <Image
                style={styles.menuImg}
                source={require('../../assets/image/more3.png')}
            />
                </View>
                </View>
                <View style={styles.menuBar}>  
                    <Text style={styles.menuTxt}>Notifications</Text>
                    <Image
                        style={styles.notifNum}
                        source={require('../../assets/image/notifNum.svg')}
                    />
                </View>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideArrow}
                    source={require('../../assets/image/sideArrowGrey.svg')}
                />
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <View style={{flex:1}}>
                <View style={{backgroundColor:'#e5e5e5',borderRadius:'50%',width:50,height:50, top:10,left:10}}>

                <Image
                style={styles.menuImg}
                source={require('../../assets/image/more4.png')}
            />
                </View>
                </View>
                <View style={styles.menuBar}>  
                    <Text style={styles.menuTxt}>Inbox</Text>
                </View>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideArrow}
                    source={require('../../assets/image/sideArrowGrey.svg')}
                />
                </View>
            </View> 

            <View style={styles.menuWrapper}>
                <View style={{flex:1}}>
                <View style={{backgroundColor:'#e5e5e5',borderRadius:'50%',width:50,height:50, top:10,left:10}}>
                <Image
                style={styles.menuImg}
                source={require('../../assets/image/more5.png')}
            />
                </View>
                </View>
                <View style={styles.menuBar}>  
                    <Text style={styles.menuTxt}>About Us</Text>
                </View>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideArrow}
                    source={require('../../assets/image/sideArrowGrey.svg')}
                />
                </View>
            </View>

        </ScrollView>

            <View style={{position:'fixed', bottom:0}}>
                <Image
                style={styles.bottomBar}
                source={require('../../assets/image/more_Navigation.png')}
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
        menuWrapper:{
            flex:1, 
            minHeight:70,
            flexDirection:'row', 
            justifyContent: 'space-between', 
            alignContent:'stretch', 
            marginTop:20,
            backgroundColor:'#f4f4f4',
            borderRadius:10,
            width:280,
        },
        menuImg:{
            height:30,
            width:30,
            left:8,
            top:8
        },
        menuTxt:{
            paddingTop:23,
            fontSize:14,
            width:200
        },
        menuBar:{
            flex:1,
            top:2,
            right:20, 
            textAlign: 'left',
        },
        menuWrapper1:{
            flex:1, 
            minHeight:70,
            flexDirection:'row', 
            justifyContent: 'space-between', 
            alignContent:'stretch', 
            marginTop:50,
            backgroundColor:'#f4f4f4',
            borderRadius:10,
            width:280,
        },
        sideArrow:{
            top:20,
            left:75,
            width:30,
            height:30,
        },
        notifNum:{
            width:17,
            height:17,
            bottom:15,
            left:165,
        }
    });

export default MorePg;