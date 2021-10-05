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

export default class User extends Component{

    constructor(props){
        super(props);
        this.state={
            avatar_session:this.props.route.params.avatar_session,
            vip:this.props.route.params.vip,
            list_tout_user:this.props.route.params.list_tout_user,
            showmenu:false,
        }
    }

    renderItemComponentListUser(item){
        //console.log(item.item.type_profil);
        if(item.item.type_profil==2){
            if(item.item.suis_je==1){
                return (
                    <View>
                        <Image source={{
                            uri: 'https://last-chance-dating.com/public/assets/operateur_image/'+`${item.item.avatar}`
                        }}
                        style={{
                            borderRadius:5,
                            width:170,
                            height:230,
                            marginHorizontal:5
                        }}
                        ></Image>
                        <View style={{
                            position:'absolute',
                        }}>
                            <View style={{
                                flexDirection:'row'
                            }}>
                                <Image source={{
                                        uri:"https://en-toute-discretion.com/public/assets/new_integration/triangle_femme.png"
                                    }} style={{
                                        width:40,
                                        height:40,
                                    marginLeft:135
                                }}></Image>
                            </View>
                            <Text style={{
                                marginTop:65,
                                color:'white',
                                fontWeight:'bold',
                                marginLeft:20
                            }}>{item.item.nom_user}</Text>

                            <Text style={{
                                marginTop:15,
                                color:'white',
                                marginLeft:20,     
                            }}>{item.item.ville}</Text>

                            <Text style={{
                                color:'white',
                                fontWeight:'bold',
                                marginLeft:20,
                            }}>{item.item.pays_inscription}</Text>
                            <View style={{
                                flexDirection:'row',
                                marginTop:15
                            }}>
                                <Image source={{
                                    uri:'https://dating-4-free.com/public/assets/img/Coeurd4f.png'
                                }} style={{
                                    marginLeft:15,
                                    width:25,
                                    height:20
                                }}></Image>
                                <Image source={{
                                    uri:'https://dating-4-free.com/public/assets/img/Message3.png'
                                }} style={{
                                    marginLeft:15,
                                    width:25,
                                    height:20
                                }}></Image>
                                <Image source={{
                                    uri:'https://dating-4-free.com/public/assets/img/Fleur.png'
                                }} style={{
                                    marginLeft:15,
                                    width:25,
                                    height:40
                                }}></Image>
                                <Image source={{
                                    uri:'https://dating-4-free.com/public/assets/img/Kiss.png'
                                }} style={{
                                    marginLeft:15,
                                    width:25,
                                    height:20
                                }}></Image>
                            </View>
                        </View>
                    </View>
                );
            }
        }
    }

