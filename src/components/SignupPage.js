import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';

const SignupPage = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.heading}>
            Sign Up
        </Text>
        <Text style={styles.subHeading}>
            Add your details to sign up
        </Text>
        <View style={styles.txtInput}>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="Name"
            />
        </View>
        <View style={styles.txtInput}>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="Email"
            />
        </View>
        <View style={styles.txtInput}>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="Mobile No"
            />
        </View>
        <View style={styles.txtInput}>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="Address"
            />
        </View>
        <View style={styles.txtInput}>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="Password"
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
                Sign Up
            </Text>
        </View>
        <View>
        <Text style={styles.signUpTxt}>
            Already have an Account? &nbsp;
                <Text style={{color:'orange', fontWeight:700}}>
                    Login
                </Text>
            </Text>
        </View>
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
    },
    loginBar:{
        width:'99%',
        height:56,
        marginBottom:25
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
      spacing:{
        margin:25
      },
      signUpTxt:{
        width:'100%',
        marginTop:25
      }
});

export default SignupPage;