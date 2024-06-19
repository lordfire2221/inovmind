import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { getStorage, ref, listAll } from "firebase/storage";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public db: AngularFirestore) {}
  //création d'élément

  createUser(value:any){
    return this.db.collection('UserInformation').add(value);
  }


//récuperation des informations
getAllUser(){
  return this.db.collection('UserInformation').valueChanges({idField:'id'});
}
getUserEmail(email:string){
 return this.db.collection("UserInformation").valueChanges({idField:'id'})
}
// getInfo_Comptable(){
//   return this.db.collection('info_comptable').valueChanges({idField:'id'});
// }

// getMatieres(filiere:string,niveau:string){
//   return this.db.collection("matiere", ref=>ref.where("Filiere",'==',filiere).where("niveau",'==',niveau)).valueChanges()
// }

getUserById(id:any){
    return this.db.collection("parent").doc(id).valueChanges();
  }





  //supression d'élément
  deleteUser(id:any){
    return this.db.collection("annee").doc(id).delete();
  }


      //modification d'élement
      modifierBulletin(value:any,id:any){
        return this.db.doc(`bulletins/${id}`).update(value)
      }
}
