export default function ProfilUser(userid){
    //console.log("User : ",user );
    //console.log("Mdp : ",mdp );

    var val = [{
        "typeadh_dating":"",
        "typeadh_coaching":"",
        "avatar_olona1":[],
        "avatar_session":[],
        "information_profil_olona":[],
        "photo_public":[],
        "photo_tout":[],
    }];

    var url = 'https://dating-4-free.com/api/monprofil/'+userid

    fetch(url, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
    })
    .then(res=>res.json())
    .then((json) => {
         if(json.abonnement_count>0){
            json.abonnement_deja_payer.map((elt)=>{
                
                if(elt.abonnement_simple_coach==1){
                    if(elt.type_abonnement==1){
                        val[0]["typeadh_dating"]="DISCOVERY";
                    }
    
                    else if(elt.type_abonnement==2){
                        val[0]["typeadh_dating"]="Bronze";
                    }
    
                    else if(elt.type_abonnement==3){
                        val[0]["typeadh_dating"]="SENSUALITY";
                    }
    
                    else if(elt.type_abonnement==4){
                        val[0]["typeadh_dating"]="EMOTION";
                    }
                    else if(elt.type_abonnement==5){
                        val[0]["typeadh_dating"]="VIP";
                    }
                    else{
                        val[0]["typeadh_dating"]="FREEDOM";
                    }
                }

                else if(elt.abonnement_simple_coach==2){
                    if(elt.type_abonnement==10){
                        val[0]["typeadh_coaching"]="Action";
                    }
    
                    else if(elt.type_abonnement==9){
                        val[0]["typeadh_coaching"]="Bronze";
                    }
    
                    else if(elt.type_abonnement==8){
                        val[0]["typeadh_coaching"]="Liberty";
                    }
    
                    else if(elt.type_abonnement==7){
                        val[0]["typeadh_coaching"]="Confidence";
                    }
                    else if(elt.type_abonnement==6){
                        val[0]["typeadh_coaching"]="VIP";
                    }
                    else{
                        val[0]["typeadh_coaching"]="Tentation";
                    }
                }
                
                
            });

            val[0]["avatar_olona1"]=json.avatar_olona1;
            val[0]["avatar_session"]=json.avatar_session;
            val[0]["information_profil_olona"]=json.information_profil_olona;
            val[0]["photo_public"]=json.photo_public;
            val[0]["photo_tout"]=json.photo_tout;
         }
         else{
            
            if(json.abonnement_deja_payer_count==1){
                val[0]["typeadh_dating"]="FREEDOM";
                val[0]["avatar_olona1"]=json.avatar_olona1;
                val[0]["avatar_session"]=json.avatar_session;
                val[0]["information_profil_olona"]=json.information_profil_olona;
                val[0]["photo_public"]=json.photo_public;
                val[0]["photo_tout"]=json.photo_tout;
             }
             else{
                 
             }
         }
    })
    .catch((err)=>{
        console.error(err)
    });

    //console.log(val[0]["avatar_session"][0]["userid"]);

    return val;

}