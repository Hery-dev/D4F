import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'

import {Picker} from '@react-native-picker/picker';

import NetInfo from '@react-native-community/netinfo';

import { 
    StyleSheet,
     Text, 
     View, 
     Image, 
     TouchableWithoutFeedback, 
     StatusBar, 
     TextInput, 
     SafeAreaView, 
     Keyboard, 
     TouchableOpacity, 
     KeyboardAvoidingView,
     ImageBackground, 
     Dimensions,
     Button,
     Alert,
     ScrollView,
     Modal,
     Pressable,
     FlatList,
     ActivityIndicator,
    } from 'react-native';

import ConnectUser from '../Service/ConnectUser';

export default class Accueil extends Component{

    constructor(props){
        super(props);
        this.state={
            modalVisible:false,
            text:"",
            text1:"",

        }
    }
    render(){
        const { navigation } = this.props;
        return(
            <View>

                {/* DEBUT MODAL */}
                <Modal
                style={{
                    height:Dimensions.get("window").height,
                }}
                animationType="slide"
                visible={this.state.modalVisible}>
                    <View>
                    <ScrollView style={{
                        backgroundColor:"black",
                    }}>
                        <View style={{
                            width:50,
                            marginTop:10,
                            marginLeft:Dimensions.get("window").width/2-25, 
                    
                        }}>
                            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>this.setState({modalVisible:false})}>
                                <Image source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/homme.png'}} style={{
                                    width:50,
                                    height:50
                                }}></Image>
                            </TouchableOpacity>
                        </View>
                    
                        <View style={{
                            alignItems:'center'
                        }}>
                            <View style={{
                                borderBottomColor:'white',
                                borderBottomWidth:1,
                                alignItems:'center'
                            }}>
                                <Text style={{
                                    color:'white', 
                                    fontWeight:'bold', 
                                    fontSize:35,
                                    marginTop:20 
                                }}>
                                    SE CONNECTER
                                </Text>                        
                            </View>

                            <View style={{marginTop:10}}>
                                <Image
                                    source={{uri:'https://last-chance-dating.com/public/assets/image_mobile/icone-inscrit.png'}}
                                    style={{
                                        width:30,
                                        height:30
                                    }}>
                                </Image>
                            </View>

                            <View style={{
                                marginTop:50,
                            }}>
                                <Text style={{
                                    color : 'white',
                                    fontSize : 20
                                }}>
                                Nom d'utilisateur ou pseudo:
                                </Text>

                                <TextInput
                                    onChangeText={text => this.setState({text:text})}
                                    style={{
                                            width : 300,
                                            height : 40,
                                            borderWidth: 2,
                                            marginTop : 20,
                                            color : 'white',
                                            borderRadius: 10,
                                            borderColor : 'white',
                                            fontSize : 20,
                                            paddingHorizontal : 10
                                }}></TextInput>
                            </View>
                            <View style={{
                                marginTop:30,
                            }}>
                                <Text style={{
                                    color : 'white',
                                    fontSize : 20
                                }}>
                                    Mot de passe:
                                </Text>

                                <TextInput 
                                    onChangeText={text1=>this.setState({text1:text1})}
                                    secureTextEntry={true} style={{
                                    width : 300,
                                    height : 40,
                                    borderWidth: 2,
                                    marginTop : 20,
                                    color : 'white',
                                    borderRadius: 10,
                                    borderColor : 'white',
                                    fontSize : 20,
                                    paddingHorizontal : 10
                                }}></TextInput>
                            </View>

                            <View style={{
                                marginTop: 20,
                                borderBottomWidth : 1,
                                borderBottomColor : 'white',
                                alignItems:'center'
                            }}>
                                <TouchableOpacity 
                                onPress={()=>{
                                    //console.log("AAAA");
                                    var res = ConnectUser(this.state.text, this.state.text1);
                                    setTimeout(() => {
                                        if(res[0]["message"]=="OK"){
                                            /*console.log(res[0]["avatar_session"]);
                                            console.log(res[0]["vip"]);
                                            console.log(res[0]["list_tout_user"]);*/
                                            navigation.navigate("user", {
                                                avatar_session:res[0]["avatar_session"],
                                                vip:res[0]["vip"],
                                                list_tout_user:res[0]["list_tout_user"],
                                            });
                                        }
                                        else if(res[0]["message"]=="NON"){
                                            console.log("Tsy tafiditra");
                                        }
                                    }, 3000);
                                    
                                }}>
                                <Image source={{uri:'https://dating-4-free.com/public/assets/new_integration/Connectez2.png'}} style={{
                                    marginBottom : 10,
                                    width:170,
                                    height:45
                                }}></Image>
                            </TouchableOpacity>

                            <View style={{
                                marginTop: 20,
                                marginHorizontal: 20,
                                alignItems:'center'
                            }}>
                                <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                                <Image style={{
                                    width:Dimensions.get("window").width-40,
                                    height:42
                                }} source={{uri:'https://dating-4-free.com/public/assets/new_integration/2fb.png'}}></Image>
                                </TouchableOpacity>
                    
                            </View> 

                            <View style={{
                                marginTop: 20,
                                marginHorizontal: 20,
                                alignItems:'center'
                            }}>
                                <TouchableOpacity  onPress = {()=>Alert.alert("AAAAAAAAAA")}>
                                <Image style={{
                                    width:Dimensions.get("window").width-40,
                                    height:42,
                                    marginBottom:50
                                }} source={{uri:'https://dating-4-free.com/public/assets/new_integration/1Google.png'}}></Image>
                                </TouchableOpacity>
                            </View>

                        </View>
                            
                        
                        </View>
                    </ScrollView>
                    </View>
                </Modal>

            {/* DEBUT MENU */}
            <View>
            <ScrollView
                style={{
                backgroundColor : 'transparent',                   
            }}>
                <Image source = {{uri:'https://last-chance-dating.com/public/assets/image_mobile/back2.png'}} style={{
                    width : Dimensions.get("window").width,
                    height : 1530,
                    position:'absolute'
                }}></Image>

                <View style={{
                        flexDirection:'row', 
                        backgroundColor:'#f8f9fa',
                        opacity: 0.7,
                        width:Dimensions.get("window").width
                }}>
                    <View style={{
                        width:Dimensions.get("window").width/2
                    }}>
                        <Image
                            source={{
                                uri:'https://dating-4-free.com/public/assets/new_integration/Logo-D4F.png'
                            }}
                            style={{
                                marginTop:30,
                                width:130,
                                height:100
                            }}>
                        </Image>
                    </View>

                    <View style={{
                        width:Dimensions.get("window").width/2-20,
                        marginTop:Dimensions.get("window").height/12,
                        marginHorizontal:10
                    }}>

                        <TouchableOpacity onPress={()=>{
                            this.setState({modalVisible:true});
                        }} style={{
                            alignItems:'center'
                        }}>
                            <Image source={{uri: 'https://dating-4-free.com/public/assets/new_integration/Connectez-vous-ici.png'}}n style={{
                                width:Dimensions.get("window").width/2,
                                height:40,
                                marginHorizontal:10
                            }}></Image>
                        </TouchableOpacity>
                                             
                    </View>
                </View>

            </ScrollView>
            </View>
            </View>
        );
    }
}