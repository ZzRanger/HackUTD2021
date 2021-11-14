import { User } from "firebase/auth";
import { addDoc, collection, doc, setDoc, getDocs, deleteDoc, query, where, DocumentData, QueryDocumentSnapshot, getDoc} from "firebase/firestore";
import { auth, db } from "../pages/_app";

export type Item = {
    id?: string, // firestore id
    name: string,
    categories: string,
    date: string,
    location: string,
    description: string
}
async function addEntry(user: User | null,item: Item) {
    console.log(user);
    return addDoc(collection(db,"items"),{
        user: user?.email,
        name: item.name,
        category: item.categories,
        date: item.date,
        location: item.location,
        description: item.description,
    }).then(() => alert("Item successfully added")).catch(() => alert("Error"));
}

async function updateEntry(user:User|null, item: Item) {
    return setDoc(doc(db,"items",item.id!),{
        user: user?.email,
        name: item.name,
        category: item.categories,
        date: item.date,
        location: item.location,
        description: item.description,
    }).then(() => alert("Item successfully added")).catch(() => alert("Error"));
}

async function readEntry(name: string) {
    // console.log("HUH");
    // console.log(name);
    let items: DocumentData[] = [];
    const querySnapshot = await getDocs(collection(db,"items"));
    querySnapshot.forEach((value) => items.push(value.data()));
    // console.log(items);
    let item = items.filter((value) => value.name === name);
    // console.log(item[0]);
    return item[0];

}
async function readEntries() {
    let items: DocumentData[] = [];
    const querySnapshot = await getDocs(collection(db,"items"));
    querySnapshot.forEach((value) => items.push(value.data()));
    return items;
    // TODO: In Lost, render cards in

//     querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// }); 
}

async function deleteEntry(item: Item) {
    let ids: string[] = [];
    let finalId = '';
    const querySnapshot = await getDocs(collection(db,"items"));
    querySnapshot.forEach((value) => ids.push(value.id));
    for (let id of ids) {
        let test = await getDoc(doc(db,"items",id));
        if (test.data()!.name === item.name) {
            finalId = id;
            break;
        }
    }
   
    return deleteDoc(doc(db, "items", finalId)).then(() => alert("Item successfully added")).catch(() => alert("Error"));
}

async function getUserItems(user: User | null) {
    let items: DocumentData[] = [];
    const q = query(collection(db, "items"), where("user", "==", user!.email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((value) => items.push(value.data()));
    return items;

}


export {
    addEntry,
    updateEntry,
    readEntries,
    deleteEntry,
    getUserItems,
    readEntry
}