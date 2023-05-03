import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';

const MenuPg = () => {
    return (
        <View style={styles.container}>

        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <View style={{marginTop:20,flex:1/20, flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <Text style={{fontSize:17}}>
                    Menu
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

            <Image
                style={styles.bgShape}
                source={require('../../assets/image/SideBarOrange.svg')}
            />

            <View style={styles.menuWrapper}>
                <View style={{flex:1}}>
                <Image
                style={styles.menuImg}
                source={require('../../assets/image/menu1.png')}
            />
                </View>
                <View style={styles.menuBar}>  
                    <Text style={styles.menuTxt}>Food</Text>
                    <Text style={styles.menuSubTxt}>120 items</Text>
                </View>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideArrow}
                    source={require('../../assets/image/sideArrow.svg')}
                />
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <View style={{flex:1}}>
                <Image
                style={styles.menuImg}
                source={require('../../assets/image/menu2.png')}
            />
                </View>
                <View style={styles.menuBar}>  
                    <Text style={styles.menuTxt}>Beverages</Text>
                    <Text style={styles.menuSubTxt}>220 items</Text>
                </View>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideArrow}
                    source={require('../../assets/image/sideArrow.svg')}
                />
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <View style={{flex:1}}>
                <Image
                style={styles.menuImg}
                source={require('../../assets/image/menu3.png')}
            />
                </View>
                <View style={styles.menuBar}>  
                    <Text style={styles.menuTxt}>Desserts</Text>
                    <Text style={styles.menuSubTxt}>155 items</Text>
                </View>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideArrow}
                    source={require('../../assets/image/sideArrow.svg')}
                />
                </View>
            </View>

            <View style={styles.menuWrapper}>
                <View style={{flex:1}}>
                <Image
                style={styles.menuImg4}
                source={require('../../assets/image/menu4.png')}
            />
                </View>
                <View style={styles.menuBar}>  
                    <Text style={styles.menuTxt}>Promotions</Text>
                    <Text style={styles.menuSubTxt}>25 items</Text>
                </View>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideArrow}
                    source={require('../../assets/image/sideArrow.svg')}
                />
                </View>
            </View> 

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
        menuWrapper:{
            flex:1, 
            minHeight:70,
            flexDirection:'row', 
            justifyContent: 'space-between', 
            alignContent:'stretch', 
            marginTop:20,
            backgroundColor:'#f6f6f6',
            borderBottomLeftRadius: 70,
            borderBottomRightRadius: 15,
            borderTopLeftRadius: 70,
            borderTopRightRadius: 15,
            width:260,
            left:20,
            shadowColor: '#171717',
            shadowOffset: {width: 2, height: 4},
            shadowOpacity: 0.2,
            shadowRadius: 3,
        },
        menuImg:{
            height:70,
            width:70,
            position:'absolute',
            right:50,
            top:5
        },
        menuImg4:{ 
            height:80,
            width:75,
            position:'absolute',
            right:50
        },
        menuTxt:{
            paddingTop:15,
            fontSize:18,
            fontWeight:700,
            width:200
        },
        menuSubTxt:{
            fontSize:12,
            color:'grey'
        },
        menuBar:{
            flex:1,
            top:2,
            right:40, 
            textAlign: 'left',
        },
        sideArrow:{
            top:13,
            left:60,
            width:50,
            height:50,
        },
        bgShape:{
            position:'absolute',
            top:140,
            height:400,
            width:150,
            right:240,
            zIndex:'-1',
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 40,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 40,
        }

    });
    
export default MenuPg;