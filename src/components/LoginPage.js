import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';

const LoginPage = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>
                Login
            </Text>
            <Text style={styles.subHeading}>
                Add your details to login
            </Text>
            <View style={styles.txtInput}>
                <TextInput
                    style={{color:'#BDBEBE'}}
                    placeholder="Your Email"
                />
            </View>
            <View style={styles.txtInput}>
                <TextInput 
                    style={{color:'#BDBEBE'}} 
                    placeholder="Password"
                />
            </View>
            <View style={styles.btnActive}>
                <Text style={{color:'white'}}>
                    Login
                </Text>
            </View>
            <View style={styles.subHeading}>
                <Text style={styles.spacing}>
                    Forgot your password?
                </Text>
            </View>
            <View style={styles.subHeading}>
                <Text style={styles.spacing}>
                    or Login With
                </Text>
            </View>
            
            <Image
                style={styles.loginBar}
                source={require('../../assets/image/facebook_login.svg')}
            />
                <Image
                style={styles.loginBar}
                source={require('../../assets/image/google_login.svg')}
            />
            <View>
                <Text style={styles.signUpTxt}>
                    Don't have an Account? &nbsp;
                    <Text style={{color:'orange', fontWeight:700}}>
                        Sign Up
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
        fontWeight:600,
        fontSize:30,
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
        height:52,
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
      }
});

export default LoginPage;