import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';

const AboutUs = () => {
    return (
        <View style={styles.container}>
        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <View style={{marginTop:20,flex:1/20, flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <Text style={{fontSize:17}}>
                    About Us
                </Text>
                <Image
                    style={styles.cartIcon}
                    source={require('../../assets/image/shopping-cart.svg')}
                />
            </View>
            
            <View style={{marginTop:65, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                <View>
                <Image
                    style={styles.dot}
                    source={require('../../assets/image/dot1.svg')}
                />
                </View>
                <View style={{marginLeft:25}}>
                    <Text style={{fontSize:14, width:265}}>Lorem ipsum dolor sit asit amet adipiscing elit. teger tInincidunt urna, atneque, laoreet accumsan rutrum vitae, vulputate non velit. Aliquam faucibus pulvinar urna, dapibus pellentesque adipiscing elit. Integer consectetur tincidunt urna, eu consequat orci viverra at. Aenean neque lorem, laoreet accumsan vitae, vulputate non velit. Aliquam faucibus.</Text>
                </View>
            </View>
          

            <View style={{marginTop:45, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                <View>
                <Image
                    style={styles.dot}
                    source={require('../../assets/image/dot1.svg')}
                />
                </View>
                <View style={{marginLeft:25}}>
                <Text style={{fontSize:14, width:265}}>Lorem ipsum dolor sit asit amet adipiscing elit. teger tInincidunt urna, atneque, laoreet accumsan rutrum vitae, vulputate non velit. Aliquam faucibus pulvinar urna, dapibus pellentesque adipiscing elit. Integer consectetur tincidunt urna, eu consequat orci viverra at. Aenean neque lorem, laoreet accumsan vitae, vulputate non velit. Aliquam faucibus.</Text>
                </View>
            </View>
           

            <View style={{marginTop:40, flex:1, flexDirection:'row',alignItems:'baseline'}}>
                <View>
                <Image
                    style={styles.dot}
                    source={require('../../assets/image/dot1.svg')}
                />
                </View>
                <View style={{marginLeft:25}}>
                <Text style={{fontSize:14, width:265}}>Lorem ipsum dolor sit asit amet adipiscing elit. teger tInincidunt urna, atneque, laoreet accumsan rutrum vitae, vulputate non velit. Aliquam faucibus pulvinar urnan.</Text>
                </View>
            </View>
           
        </ScrollView>

            <View style={{position:'fixed', bottom:0}}>
                <Image
                style={styles.bottomBar}
                source={require('../../assets/image/grey_Navigation.png')}
                />
            </View>

        </View>
        );
    }
    
    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#fff',
            //   alignItems:'center',
            width:'100%',
        },
        bottomBar:{
            top:1,
            // padding:0,
            // margin:0,
            width:400,
            right:20,
            height:110,
            zIndex:111,
        },
        cartIcon:{
            width:20,
            height:20,
        },
        dot:{
            width:10,
            height:10,
        },
    });
    
export default AboutUs;