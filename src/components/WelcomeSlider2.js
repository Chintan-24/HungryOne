import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const WelcomeSlider2 = () => {
    const navigation = useNavigation();

    return (
      <View style={styles.container}>
            <Image
                style={styles.mainImageFill}
                source={require('../../assets/image/Delivery.svg')}
            />
            <View style={styles.scroll}>
                <Image
                    style={styles.scrollDot}
                    source={require('../../assets/image/dot2.svg')}
                />
                <Image
                    style={styles.scrollDot}
                    source={require('../../assets/image/dot1.svg')}
                />
                <Image
                    style={styles.scrollDot}
                    source={require('../../assets/image/dot2.svg')}
                />
            </View>
            <View style={styles.clearSpace}>
                <Text style={styles.heading}>
                    Fast Delivery
                </Text>
                <Text style={styles.textSubHead}>
                    Fast Food delivery to your home, office wherever you are
                </Text>
                <TouchableOpacity style={styles.btnActive}
                  onPress={() => {navigation.navigate("Welcome3")}}>
                    <Text style={{color:'white'}}>
                        Next
                    </Text>
                </TouchableOpacity>
            </View>
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
    mainImageFill:{
        width:'80%',
        height:310,
        aspectRatio:1,
        marginBottom:15,
        marginTop:40,
    },
    textSubHead:{
        width:300,
        textAlign:'center',
        marginBottom:60,
        marginTop:35,

      },
      btnActive:{
        backgroundColor:'orange',
        width:'100%',
        textAlign:'center',
        justifyContent:'center',
        height:45,
        borderRadius:30,
      },
      heading:{
        fontWeight:600,
        fontSize:30,
        marginBottom:10,
        color:'#4A4B4D',
        marginTop:40,
        textAlign:'center',
    },
    scroll:{
        flex:1/6,
        flexDirection:'row',
    },
    scrollDot:{
        marginLeft:5,
        height:7,
        aspectRatio:1,
    },
    // clearSpace:{
    //     top:0
    // }
});

export default WelcomeSlider2;