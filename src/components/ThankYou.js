import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';

const ThankYou = () => {
    return (
      <View style={styles.container}>
            <Image
                style={styles.thank}
                source={require('../../assets/image/thank.png')}
            />
            
            <Text style={{fontSize:20, fontWeight:700,marginTop:20}}>Thank You!</Text>
            <Text style={{fontSize:17, fontWeight:500,marginTop:20}}>For Your Order</Text>
            <Text style={{fontSize:14,marginTop:20,textAlign:'center'}}>Your order is now being processed. We will let you know as the order is picked from the outlet.</Text>
            <View style={styles.btnActive}>
                <Text style={{color:'white'}}>
                    Track My Order
                </Text>
            </View>
            <Text style={{fontSize:14,marginTop:20,textAlign:'center',fontWeight:700}}>
                Back to Home
            </Text>

            
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      width:'100%',
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      padding:15,
      paddingLeft:25,
      paddingRight:25
    },
    thank:{
        width:200,
        height:250,
        marginTop:50
    },
    btnActive:{
        backgroundColor:'orange',
        width:'100%',
        textAlign:'center',
        justifyContent:'center',
        height:50,
        borderRadius:30,
        marginTop:25
      },
});

export default ThankYou;