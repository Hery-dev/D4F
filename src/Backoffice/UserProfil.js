import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'
import { ImageEditor } from 'react-native';

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

export default class UserProfil extends Component{

    constructor(props){
        super(props);
        this.state={
            avatar_session:this.props.route.params.avatar_session,
            showmenu:false,
        }
    }

    componentDidMount(){
        console.log(this.state.avatar_session[0]["avatar"]);
    }

    menuComponent(status){
        if(status==true){
            return (
                <View style={{
                    marginHorizontal:12,
                    height:Dimensions.get("window").height
                }}>
    
                    <TouchableOpacity style={{
                        marginHorizontal:20,
                        borderRadius:20,
                    }}>
                        <Image source={{
                            uri:'https://dating-4-free.com/public/assets/img/coaching_fleur.png'
                        }}
                        style={{
                            width:Dimensions.get("window").width/3,
                            height:50
                        }}></Image>
                    </TouchableOpacity>
    
                    <View style={{
                        marginTop:10,
                        flexDirection:'row'
                    }}>
                        <View style={{
                            width:Dimensions.get("window").width/2,
                            height:70,
                            alignItems:'center'
                        }}>
                            <Image source={{
                                uri:'https://dating-4-free.com/public/assets/img/Dating1.png'
                            }} style={{
                                width:100,
                                height:60
                            }}></Image>
                        </View>
    
                        <View style={{
                            width:Dimensions.get("window").width/2,
                            height:70
                        }}>
                            <Image source={{
                                uri:'https://dating-4-free.com/public/assets/img/Coaching.png'
                            }} style={{
                                width:100,
                                height:60
                            }}></Image>
                        </View>
                    </View>
    
                    <TouchableOpacity style={{
                        alignItems:'center',
                        padding:10,
                        marginHorizontal:20,
                        backgroundColor:'#294365'
                    }}>
                        <Text style={{
                            color:'white',
                            fontWeight:'bold',
                            fontSize:16
                        }}>Mon Profil</Text>
                    </TouchableOpacity>
    
                <TouchableOpacity style={{
                        alignItems:'center',
                        padding:10,
                        marginHorizontal:20,
                        backgroundColor:'#42a5b0',
                        marginTop:5
                    }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:16
                    }}>Modifier mot de passe</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={{
                        alignItems:'center',
                        padding:10,
                        marginHorizontal:20,
                        backgroundColor:'#42a5b0',
                        marginTop:5
                    }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:16
                    }}>Newsletters</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                        alignItems:'center',
                        padding:10,
                        marginHorizontal:20,
                        backgroundColor:'#42a5b0',
                        marginTop:5
                    }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:16
                    }}>Qui ont aimé mon profil?</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                        alignItems:'center',
                        padding:10,
                        marginHorizontal:20,
                        backgroundColor:'#42a5b0',
                        marginTop:5
                    }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:16
                    }}>Qui ont visité mon profil?</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={{
                        alignItems:'center',
                        padding:10,
                        marginHorizontal:20,
                        backgroundColor:'#42a5b0',
                        marginTop:5
                    }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:16
                    }}>Paramètres des emails</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={{
                        alignItems:'center',
                        padding:10,
                        marginHorizontal:20,
                        backgroundColor:'#42a5b0',
                        marginTop:5
                    }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:16
                    }}>Contacter le Service Clientèle</Text>
                </TouchableOpacity>
    
                <TouchableOpacity style={{
                        alignItems:'center',
                        padding:10,
                        marginHorizontal:20,
                        backgroundColor:'#d8d8d8',
                        marginTop:5
                    }}>
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:16
                    }}>Se déconnecter</Text>
                </TouchableOpacity>
                </View>
            );
        }
        else{

        }    
    }
    render(){
        return(
            <View>
                <ScrollView>
            <View style={{
                flexDirection:'row', 
                backgroundColor:'#f8f9fa',
                opacity: 0.7,
                height:130,
                alignItems:'center'
            }}>
                <View style={{
                    width:Dimensions.get("window").width/4,
                    alignItems:"center",
                    marginTop:50
                }}>
                    <Image
                        source={{uri:'https://dating-4-free.com/public/assets/img/recherche.png'}}
                        style={{
                            width:40,
                            height:40
                        }}>
                    </Image>
                </View>

                <View style={{
                    width:Dimensions.get("window").width/4,
                    alignItems:"center",
                    marginTop:50
                }}>
                    <Image
                        source={{uri:'https://dating-4-free.com/public/assets/img/message.png'}}
                        style={{
                            width:40,
                            height:40
                        }}>
                    </Image>
                </View>

                <View style={{
                    width:Dimensions.get("window").width/4,
                    alignItems:"center",
                    marginTop:50
                }}>
                    <Image
                        source={{uri:'https://dating-4-free.com/public/assets/img/membre.png'}}
                        style={{
                            width:50,
                            height:40
                        }}>
                    </Image>
                </View>

                <View style={{
                    width:Dimensions.get("window").width/4,
                    alignItems:"center",
                    marginTop:50
                }}>
                    <TouchableOpacity onPress={()=>{
                        console.log(this.state.showmenu);
                        if(this.state.showmenu==false){
                            this.setState({showmenu:true});
                        }
                        else{
                            this.setState({showmenu:false});
                        }
                    }}>
                        <Image
                            source={{uri:'https://dating-4-free.com/public/assets/photo_users/'+this.state.avatar_session[0]["avatar"]}}
                            style={{
                                width:50,
                                height:50,
                                borderRadius:25
                            }}>
                        </Image>
                    </TouchableOpacity>
                   
                </View>
            </View>
            {this.menuComponent(this.state.showmenu)}
            </ScrollView>
            </View>
        );
    }
}