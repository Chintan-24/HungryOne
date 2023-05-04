import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native';

const SignupPage = () => {
    const navigation = useNavigation();
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
        <TouchableOpacity 
            style={styles.btnActive} 
            onPress={() => {navigation.navigate("Welcome1")}}
        >
            <Text style={{color:'white'}}>
                Sign Up
            </Text>
        </TouchableOpacity>

        <TouchableOpacity 
            onPress={()=> {
            navigation.navigate("Login")
          }
          }>
        <Text style={styles.signUpTxt}>
            Already have an Account? &nbsp;
                <Text 
                    style={{color:'orange', fontWeight:700}} 
                    onPress={() => {navigation.navigate("Login")}}
                >
                    Login
                </Text>
            </Text>
        </TouchableOpacity>
    </View>  
    );
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flex: 1,
        backgroundColor: '#f8f8f8',
        alignItems:'center',
        padding:10,
        paddingLeft:25,
        paddingRight:25
    },
    heading:{
        fontSize:30,
        fontWeight:600,
        marginBottom:10,
        color:'#4A4B4D',
        marginTop:0
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
        height:45,
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
        height:45,
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