import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView,ImageBackground } from 'react-native';

const Desserts = () => {
    return (
        <View style={styles.container}>

        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <View style={{marginTop:20,flex:1/20, flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <Text style={{fontSize:17}}>
                    Desserts
                </Text>
                <Image
                    style={styles.cartIcon}
                    source={require('../../assets/image/shopping-cart.svg')}
                />
            </View>
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

            <ImageBackground style={{width: '100%', height: '100%'}}>
               
            </ImageBackground>

        </ScrollView>

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
        searchBar:{
            backgroundColor:"#e8e8e8",
            height:35,
            width:'100%',
            borderRadius: 30,
            marginTop:40,
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