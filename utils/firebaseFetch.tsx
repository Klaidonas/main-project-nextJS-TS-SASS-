import { collection, getDocs } from "firebase/firestore"
import { BoxData, User } from "../interfaces"
import { firestore } from "./firebase"

export const fetchUsersFromFirestore = async() => {
  const usersColl = collection(firestore, 'users')  //sukuriama konstanta iskviesti firebase kolkecija "jobs"
  let localUsers:User[] =[]    //naujas lokalus masyvas
  await getDocs(usersColl)           //su firebase funkcija getDocs() gaunami duomenys is jobsColl
      .then((snapshot) => { 
          snapshot.forEach((doc) => {    //ciklu isgaunami snapshot duomenys
              localUsers.push({ ...doc.data(), id: doc.id }as User) //i masyva istumiama doc.data; "id: doc.id" - unique child key
          })
          console.log("localUsers: ", localUsers)
      })
      .catch(err => {
          console.log(err.message)    //erroru atveju isspauzdinamas erroras konsoleje 
      })
      return localUsers
}

export const fetchBoxesFromFirestore = async() => {
    const boxesColl = collection(firestore, 'box')  //sukuriama konstanta iskviesti firebase kolkecija "jobs"
    let localBoxes: BoxData[] =[]    //naujas lokalus masyvas
    await getDocs(boxesColl)           //su firebase funkcija getDocs() gaunami duomenys is jobsColl
        .then((snapshot) => { 
            snapshot.forEach((doc) => {    //ciklu isgaunami snapshot duomenys (.docs nezinau kam reikalingas )
                localBoxes.push({ ...doc.data(), id: doc.id }as BoxData) //i masyva istumiama doc.data; "id: doc.id" - unique child key
            })
            console.log("localBoxes: ", localBoxes)
        })
        .catch(err => {
            console.log(err.message)    //erroru atveju isspauzdinamas erroras konsoleje 
        })
        return localBoxes
}