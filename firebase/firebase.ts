import { addDoc, collection, doc, setDoc, getDocs, deleteDoc} from "firebase/firestore";
import { db } from "../pages/_app";

export type Item = {
    id?: string, // firestore id
    name: string,
    category: string,
    date: Date,
    location: string,
    description: string
}
async function addEntry(item: Item) {
    return addDoc(collection(db,"items"),{
        name: item.name,
        category: item.category,
        date: item.date,
        location: item.location,
        description: item.description,
    }).then(() => alert("Item successfully added")).catch(() => alert("Error"));
}

async function updateEntry(item: Item) {
    return setDoc(doc(db,"items", item.id!),{
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


export {
    addEntry,
    updateEntry,
    readEntries,
    deleteEntry
}