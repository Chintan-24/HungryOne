import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Otppage = () => {
const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
            We have sent an OTP to your Mobile
        </Text>
        <Text style={styles.subHeading}>
            Please check your mobile number 089******24 continue to reset your password
        </Text>

        <View style={styles.flex}>
        <View style={styles.txtInput}>
            <TextInput
                style={styles.pwdHide}
                placeholder="*"
            />
        </View>
        <View style={styles.txtInput}>
            <TextInput
                style={styles.pwdHide}
                placeholder="*"
            />
        </View>
        <View style={styles.txtInput}>
            <TextInput
                style={styles.pwdHide}
                placeholder="*"
            />
        </View>
        <View style={styles.txtInput}>
            <TextInput
                style={styles.pwdHide}
                placeholder="*"
            />
        </View>
        </View>
        <TouchableOpacity style={styles.btnActive}
            onPress={() => {navigation.navigate("New Password")}}    
        >
            <Text style={{color:'white'}}>
                Next
            </Text>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {navigation.navigate("Reset Password")}}    
        >
        <Text style={styles.footTxt}>
            Didn't Receive? &nbsp;
                <Text style={{color:'orange', fontWeight:700}}>
                    Click Here
                </Text>
            </Text>
        </TouchableOpacity>
      </View>
    );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#f8f8f8',
      alignItems:'center',
      width:'100%',
      padding:15,
      paddingLeft:25,
      paddingRight:25
    },
    heading:{
        fontSize:30,
        fontWeight:600,
        marginBottom:15,
        color:'#4A4B4D',
        marginTop:10,
        textAlign:'center',
    },
    subHeading:{
        fontSize:14,
        marginBottom:10,
        color:'#4A4B4D',
        // width:'100%',
        textAlign:'center',
    },
    txtInput:{
        backgroundColor:'#f2f2f2',
        width:'16%',
        height:50,
        borderRadius:15,
        justifyContent:'center',
        paddingLeft:20,
        marginTop:25
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
      pwdHide:{
        color:'#BDBEBE',
        fontWeight:700,
        fontSize:25
      },
      flex:{
        maxWidth:'100%',
        flexDirection:'row',
        justifyContent:'space-evenly'
      },
      footTxt:{
        width:'100%',
        marginTop:25
      }
});


export default Otppage;