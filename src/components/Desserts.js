import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView,ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Desserts = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>

        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <View style={styles.searchBar}>
            <Image
                style={styles.searchLogo}
                source={require('../../assets/image/find.svg')}
            />
            </View>

            <ImageBackground source={require('../../assets/image/dessert1.png')} style={{width: '100%', height: '100%'}}>
                <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'left', padding:15,bottom:0}}>
                    <Text style={{color:'white', fontWeight:500, width:200}}>French Apple Pie</Text>
                    <Image
                    style={styles.resCardDesc}
                    source={require('../../assets/image/starNdDesc.svg')}
                    />
                </View>
            </ImageBackground>

            <ImageBackground source={require('../../assets/image/dessert2.png')} style={{width: '100%', height: '100%', marginTop:5}}>
                <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'left', padding:15,bottom:0}}>
                    <Text style={{color:'white', fontWeight:500, width:200}}>Dark Choclate Cake</Text>
                    <Image
                    style={styles.resCardDesc}
                    source={require('../../assets/image/starNdDesc.svg')}
                    />
                </View>
            </ImageBackground>

            <ImageBackground source={require('../../assets/image/dessert3.png')} style={{width: '100%', height: '100%', marginTop:5}}>
                <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'left', padding:15,bottom:0}}>
                    <Text style={{color:'white', fontWeight:500, width:200}}>Street Shake</Text>
                    <Image
                    style={styles.resCardDesc}
                    source={require('../../assets/image/starNdDesc.svg')}
                    />
                </View>
            </ImageBackground>

            <ImageBackground source={require('../../assets/image/dessert4.png')} style={{width: '100%', height: '100%', marginTop:5}}>
                <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'left', padding:15,bottom:0}}>
                    <Text style={{color:'white', fontWeight:500, width:200}}>Fudgy Chevy Brownies</Text>
                    <Image
                    style={styles.resCardDesc}
                    source={require('../../assets/image/starNdDesc.svg')}
                    />
                </View>
            </ImageBackground>

            <ImageBackground source={require('../../assets/image/dessert3.png')} style={{width: '100%', height: '100%', marginTop:5}}>
                <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'left', padding:15,bottom:0}}>
                    <Text style={{color:'white', fontWeight:500, width:200}}>Street Shake</Text>
                    <Image
                    style={styles.resCardDesc}
                    source={require('../../assets/image/starNdDesc.svg')}
                    />
                </View>
            </ImageBackground>

            <ImageBackground source={require('../../assets/image/dessert4.png')} style={{width: '100%', height: '100%', marginTop:5}}>
                <View style={{position: 'absolute', justifyContent: 'center', alignItems: 'left', padding:15,bottom:0}}>
                    <Text style={{color:'white', fontWeight:500, width:200}}>Fudgy Chevy Brownies</Text>
                    <Image
                    style={styles.resCardDesc}
                    source={require('../../assets/image/starNdDesc.svg')}
                    />
                </View>
            </ImageBackground>

            <ImageBackground style={{width: '100%', height: '100%'}}>
               
            </ImageBackground>

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
                source={require('../../assets/image/MenuNavigation.png')}
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
        searchBar:{
            backgroundColor:"#e8e8e8",
            height:35,
            width:'100%',
            borderRadius: 30,
            marginTop:20,
            marginBottom:40,
        },
        searchLogo:{
            width:17,
            height:17,
            top:8,
            left:14
        },
        resCardDesc:{
            width:'100%',
            height:14
        }
    });
    

export default Desserts;