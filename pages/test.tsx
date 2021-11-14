import { User } from "firebase/auth";
import { addEntry, deleteEntry, Item, readEntries, updateEntry } from "../firebase/firebase";
import { auth } from "./_app";

const Test = () => {
    const user = auth.currentUser;
    const testCreate = () => {
        let item: Item = {
            name: "Bob",
            category: "pants",
            date: new Date(2021, 8, 3),
            location: "SU",
            description: "Nike black pants"
        }
        addEntry(user, item);
    }

    const testUpdate = () => {
        let item: Item = {
            id: "vONuBjnSEd4Tec95STog",
            name: "Bob",
            category: "pants",
            date: new Date(2021, 8, 3),
            location: "Library",
            description: "Nike black pants"
        }
        updateEntry(user, item);
    }

    const testRead = () => readEntries();

    const testDelete = () => {
        let item: Item = {
            id: "hi",
            name: "Bob",
            category: "pants",
            date: new Date(2021, 8, 3),
            location: "SU",
            description: "Nike black pants"
        }
        deleteEntry(item)
    };
    return (
        <>
        <button onClick={testCreate}> Create </button>
            <button onClick={testUpdate}> Update </button>
            <button onClick={testRead}> Read </button>
            <button onClick={testDelete}> Delete </button>
            </>
    )
}

export default Test;