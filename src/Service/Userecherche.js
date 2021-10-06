export default function Userecherche(session_user_id){
    //console.log("User : ",user );
    //console.log("Mdp : ",mdp );

    var val = [{
        "avatar_session":[],
        "vip":[],
        "list_tout_user":[],
        "message":""
    }];

    fetch('https://dating-4-free.com/api/userrecherche_api', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            session_user_id:session_user_id
        })
    })
    .then(res=>res.json())
    .then((json) => {
        console.log(json);
        if(json.message=="OK"){
            val[0]["avatar_session"]=json.avatar_session;
            val[0]["vip"]=json.vip;
            val[0]["list_tout_user"]=json.liste_tout_user;
            val[0]["liste_user_ville"]=json.liste_user_ville;
            val[0]["message"]=json.message;
        }
        else if(json.message=="NON"){
            val[0]["message"]=json.message;
        }
        
    })
    .catch((err)=>{
        console.error(err)
    });

    //console.log(val[0]["avatar_session"][0]["userid"]);

    return val;

}