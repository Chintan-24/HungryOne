import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const ItemPg = () => {
    return (
    <View style={styles.container}>
    <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
        <View>
          <Image
            style={styles.HeaderImg}
            source={require('../../assets/image/pizza1.jpg')}
            />
            <Image
                style={styles.cartIcon}
                source={require('../../assets/image/shopping-cartWhite.svg')}
            />
        </View>
        <View style={styles.HeartShape}>
            <Image
                style={styles.heartFilled}
                source={require('../../assets/image/heartFilled.svg')}
            />
            <Image
                style={styles.heartUnfilled}
                source={require('../../assets/image/heartUnfilled.svg')}
            />
        </View>
        <View style={styles.itemCard}>
            <Text style={{fontSize:20}}>
              Margherita Pizza
            </Text>
            <View style={{flex:1, flexDirection:'row'}}>
            <Image
              style={styles.rating}
              source={require('../../assets/image/starFilled.svg')}
            />
            <Image
              style={styles.rating}
              source={require('../../assets/image/starFilled.svg')}
            />
            <Image
              style={styles.rating}
              source={require('../../assets/image/starFilled.svg')}
            />
            <Image
              style={styles.rating}
              source={require('../../assets/image/starFilled.svg')}
            />
            <Image
              style={styles.rating}
              source={require('../../assets/image/starUnfilled.svg')}
            />
            </View>
              <View style={{flex:1, flexDirection:'row',bottom:10}}> 
                <Text style={{color:'orange',fontSize:11}}>4 Star Rating</Text>
                <View style={{textAlign: 'right', left:160}}>
                  <Text style={{fontSize:30, fontWeight:700}}>₹199</Text>
                  <Text>/ per Portion</Text>
                </View>
            </View>
            <Text style={styles.smallHead}>Description</Text>
            <Text style={styles.smallSubHead}>
               Porro quisquam est qui dolorem ipsum quialasterleo weram sit consectetur apisci velitenar como estas boher
            </Text>
            <View>
              <Text style={styles.smallHead1}>Customize your Order</Text>
              <DropDownPicker 
                items={[
                    {label: 'Item 1', value: 'item1'},
                    {label: 'Item 2', value: 'item2'},
                ]}
                placeholder="- Select the size of portion -"
                defaultIndex={0}
                containerStyle={{width: '100%', height: 70}}
                onChangeItem={item => console.log(item.label, item.value)}
                labelStyle={{fontSize: 8, color: '#000',}}
                dropDownStyle={{backgroundColor:'#d3d3d3'}}
                itemStyle={{backgroundColor:'#d3d3d3'}}
                placeholderStyle={{fontSize:12}}
                style={{backgroundColor:'#e2e2e2', borderRadius:0,borderColor:'#fff',marginTop:10}}
              />
              <DropDownPicker 
                items={[
                    {label: 'Item 1', value: 'item1'},
                    {label: 'Item 2', value: 'item2'},
                ]}
                placeholder="- Select the ingredients -"
                defaultIndex={0}
                containerStyle={{width: '100%'}}
                onChangeItem={item => console.log(item.label, item.value)}
                labelStyle={{fontSize: 8, color: '#000',}}
                dropDownStyle={{backgroundColor:'#d3d3d3'}}
                itemStyle={{backgroundColor:'#d3d3d3'}}
                placeholderStyle={{fontSize:12}}
                style={{backgroundColor:'#e2e2e2', borderRadius:0,borderColor:'#fff'}}
              />
            </View>
            <View>
              <Text style={styles.smallHead1}>Number of Portions
              <Text style={styles.plusMinus1}>-</Text>
              <Text style={styles.numberPortion}>2</Text>
              <Text style={styles.plusMinus}>+</Text>
              </Text>
            </View>
            <Image
                style={styles.bgShape}
                source={require('../../assets/image/SideBarOrange.svg')}
            />
            <View style={styles.menuWrapper}>
                <View style={{flex:1}}>
                </View>
                <View style={styles.menuBar}>  
                    <Text style={styles.menuSubTxt}>Total Price</Text>
                    <Text style={styles.menuTxt}>₹398</Text>
                    <View style={{right:15}}>
                      <Text style={styles.btnActive}>
                      <Image
                        style={{height:12, width:12}}
                        source={require('../../assets/image/shopping-cartWhite.svg')}
                      />
                        &nbsp;&nbsp; Add to Cart
                      </Text>
                    </View>
                </View>
                <View style={{flex:1}}>
                <Image
                    style={styles.sideCart}
                    source={require('../../assets/image/sideArrow.svg')}
                />
                </View>
            </View>


        </View>
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
        //   alignItems:'center',
        width:'100%',
    },
    bottomBar:{
      top:1,
      // padding:0,
      // margin:0,
      width:410,
      right:27,
      height:110,
      zIndex:111,
  },
    cartIcon:{
        width:20,
        height:20,
        bottom:190,
        left:280
    },
    HeaderImg:{
      transform: [{ rotate: '180deg'}],
      width:'130%',
      height:200,
      right:30,
      bottom:20
    },
    itemCard:{
      // backgroundColor:'#c3c3c3',
      bottom:20,
      padding:0,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
    },
    rating:{
      width:15,
      height:15,
      marginRight:5,
      marginTop:5
    },
    smallHead:{
      fontWeight:700,
      marginBottom:5,
      marginTop:15
    },
    smallSubHead:{
      marginTop:5,
      color:'#b2b2b2',
      fontSize:12
    },
    smallHead1:{
      fontWeight:700,
      marginBottom:5,
      marginTop:35
    },

    plusMinus:{
      fontSize:14,
      backgroundColor:'orange',
      margin:5,
      paddingVertical:5,
      paddingHorizontal:18,
      borderRadius:35,
      color:'white'
      
    },

    plusMinus1:{
      fontSize:14,
      backgroundColor:'orange',
      margin:5,
      paddingVertical:5,
      paddingHorizontal:18,
      borderRadius:35,
      color:'white',
      marginLeft: 25
    },
    numberPortion:{
      
      fontSize:14,
      paddingVertical:3,
      paddingHorizontal:16,
      borderRadius:35,
      borderColor:'orange',
      borderWidth:2,
      color:'orange'
    },
    menuWrapper:{
      flex:1, 
      minHeight:110,
      flexDirection:'row', 
      justifyContent: 'space-between', 
      alignContent:'stretch', 
      marginTop:50,
      marginBottom:80,
      backgroundColor:'#f6f6f6',
      borderBottomLeftRadius: 40,
      borderBottomRightRadius: 15,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 15,
      width:250,
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
    fontSize:18,
    fontWeight:700,
  },
  menuSubTxt:{
      paddingTop:15,
      fontSize:12,
      color:'grey'
  },
  menuBar:{
      flex:1,
      top:2,
      textAlign: 'center',
      width:'00'
  },
  sideCart:{
    top:30,
    left:60,
    width:50,
    height:50,
  },
  bgShape:{
      position:'absolute',
      top:445,
      height:160,
      width:150,
      right:240,
      zIndex:'-1',
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 40,
      borderTopLeftRadius: 0,
      borderTopRightRadius: 40,
  },
  btnActive:{
    backgroundColor:'orange',
    width:130,
    paddingTop:5,
    textAlign:'center',
    justifyContent:'center',
    height:30,
    borderRadius:30,
    color:'white',
  },
  HeartShape:{
    position:'absolute'
  },
  heartFilled:{
    height:60,
    width:60,
    top:150,
    left:250
  },
  heartUnfilled:{
    height:60,
    width:60,
    top:130,
    left:190
  }
});

export default ItemPg;