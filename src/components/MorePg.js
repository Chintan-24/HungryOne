import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MorePg = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <View style={styles.menuWrapper1}>
                <View style={{flex:1}}>
                <View style={{backgroundColor:'#e5e5e5',borderRadius:'50%',width:50,height:50, top:10,left:10}}>

                <Image
                style={styles.menuImg}
                source={require('../../assets/image/more1.png')}
            />
                </View>
                </View>
                <TouchableOpacity style={styles.menuBar} onPress={() => {navigation.navigate("Payment Details")}}>  
                    <Text style={styles.menuTxt}>Payment Details</Text>
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.menuBar}  onPress={() => {navigation.navigate("Orders")}}>  
                    <Text style={styles.menuTxt}>My Orders</Text>
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.menuBar} 
                onPress={() => {navigation.navigate("Notifications")}}    

                >  
                    <Text style={styles.menuTxt}>Notifications</Text>
                    <Image
                        style={styles.notifNum}
                        source={require('../../assets/image/notifNum.svg')}
                    />
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.menuBar}  onPress={() => {navigation.navigate("Inbox")}}>  
                    <Text style={styles.menuTxt}>Inbox</Text>
                </TouchableOpacity>
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
                <TouchableOpacity style={styles.menuBar}  onPress={() => {navigation.navigate("About Us")}}>  
                    <Text style={styles.menuTxt}>About Us</Text>
                </TouchableOpacity>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideArrow}
                    source={require('../../assets/image/sideArrowGrey.svg')}
                />
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
                source={require('../../assets/image/more_Navigation.png')}
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
            marginTop:10,
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