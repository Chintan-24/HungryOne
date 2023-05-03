import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';

const NewPwd = () => {
    return (
      <View style={styles.container}>
      <Text style={styles.heading}>
            New Password
        </Text>
        <Text style={styles.subHeading}>
            Please enter your email to receive a link to create a new password via email
        </Text>
        <View style={styles.txtInput}>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="New Password"
            />
        </View>
        <View style={styles.txtInput}>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="Confirm Password"
            />
        </View>
        <View style={styles.btnActive}>
            <Text style={{color:'white'}}>
                Next
            </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      width:'100%',
      padding:15,
      paddingLeft:25,
      paddingRight:25
    },
    heading:{
        fontSize:30,
        fontWeight:600,
        marginBottom:10,
        color:'#4A4B4D',
        marginTop:25
    },
    subHeading:{
        fontSize:14,
        marginBottom:10,
        color:'#4A4B4D',
        textAlign:'center',
        width:'80%'
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

export default NewPwd;