import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Button, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainPage = ({}) => {
  const navigation = useNavigation();
  return (
  <ScrollView>
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
          FOOD DELIVERY 
        </Text>

        <Text style={styles.textSubHead}>
          Discover the best food over from 1,000 resturants and fast delivery to your doorstep
        </Text>
        
        <TouchableOpacity 
          style={styles.btnActive} 
          onPress={()=> {
            navigation.navigate("Login")
          }
        
        }>
        <Text style={{color:'white'}}>
          Login
        </Text>
        </TouchableOpacity> 

        <TouchableOpacity 
          style={styles.btnPassive} 
          onPress={()=> {
            navigation.navigate("Signup")
          }
          }>
        <Text style={{color:'orange'}}>
          Create an Account
        </Text>
        </TouchableOpacity>
        {/* ---- */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '',
    alignItems:'center',
    padding:15,
    paddingLeft:25,
    paddingRight:25,
    marginTop:50
  },
  mainImage: {
    width:'33.3%',
    height: '16%',
    aspectRatio:1,
  },
  mainImageFill:{
    width:'70%',
    height:210,
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
    marginBottom:40
  },
  textSubHead1:{
    width:300,
    letterSpacing:3,
    color:'grey',
    fontSize:12,
    textAlign:'center',
    marginBottom:40
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
    backgroundColor:'#f2f2f2',
    width:'100%',
    textAlign:'center',
    justifyContent:'center',
    height:44,
    borderRadius:30,
    marginBottom:45
  }
});

export default MainPage;