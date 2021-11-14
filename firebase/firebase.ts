import { User } from "firebase/auth";
import { addDoc, collection, doc, setDoc, getDocs, deleteDoc, query, where} from "firebase/firestore";
import { auth, db } from "../pages/_app";

export type Item = {
    id?: string, // firestore id
    name: string,
    category: string,
    date: Date,
    location: string,
    description: string
}
async function addEntry(user:User|null, item: Item) {
    return addDoc(collection(db,"items"),{
        user: user?.email,
        name: item.name,
        category: item.category,
        date: item.date,
        location: item.location,
        description: item.description,
    }).then(() => alert("Item successfully added")).catch(() => alert("Error"));
}

async function updateEntry(user:User|null, item: Item) {
    return setDoc(doc(db,"items",item.id!),{
        user: user?.email,
        name: item.name,
        category: item.category,
        date: item.date,
        location: item.location,
        description: item.description,
    }).then(() => alert("Item successfully added")).catch(() => alert("Error"));
}

async function readEntries() {
    const querySnapshot = await getDocs(collection(db,"items"));
    return querySnapshot;
    // TODO: In Lost, render cards in

//     querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// }); 
}

async function deleteEntry(item:Item) {
    return deleteDoc(doc(db, "items", item.id!)).then(() => alert("Item successfully added")).catch(() => alert("Error"));
}

async function getUserItems(user: User) {
    const q = query(collection(db, "items"), where("user", "==", user.email));
    const querySnapshot = await getDocs(q);
    return querySnapshot;

}


export {
    addEntry,
    updateEntry,
    readEntries,
    deleteEntry
}