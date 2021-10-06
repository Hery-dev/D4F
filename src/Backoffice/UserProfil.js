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
import Userecherche from '../Service/Userecherche';

export default class UserProfil extends Component{

    constructor(props){
        super(props);
        this.state={
            avatar_session:this.props.route.params.avatar_session,
            avatar_olona1:this.props.route.params.avatar_olona1,
            information_profil_olona:this.props.route.params.information_profil_olona,
            photo_public:this.props.route.params.photo_public,
            photo_tout:this.props.route.params.photo_tout,
            typeadh_coaching:this.props.route.params.typeadh_coaching,
            typeadh_dating:this.props.route.params.typeadh_dating,
            showmenu:false,
            isLoad:false,
        }
    }

    componentDidMount(){
        //console.log(this.state.information_profil_olona);
    }

    menuComponent(status){
        const { navigation } = this.props;
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
                    }} onPress={()=>{
                        setTimeout(() => {
                            navigation.navigate("home");
                        }, 2000);
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

    LoadPage(status){
        if(status==true){
            return <ActivityIndicator size="large" color="black" />
        }
    }
    render(){
        const { navigation } = this.props;
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
                    <TouchableOpacity onPress={()=>{
                        this.setState({isLoad:true});
                        //var res =  Userecherche(this.state.avatar_session[0]["userid"]);
                        var res = Userecherche(this.state.avatar_session[0]["userid"]);
                        setTimeout(() => {
                            //console.log(res);
                            this.setState({isLoad:false});
                            navigation.navigate("user", {
                                avatar_session:res[0]["avatar_session"],
                                vip:res[0]["vip"],
                                list_tout_user:res[0]["list_tout_user"],
                                liste_user_ville:res[0]["liste_user_ville"],
                            });
                        }, 3000);
                    }}>
                    <Image
                        source={{uri:'https://dating-4-free.com/public/assets/img/membre.png'}}
                        style={{
                            width:50,
                            height:40
                        }}>
                    </Image>
                    </TouchableOpacity>
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

            <View>
                {this.LoadPage(this.state.isLoad)}
            </View>

            {this.menuComponent(this.state.showmenu)}

            <View style={{
                marginTop:20,
                marginHorizontal:20
            }}>
                <Text style={{
                    fontSize:28,
                }}>Mes abonnements dating</Text>
                <Text style={{
                    marginTop:10,
                    padding:15,
                    borderWidth:1,
                    borderRadius:5,
                    textAlign:'center',
                    fontSize:20,
                    backgroundColor:'white'
                }}>Type d'adhésion :
                    <Text style={{
                        fontWeight:'bold'
                    }}> {this.state.typeadh_dating}</Text>
                </Text>

            </View>

            <View style={{
                marginTop:20,
                marginHorizontal:20
            }}>
                <Text style={{
                    fontSize:26,
                }}>Mes abonnements coaching</Text>
                <Text style={{
                    marginTop:10,
                    padding:15,
                    borderWidth:1,
                    borderRadius:5,
                    textAlign:'center',
                    fontSize:20,
                    backgroundColor:'white'
                }}>Type d'adhésion :
                    <Text style={{
                        fontWeight:'bold'
                    }}> {this.state.typeadh_coaching}</Text>
                </Text>

            </View>

            <Text style={{
                    marginTop:20,
                    fontSize:26,
                    marginLeft:20
            }}>Mon Profil</Text>

            <View style={{
                marginHorizontal:20,
                width:Dimensions.get("window").width-40,
                backgroundColor:'white',
                borderWidth:1,
                borderRadius:10,
                marginBottom:20
            }}> 
                <View style={{
                    alignItems:'center'
                }}>
                    <Image source={{uri:'https://dating-4-free.com/public/assets/photo_users/'+this.state.avatar_session[0]["avatar"]}}
                    style={{
                        marginTop:10,
                        marginLeft:10,
                        width:Dimensions.get("window").width/3,
                        height:Dimensions.get("window").height/5,
                    }}>

                </Image>
                </View>               
                

                <Text style={{
                    marginTop:10,
                    marginLeft:30,
                    fontWeight:'bold',
                    fontSize:23
                }}>
                    {this.state.avatar_session[0]["username"]}
                </Text>

                <Text style={{
                    marginTop:10,
                    marginLeft:30,
                    fontSize:16
                }}>
                    {this.state.information_profil_olona[0]["ville"]}
                </Text>

                <Text style={{
                    marginTop:10,
                    marginLeft:30,
                    fontSize:16,
                    fontWeight:'bold'
                }}>
                    {this.state.information_profil_olona[0]["pays_inscription"]}
                </Text>

                <Text style={{
                    marginTop:10,
                    marginLeft:30,
                    fontSize:16
                }}>
                    {this.state.information_profil_olona[0]["age"]} ans
                </Text>

                <Text style={{
                    marginTop:10,
                    marginLeft:30,
                    fontSize:17,
                }}>
                    A propos de moi
                </Text>
                <View style={{
                    backgroundColor:'#93dcf8',
                    marginHorizontal:30,
                    marginTop:10,
                    padding:20,
                    alignItems:'center'
                }}>
                    <Text style={{
                        color:"#128fbc",
                        fontSize:16
                    }}>Dites quelque chose sur vous...</Text>
                </View>
                <TouchableOpacity style={{
                    marginTop:20,
                    marginLeft:30,
                    marginRight:Dimensions.get("window").width/4
                }}>
                    <Text style={{
                        borderWidth:1,
                        padding:10,
                        fontSize:16
                    }}>Information personnelles</Text>
                </TouchableOpacity>
                
            </View>
            </ScrollView>
            </View>
        );
    }
}