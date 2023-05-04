import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ResetPwd = () => {
const navigation = useNavigation();
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>
            Reset Password
        </Text>
        <Text style={styles.subHeading}>
            Please enter your email to receive a link to create a new password via email
        </Text>
        <View style={styles.txtInput}>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="Enter Email"
            />
        </View>
        <TouchableOpacity style={styles.btnActive}
        onPress={() => {navigation.navigate("Enter OTP")}}    
        >
            <Text style={{color:'white'}}>
                Send
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
      padding:15,
      paddingLeft:25,
      paddingRight:25
    },
    heading:{
        fontSize:30,
        fontWeight:600,
        marginBottom:10,
        color:'#4A4B4D',
        marginTop:10
    },
    subHeading:{
        fontSize:14,
        marginBottom:10,
        color:'#4A4B4D',
        width:'80%',
        textAlign:'center',
    },
    txtInput:{
        backgroundColor:'#f2f2f2',
        width:'100%',
        height:50,
        borderRadius:30,
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
      
});

export default ResetPwd;