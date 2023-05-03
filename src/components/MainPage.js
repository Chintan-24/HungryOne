import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button } from 'react-native-web';

const MainPage = () => {
  return (
<View style={styles.container}>
      <Image
          style={styles.mainImageFill}
          source={require('../../assets/image/foodheaderTop.svg')}
      />
      <Image
          style={styles.mainImage}
          source={require('../../assets/image/logoFace.svg')}
      />

      <Text style={styles.textHead}>
          <Text style={{color:'orange'}}>
            Hungry
          </Text>
          <Text style={{color:'black'}}>
            One
          </Text>
      </Text>
      
      <Text style={styles.textSubHead1}>
        FOOD DELIEVERY
      </Text>

      <Text style={styles.textSubHead}>
        Discover the best food over from 1,000 resturants and fast delivery to your doorstep
      </Text>

      <View style={styles.btnActive}>
      <Text style={{color:'white'}}>
        Login
      </Text>
      </View>

      <View style={styles.btnPassive}>
      <Text style={{color:'orange'}}>
        Create an Account
      </Text>
      </View>
      {/* ---- */}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center',
    padding:15,
    paddingLeft:25,
    paddingRight:25
  },
  mainImage: {
    width:'35%',
    height: '15.4%',
    aspectRatio:1,
  },
  mainImageFill:{
    width:'85%',
    height:250,
    aspectRatio:1,
    marginBottom:10
  },
  textHead:{
    margin: 10,
    marginBottom:0,
    fontSize:30,
    fontWeight:700
  },
  textSubHead:{
    width:300,
    textAlign:'center',
    marginBottom:50
  },
  textSubHead1:{
    width:300,
    letterSpacing:3,
    color:'grey',
    fontSize:12,
    textAlign:'center',
    marginBottom:50
  },
  btnActive:{
    backgroundColor:'orange',
    width:'100%',
    textAlign:'center',
    justifyContent:'center',
    height:45,
    borderRadius:30,
  },
  btnPassive:{
    marginTop:10,
    borderWidth:1,
    borderColor:'orange',
    backgroundColor:'white',
    width:'100%',
    textAlign:'center',
    justifyContent:'center',
    height:44,
    borderRadius:30,
  }
});

export default MainPage;