    renderItemComponentVip(item){
        return(
            <View>
                <Image source={{
                    uri: 'https://dating-4-free.com/public/assets/operateur/'+`${item.item.avatar}`
                        }} style={{
                            width:130,
                            height:230,
                            borderRadius:25,
                            marginHorizontal:5
                }}></Image>
                <View style={{
                    position:'absolute',
                    marginTop:100,
                }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        marginLeft:20
                    }}>{item.item.nom_user}</Text>
                    <Text style={{
                        marginTop:15,
                        color:'white',
                        marginLeft:20,
                    }}>{item.item.ville}</Text>
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        marginLeft:20,
                    }}>{item.item.pays_inscription}</Text>

                    <View style={{
                        flexDirection:'row',
                        marginTop:15
                    }}>
                       <Image source={{uri:'https://dating-4-free.com/public/assets/img/Coeurd4f.png'}} style={{
                        marginLeft:10,
                        width:25,
                        height:20
                    }}></Image>
                    <Image source={{uri:'https://dating-4-free.com/public/assets/img/Message3.png'}} style={{
                        marginLeft:5,
                        width:25,
                        height:20
                    }}></Image>
                    <Image source={{uri:'https://dating-4-free.com/public/assets/img/Fleur.png'}} style={{
                        marginLeft:5,
                        width:25,
                        height:40
                    }}></Image>
                    <Image source={{uri:'https://dating-4-free.com/public/assets/img/Kiss.png'}} style={{
                        marginLeft:5,
                        width:25,
                        height:20
                    }}></Image> 
                    </View>
                </View>
            </View>
        );
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
                    }} onPress={()=>{
                        navigation.navigate("userprofil", {
                            avatar_session:this.state.avatar_session,
                        });
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
        const { navigation } = this.props;
        return(
            <View>
                <ScrollView style={{
                    backgroundColor : 'transparent',                   
                }}>
                    {/* MENU */}
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
                       
                    {/* INDEX */}

                    <View style={{
                        marginTop:20,
                        flexDirection:'row'
                    }}>

                        <View style={{
                            width:Dimensions.get("window").width/2,
                            alignItems:'center'
                        }}>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/img/vip.png'}} style={{
                                width:75,
                                height:50
                            }}></Image>
                        </View>

                        <View style={{
                            width:Dimensions.get("window").width/2,
                            alignItems:'center'
                        }}>
                            <Text style={{fontSize:30}}>Devenez V.I.P</Text>
                            <Image source={{uri:'https://last-chance-dating.com/public/assets/img/couronne.png'}} style={{
                                width:75,
                                height:50
                            }}></Image>
                        </View>

                    </View>

                    <View style={{
                        marginTop:20,
                        marginHorizontal:5
                    }}>
                        <FlatList 
                        horizontal={true}
                        data={this.state.vip}
                        initialNumToRender={20}
                        keyExtractor={({ id }, userid) => userid.toString()}
                        renderItem={item => this.renderItemComponentVip(item)}
                        />
                    </View>
                    <View style={{
                        marginTop:20,
                        marginHorizontal:12
                    }}>
                        <Text style={{
                            color: '#8e8484',
                            fontSize:30
                        }}>En ligne</Text>

                    </View>

                    <View style={{
                        marginTop:20,
                        alignItems:'center',
                        height:60
                    }}>
                        <Image source={{uri:'https://dating-4-free.com/public/assets/image_mobile/Button_enable.png'}} style={{
                            position:'absolute',
                            width:Dimensions.get("window").width-50,
                            height:60
                        }}></Image>
                        <Text style={{
                            marginTop:18,
                            color:'#e70083',
                            fontWeight:'bold'
                        }}>Près de votre région</Text>
                    </View>

                    <View style={{
                        alignItems:'center',
                        height:60
                    }}>
                        <Image source={{uri:'https://dating-4-free.com/public/assets/image_mobile/Boutton_disable.png'}} style={{
                            position:'absolute',
                            width:Dimensions.get("window").width-60,
                            height:40
                        }}></Image>
                        <Text style={{
                            marginTop:8,
                            color:'#007bff',
                            fontWeight:'bold'
                        }}>Vos personnalités</Text>
                    </View>

                    <View style={{
                        alignItems:'center',
                        height:50
                    }}>
                        <Image source={{uri:'https://dating-4-free.com/public/assets/image_mobile/voir_tous.png'}} style={{
                            position:'absolute',
                            width:Dimensions.get("window").width-70,
                            height:40
                        }}></Image>
                    </View>

                    <View style={{
                        marginTop:20,
                        marginHorizontal:12
                    }}>
                        <Text style={{
                            color: '#8e8484',
                            fontSize:30
                        }}>Membres</Text>

                    </View>

                    <View style={{
                        marginVertical:20,
                        marginHorizontal:12
                    }}>
                        <FlatList 
                            horizontal={true}
                            initialNumToRender={50}            
                            data={this.state.list_tout_user}
                            keyExtractor={({ id }, userid) => userid.toString()}
                            renderItem={item => 
                            this.renderItemComponentListUser(item)}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

