import { rgb } from 'color-convert';
import React, { Component, useState } from 'react'

import { 
     Text, 
     View, 
     Image, 
     TextInput, 
     TouchableOpacity, 
     Dimensions,
     Button,
     Alert,
     ScrollView,
     Modal,
     FlatList,
     ActivityIndicator,

    } from 'react-native';

import {RNPickerSelect} from "react-native-picker-select";

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
                                            this.setState({modalVisible:false});
                                            navigation.navigate("user", {
                                                avatar_session:res[0]["avatar_session"],
                                                vip:res[0]["vip"],
                                                list_tout_user:res[0]["list_tout_user"],
                                                liste_user_ville:res[0]["liste_user_ville"],
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
                <Image source = {{uri:'https://dating-4-free.com/public/assets/image_mobile/back.jpg'}} style={{
                    width : Dimensions.get("window").width,
                    position:'absolute',
                    height : 1400,
                }}></Image>

                <View style={{
                        flexDirection:'row', 
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


                <View style={{
                    width:Dimensions.get("window").width,
                    alignItems:'center',
                    marginHorizontal:20,
                }}>
                        <Text style={{
                            marginTop:20,
                            fontSize:35,
                            color:'white',
                            fontWeight:'bold'
                        }}>Inscrivez-vous</Text>
                        <Text style={{
                            marginTop:10,
                            fontSize:35,
                            color:'white',
                        }}>C'est</Text>

                        <Image source={{
                            uri:'https://dating-4-free.com/public/assets/new_integration/gratuit.gif'
                        }} style={{
                            width:Dimensions.get("window").width/2,
                            height:100
                        }}></Image>
                    </View>
                   
                <View style={{
                        marginHorizontal:20,
                        alignItems:'center'
                    }}>
                        <Image style={{
                            width:Dimensions.get("window").width-20,
                            height:100
                        }} source={{
                            uri:'https://last-chance-dating.com/public/assets/integration_new/Rectangle1.png'
                        }}></Image>
                        <View style={{
                            flexDirection:'row',
                            position:'absolute',
                        }}>
                            <View style={{
                                width:Dimensions.get("window").width/5,
                                alignItems:'center',
                                marginTop:30
                            }}>
                                <Image source={{
                                    uri:'https://last-chance-dating.com/public/assets/integration_new/icone1.png'
                                }} style={{
                                    width:40,
                                    height:40
                                }}></Image>
                            </View>

                            <View style={{
                                width:2*Dimensions.get("window").width/3,
                                marginTop:20,
                            }}>
                            <View style={{
                                flexDirection:'row',
                                marginLeft:50,
                            }}>
                                <Text style={{
                                    padding:5,
                                    backgroundColor:'white',
                                    borderRadius:5,
                                    fontWeight:'bold'

                                }}>1</Text>
                                <Text style={{
                                    padding:5,
                                    backgroundColor:'white',
                                    borderRadius:5,
                                    marginLeft:8,
                                    fontWeight:'bold'
                                }}>2</Text>
                                <Text style={{
                                    padding:5,
                                    backgroundColor:'white',
                                    borderRadius:5,
                                    marginLeft:8,
                                    fontWeight:'bold'
                                }}>9</Text>
                                <Text style={{
                                    padding:5,
                                    backgroundColor:'white',
                                    borderRadius:5,
                                    marginLeft:8,
                                    fontWeight:'bold'
                                }}>1</Text>
                                <Text style={{
                                    padding:5,
                                    backgroundColor:'white',
                                    borderRadius:5,
                                    marginLeft:8,
                                    fontWeight:'bold'
                                }}>5</Text>
                                <Text style={{
                                    padding:5,
                                    backgroundColor:'white',
                                    borderRadius:5,
                                    marginLeft:8,
                                    fontWeight:'bold'
                                }}>6</Text>
                            </View>

                            <Text style={{
                                marginTop:15,
                                color:'white'
                            }}>Personne déjà inscrit sur Dating-4-free</Text>
                            </View>
                            
                        </View>

                    </View>

                <View style={{
                        marginHorizontal:20,
                        alignItems:'center',
                        marginTop:10
                    }}>
                        <Image style={{
                            width:Dimensions.get("window").width-20,
                            height:100
                        }} source={{
                            uri:'https://last-chance-dating.com/public/assets/integration_new/Rectangle1.png'
                        }}></Image>
                        <View style={{
                            flexDirection:'row',
                            position:'absolute',
                        }}>
                            <View style={{
                                width:Dimensions.get("window").width/5,
                                alignItems:'center',
                                marginTop:30
                            }}>
                                <Image source={{
                                    uri:'https://last-chance-dating.com/public/assets/integration_new/icone2.png'
                                }} style={{
                                    width:40,
                                    height:45
                                }}></Image>
                            </View>

                            <View style={{
                                width:2*Dimensions.get("window").width/3,
                                marginTop:10,
                            }}>
                            <View style={{
                                flexDirection:'row',
                                marginLeft:60,
                            }}>
                                <Text style={{
                                    color:'white',
                                    fontSize:30
                                }}>9</Text>
                                <Text style={{
                                    color:'white',
                                    fontSize:30,
                                }}>1</Text>
                                <Text style={{
                                    color:'white',
                                    fontSize:30,
                                    marginLeft:5
                                }}>.</Text>
                                <Text style={{
                                    color:'white',
                                    fontSize:30,
                                    marginLeft:5,
                                }}>6</Text>
                                <Text style={{
                                    color:'white',
                                    fontSize:30,
                                }}>1</Text>
                                <Text style={{
                                    color:'white',
                                    fontSize:30,
                                }}>5</Text>
                            </View>

                            <Image style={{
                                width:Dimensions.get("window").width/2,
                                height:5,
                                marginLeft:20
                            }} source={{
                                uri:'https://last-chance-dating.com/public/assets/integration_new/line2.png'
                            }}></Image>

                            <Text style={{
                                marginTop:6,
                                color:'white',
                                textAlign:'center'
                            }}>Personne connectées sur Dating-4-Free en ce moment</Text>
                            </View>
                            
                        </View>

                    </View>
                
                <View style={{
                        marginHorizontal:20,
                        alignItems:'center',
                        marginTop:10
                    }}>
                        <Image style={{
                            width:Dimensions.get("window").width-20,
                            height:100
                        }} source={{
                            uri:'https://last-chance-dating.com/public/assets/integration_new/Rectangle1.png'
                        }}></Image>
                        <View style={{
                            flexDirection:'row',
                            position:'absolute',
                        }}>
                            <View style={{
                                width:(Dimensions.get("window").width/2)-10,
                                alignItems:'center',
                                marginTop:30,
                            }}>
                                <Image source={{
                                    uri:'https://last-chance-dating.com/public/assets/integration_new/Verifi3.png'
                                }} style={{
                                    width:(Dimensions.get("window").width/2)-20,
                                    height:55
                                }}></Image>
                            </View>

                            <View style={{
                                width:(Dimensions.get("window").width/2)-10,
                                marginTop:10,
                                alignItems:'center'
                            }}>
                           
                            <Image style={{
                                width:Dimensions.get("window").width/5,
                                height:80,
                            }} source={{
                                uri:'https://last-chance-dating.com/public/assets/integration_new/sécurisé.png'
                            }}></Image>

                            </View>
                            
                        </View>

                    </View>
                
                <View style={{
                    alignItems:'center',
                    marginHorizontal:10,
                    marginTop:50
                }}>
                    <Text style={{
                        color:'white',
                        fontSize:20,
                        fontWeight:'bold'
                    }}>Je suis / Nous sommes</Text>
                </View>

                <View style={{
                    marginTop:20
                }}>
                     <TouchableOpacity 
                        onPress={()=>{
                        
                        }} 
                        style={{
                            marginTop:10,
                            borderWidth:1,
                            borderColor:'white',
                            paddingVertical:10,
                            borderRadius:20,
                            marginHorizontal:Dimensions.get('window').width/5
                    }}>
                            <Text 
                            style={{ 
                                marginLeft:10,
                                fontSize:20,
                                color:'white',
                                fontWeight:'bold'
                            }}>Homme </Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    alignItems:'center',
                    marginHorizontal:10,
                    marginTop:30
                }}>
                    <Text style={{
                        color:'white',
                        fontSize:20,
                        fontWeight:'bold'
                    }}>Je recherche / Nous recherchons</Text>
                </View>

                <View style={{
                    marginTop:20
                }}>
                     <TouchableOpacity 
                        onPress={()=>{
                        
                        }} 
                        style={{
                            marginTop:10,
                            borderWidth:1,
                            borderColor:'white',
                            paddingVertical:10,
                            borderRadius:20,
                            marginHorizontal:Dimensions.get('window').width/5
                    }}>
                            <Text 
                            style={{ 
                                marginLeft:10,
                                fontSize:20,
                                color:'white',
                                fontWeight:'bold'
                            }}>Femme </Text>
                    </TouchableOpacity>
                </View>
                
                <View style={{
                    marginTop:20
                }}>
                     <TextInput 
                    placeholder="Votre nom d'utilisateur"
                    placeholderTextColor="white"
                    style={{
                        fontSize:20,
                        paddingHorizontal:20,
                        color:'white',
                        marginTop:10,
                        borderWidth:1,
                        borderColor:'white',
                        paddingVertical:10,
                        borderRadius:20,
                        marginHorizontal:Dimensions.get('window').width/5
                    }}></TextInput>
                </View>

                <View style={{
                    marginTop:20
                }}>
                    <TextInput 
                    placeholder="Votre mot de passe"
                    placeholderTextColor="white"
                    style={{
                        fontSize:20,
                        paddingHorizontal:20,
                        color:'white',
                        marginTop:10,
                        borderWidth:1,
                        borderColor:'white',
                        paddingVertical:10,
                        borderRadius:20,
                        marginHorizontal:Dimensions.get('window').width/5
                    }}></TextInput>
                </View>

                <View style={{
                    marginTop:20,
                    marginHorizontal:12,
                    alignItems:'center'
                }}>
                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/new_integration/Je-tente-ma-chance.png'
                    }} style={{
                        width:Dimensions.get("window").width/2,
                        height:40
                    }}></Image>
                </View>

                <View style={{
                    marginTop:20,
                    marginHorizontal:12,
                    alignItems:'center'
                }}>
                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/new_integration/2fb.png'
                    }} style={{
                        width:4*Dimensions.get("window").width/6,
                        height:30
                    }}></Image>
                </View>

                <View style={{
                    marginTop:20,
                    marginHorizontal:12,
                    alignItems:'center'
                }}>
                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/new_integration/1Google.png'
                    }} style={{
                        width:4*Dimensions.get("window").width/6,
                        height:30,
                        marginBottom:50
                    }}></Image>
                </View>
                    {/* CONSEIL POUR LES CELIBATAIRE */}
                <View style={{
                    marginHorizontal:40,
                    marginTop:20, 
                    backgroundColor:'white',
                    alignItems:'center',
                    borderRadius:5
                }}>
                    <Image style={{
                        width:50,
                        height:50,
                        marginTop:20
                    }} source={{
                        uri:'https://dating-4-free.com/public/assets/new_integration/icone_index_1.png'
                    }}></Image>

                    <Text style={{
                        color:'#dd4b39',
                        fontSize:20,
                        fontWeight:'bold',
                        textAlign:'center',
                        marginVertical:20
                    }}>
                        Conseils pour les célibataires
                    </Text>

                    <Text style={{
                        fontSize:17,
                        textAlign:'justify',
                        marginHorizontal:20,
                        lineHeight:30,
                    }}>
                        Aimer et être aimé, vivre l’amour avec un grand A est le désir le plus profond de nombreux 
                        <Text style={{
                            fontSize:17,
                            fontWeight:'bold'
                        }}> célibataires</Text>. Si vous avez succombé à la tentation des sites de rencontres, c’est que vous faites sûrement partie de cette fameuse liste. Découvrez quelques conseils de pro pour vous aider à sortir du lot et rencontrer votre destinée en un temps record. 
										 
                    </Text>

                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/new_integration/En-savoir-Plus.png'
                    }} style={{
                        width:Dimensions.get("window").width/3,
                        height:35,
                        marginVertical:20
                    }}></Image>
                </View>
                
                {/* vOTRE PROFIL UN PAS VERS UNE SÉDUCTION GARANTIE */}

                <View style={{
                    marginHorizontal:40,
                    marginTop:20, 
                    backgroundColor:'white',
                    alignItems:'center',
                    borderRadius:5
                }}>
                    <Image style={{
                        width:40,
                        height:55,
                        marginTop:20
                    }} source={{
                        uri:'https://dating-4-free.com/public/assets/new_integration/iconeindex_2.png'
                    }}></Image>

                    <Text style={{
                        color:'#dd4b39',
                        fontSize:20,
                        fontWeight:'bold',
                        textAlign:'center',
                        marginVertical:20
                    }}>
                        Votre profil un pas vers une séduction garantie
                    </Text>

                    <Text style={{
                        fontSize:17,
                        textAlign:'justify',
                        marginHorizontal:20,
                        lineHeight:30,
                    }}>
                        Sur un site de rencontres, le principe est le même que sur un marché de travail. Vous devez savoir vous démarquer de la concurrence. À première vue, vous devez donner aux autres célibataires l’envie de vous contacter. Mais comment ? En concevant un 
                        <Text style={{
                            fontSize:17,
                            fontWeight:'bold'
                        }}> profil </Text> unique, original qui vous valorise. Suivez notre guide ! 
										 
                    </Text>

                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/new_integration/En-savoir-Plus.png'
                    }} style={{
                        width:Dimensions.get("window").width/3,
                        height:35,
                        marginVertical:20
                    }}></Image>
                </View>
 
                {/* VOTRE MESSAGE D ACRROCHE */}

                <View style={{
                    marginHorizontal:40,
                    marginTop:20, 
                    backgroundColor:'white',
                    alignItems:'center',
                    borderRadius:5
                }}>
                    <Image style={{
                        width:28,
                        height:55,
                        marginTop:20
                    }} source={{
                        uri:'https://dating-4-free.com/public/assets/new_integration/icone_index_3.png'
                    }}></Image>

                    <Text style={{
                        color:'#dd4b39',
                        fontSize:20,
                        fontWeight:'bold',
                        textAlign:'center',
                        marginVertical:20
                    }}>
                        Votre message d'accroche, un rendez vous gagné à coup sûr. 
                    </Text>

                    <Text style={{
                        fontSize:17,
                        textAlign:'justify',
                        marginHorizontal:20,
                        lineHeight:30,
                    }}>
                         Ça y est vous avez choisi celui ou celle que vous allez aborder. Vous ne savez pas quoi lui dire, à quel moment lui dire que vous avez envie d’un rendez-vous pour lui exprimer votre flamme. 
                        Ne vous en faites pas, nous vous guiderons à travers cet article ce dont vous devez suivre pour rédiger vos premiers messages. 
                        En effet, plus votre messages d’accroche est pertinent, plus grand sera votre chance d’avoir une réponse de votre futur(e) partenaire
										 
                    </Text>

                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/new_integration/En-savoir-Plus.png'
                    }} style={{
                        width:Dimensions.get("window").width/3,
                        height:35,
                        marginVertical:20
                    }}></Image>
                </View>
                <View style={{
                    marginHorizontal:10,
                    marginTop:20
                }}>
                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/image_mobile/img2.png'
                    }} style={{
                        width:Dimensions.get("window").width-20,
                        height:Dimensions.get("window").height/3,
                    }}></Image>
                </View>
                <View style={{
                    marginHorizontal:10,
                }}>
                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/image_mobile/img1.png'
                    }} style={{
                        width:Dimensions.get("window").width-20,
                        height:Dimensions.get("window").height/3,
                    }}></Image>
                </View>
                <View style={{
                    marginHorizontal:10,
                }}>
                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/image_mobile/img3.png'
                    }} style={{
                        width:Dimensions.get("window").width-20,
                        height:3*Dimensions.get("window").height/5,
                    }}></Image>
                </View>
                <View style={{
                    marginHorizontal:10,
                }}>
                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/image_mobile/img4.png'
                    }} style={{
                        width:Dimensions.get("window").width-20,
                        height:Dimensions.get("window").height/3,
                    }}></Image>
                </View>
                {/* DATING-4-FREE.COM */}
                <View style={{
                    marginHorizontal:12,
                    marginTop:20,
                    backgroundColor:'#8a86a1'
                }}>
                    <Text style={{
                        color:'white',
                        fontWeight:'bold',
                        fontSize:25,
                        marginTop:50,
                        marginHorizontal:20
                    }}>
                        Dating-4-free.com
                    </Text>
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:25,
                        marginTop:20,
                        marginHorizontal:20
                    }}>
                        Un site de rencontres spécialement conçu pour vous !
                    </Text>

                    <Text style={{
                        color:'white',
                        fontSize:20,
                        marginTop:20,
                        marginHorizontal:20,
                        lineHeight:30,
                        textAlign:'justify'
                    }}>
                         Les sites de rencontres intéressent de plus en plus de personnes en France et partout dans le monde. A l’air de l’électronique, leur utilisation s’est largement répandue ces dernières années. Ces plateformes en ligne s’imposent comme l’un des moyens de se mettre facilement en contact avec un partenaire potentiel et de le rencontrer.
                    </Text>
                    <Text style={{
                        fontWeight:'bold',
                        fontSize:25,
                        marginTop:20,
                        marginHorizontal:20
                    }}>
                        Qu’est-ce qu’un site de rencontres ?
                    </Text>

                    <Text style={{
                        color:'white',
                        fontSize:20,
                        marginTop:20,
                        marginHorizontal:20,
                        lineHeight:30,
                        textAlign:'justify'
                    }}>
                         Un site de rencontres est une plateforme disponible sur internet. Il permet de regrouper des célibataires en les classant selon leur catégorie d’âge, leurs centres d’intérêts, leur lieu de résidence, etc. en fonction des critères de recherche de l’abonné. Un site de rencontres a pour finalité de mettre les personnes en quête d’une relation de couple ou d’un autre type de relation en contact...
                    </Text>
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Image source={{
                            uri:'https://dating-4-free.com/public/assets/new_integration/en_savoir_plus_rouge.png'
                        }} style={{
                            width:Dimensions.get("window").width/3,
                            height:35,
                            marginVertical:20
                        }}></Image>
                    </View>
                </View>
                {/* DATING-4-FREE.COM COACHING EN SEDUCTION */}

                <View style={{
                    marginHorizontal:10,
                    marginTop:20
                }}>
                    <Image style={{
                        width:Dimensions.get("window").width-20,
                        height:5*Dimensions.get("window").height/6,
                        position:'absolute'
                    }} source={{
                        uri:'https://dating-4-free.com/public/assets/new_integration/BG-Coach.png'
                    }}></Image>
                    <View style={{
                        width:Dimensions.get("window").width-20,
                        height:5*Dimensions.get("window").height/6,
                    }}>
                        <Text style={{
                            fontSize:30,
                            color:'white',
                            fontWeight:'bold',
                            marginHorizontal:20
                        }}>Dating-4-free.com</Text>
                        <Text style={{
                            fontSize:25,
                            color:'white',
                            marginHorizontal:20
                        }}>et son coaching en séduction</Text>

                    <Text style={{
                        color:'white',
                        fontSize:20,
                        marginTop:20,
                        marginHorizontal:20,
                        lineHeight:30,
                        textAlign:'justify'
                    }}>
                         Pour les pros de la drague, se trouver sur un site de rencontre est toujours une partie de plaisir. Cela leur donne de l’expérience et pourquoi pas, un peu de divertissement pour leur quotidien peut-être un peu morose.
                    </Text>

                    <Text style={{
                        color:'white',
                        fontSize:20,
                        marginTop:20,
                        marginHorizontal:20,
                        lineHeight:30,
                        textAlign:'justify'
                    }}>
                         Mais pour ceux et celles qui recherchent plus que ce genre d’amusement, peut-être un partenaire pour une relation sérieuse, s’inscrire sur un site de rencontre n’est pas toujours une garantie de succès dans leur quête
                    </Text>
                    <View style={{
                        alignItems:'center'
                    }}>
                        <Image source={{
                            uri:'https://dating-4-free.com/public/assets/new_integration/en_savoir_plus_rouge.png'
                        }} style={{
                            width:Dimensions.get("window").width/3,
                            height:35,
                            marginVertical:20
                        }}></Image>
                    </View>
                    </View>
                </View>
            
                <View style={{
                    marginHorizontal:10,
                    marginTop:20,
                    alignItems:'center'
                }}>
                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/photo_users/Leon_mixtemixtes.jpg'
                    }} style={{
                        width:Dimensions.get("window").width-20,
                        height:4*Dimensions.get("window").height/5,
                        position:'absolute'
                    }}></Image>
                    <View style={{
                        width:Dimensions.get("window").width-50,
                        height:(3*Dimensions.get("window").height/4)-50,
                        marginVertical:50,
                        borderWidth:1,
                        backgroundColor:'white',
                        opacity:0.7,
                        borderRadius:15
                    }}>
                        <Text style={{
                            marginTop:20,
                            marginHorizontal:20,
                            fontWeight:'bold',
                            fontSize:30,
                        }}>Léon, coach pour couple mixte</Text>
                        <Text style={{
                            marginTop:10,
                            marginHorizontal:20,
                            fontSize:20,
                            lineHeight:30,
                            textAlign:'justify'
                        }}>
                            Quand on est en couple avec une personne avec qui on présente des différences physiques et/ou culturelles, on peut être confronté à bien des difficultés. Celles-ci peuvent aussi bien se passer dans le couple qu’en dehors du couple car deux personnes différentes qu
                        </Text>
                        <View style={{
                            alignItems:'center'
                        }}>
                            <TouchableOpacity style={{
                            
                            }}>
                                <Text style={{
                                    borderWidth:2,
                                    fontSize:20,
                                    padding:8,
                                    borderRadius:10
                                }}>Lire la suite</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>
                    <Image source={{
                        uri:'https://dating-4-free.com/public/assets/photo_users/Leon_mixtemixtes.jpg'
                    }} style={{
                        width:Dimensions.get("window").width/3,
                        height:Dimensions.get("window").height/6,
                        position:'absolute',
                        marginTop:(5*Dimensions.get("window").height/8)+30,
                        borderRadius:150,
                        borderWidth:5
                    }}></Image>
                </View>
            </ScrollView>
            </View>
            </View>
        );
    }
}