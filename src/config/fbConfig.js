import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyBsG9thqf31uT_VsnrMIHZ4iF_Qnan_LBQ",
    authDomain: "doron-s-gym.firebaseapp.com",
    databaseURL: "https://doron-s-gym.firebaseio.com",
    projectId: "doron-s-gym",
    storageBucket: "doron-s-gym.appspot.com",
    messagingSenderId: "394882180672",
    appId: "1:394882180672:web:37a78ea3c8f233c2"
  };


  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true})
  
  
  export default firebase; 
  