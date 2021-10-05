export default function ConnectUser(user, mdp){
    //console.log("User : ",user );
    //console.log("Mdp : ",mdp );

    var val = [{
        "avatar_session":[],
        "vip":[],
        "list_tout_user":[],
        "message":""
    }];

    fetch('https://dating-4-free.com/api/connexionmobile', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        body: JSON.stringify({
            nom_user: user,
            mdp_user: mdp
        })
    })
    .then(res=>res.json())
    .then((json) => {
        if(json.message=="OK"){
            val[0]["avatar_session"]=json.avatar_session;
            val[0]["vip"]=json.vip;
            val[0]["list_tout_user"]=json.list_tout_user.data;
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