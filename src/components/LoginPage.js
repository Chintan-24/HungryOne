import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

const LoginPage = () => {

    const navigation = useNavigation();

    return (
        <ScrollView>

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
            <TouchableOpacity style={styles.btnActive}
                  onPress={() => {navigation.navigate("Welcome1")}}  
            >
                <Text style={{color:'white'}}>
                    Login
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.subHeading}
            onPress={()=> {
            navigation.navigate("Reset Password")
          }
          }
             >
                <Text style={styles.spacing}>
                    Forgot your password?
                </Text>
            </TouchableOpacity>
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
            <TouchableOpacity 
            onPress={()=> {
            navigation.navigate("Signup")
          }
          }>
                <Text style={styles.signUpTxt}>
                    Don't have an Account? &nbsp;
                    <Text style={{color:'orange', fontWeight:700}}>
                        Sign Up
                    </Text>
                </Text>
            </TouchableOpacity>
        </View>
    </ScrollView>    
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems:'center',
        padding:15,
        paddingLeft:25,
        paddingRight:25,

    },
    heading:{
        fontWeight:600,
        fontSize:30,
        marginBottom:10,
        color:'#4A4B4D',
        marginTop:5
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
        margin:10
      },
      signUpTxt:{
        width:'100%',
        marginBottom:60
      }
});

export default LoginPage;