import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image,TextInput,ScrollView } from 'react-native';

const ProfilePg = () => {
    return (
        <View style={styles.container}>
        <ScrollView  style={{padding:15,paddingLeft:25,paddingRight:25}}>
            <View style={{marginTop:20,flex:1/20, flexDirection:'row',justifyContent:'space-between',width:'100%'}}>
                <Text style={{fontSize:17}}>
                    Profile
                </Text>
                <Image
                    style={styles.cartIcon}
                    source={require('../../assets/image/shopping-cart.svg')}
                />
            </View>
            <View style={{flex:1,alignContent:'center',justifyContent:'center',alignItems:'center',marginTop:20}}>
            <Image
                style={styles.profilePic}
                source={require('../../assets/image/dp.jpg')}
            />
            <Image
                style={styles.editPic}
                source={require('../../assets/image/Edit_profile.svg')}
            />
            
            <Text style={{fontSize:16, fontWeight:600,marginTop:10}}>
                Hi There CB!
            </Text>
            <Text style={{fontSize:12,color:'grey',marginTop:10}}>
                Sign Out
            </Text>
            </View>
            <View style={styles.txtInput}>
            <Text style={{fontSize:12}}>Name</Text>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="Chintan Bhalodiya"
            />
            </View>

            <View style={styles.txtInput}>
            <Text style={{fontSize:12}}>Email</Text>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="chintanbhalodiya24@gmail.com"
            />
            </View>

            <View style={styles.txtInput}>
            <Text style={{fontSize:12}}>Mobile No.</Text>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="+91 23435 67980"
            />
            </View>

            <View style={styles.txtInput}>
            <Text style={{fontSize:12}}>Address</Text>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="A-525, atlantis-x, Vadodara"
            />
            </View>

            <View style={styles.txtInput}>
            <Text style={{fontSize:12}}>Password</Text>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="**********"
            />
            </View>

            <View style={styles.txtInput}>
            <Text style={{fontSize:12}}>Confirm Password</Text>
            <TextInput
                style={{color:'#BDBEBE'}}
                placeholder="**********"
            />
            </View>

            <View style={styles.btnActive}>
            <Text style={{color:'white'}}>
                Save
            </Text>
            </View>

           
            
        </ScrollView>
            <View style={{position:'fixed', bottom:0}}>
                <Image
                style={styles.bottomBar}
                source={require('../../assets/image/profile_Navigation.png')}
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
        profilePic:{
            height:100,
            width:100,
            borderRadius:'50%',
            marginTop:20
        },
        editPic:{
            height:13,
            width:'25%',
            marginTop:20,
        },
        txtInput:{
            backgroundColor:'#f2f2f2',
            width:'100%',
            height:50,
            borderRadius:30,
            justifyContent:'center',
            paddingLeft:25,
            marginTop:25
        },
        btnActive:{
            backgroundColor:'orange',
            width:'100%',
            textAlign:'center',
            justifyContent:'center',
            height:50,
            borderRadius:30,
            marginTop:25,
            marginBottom:90
          },
    });

export default ProfilePg;