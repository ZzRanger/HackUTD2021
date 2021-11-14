import { User } from "firebase/auth";
import { addDoc, collection, doc, setDoc, getDocs, deleteDoc, query, where, DocumentData, QueryDocumentSnapshot} from "firebase/firestore";
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
    getUserItems
}