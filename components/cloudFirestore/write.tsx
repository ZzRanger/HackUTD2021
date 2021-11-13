import firebase from 'firebase/app';
import 'firebase/firestore';

const WriteToCloudFirestore = ():JSX.Element => {

    const sendData = () => {
        try {
            // send data
            firebase.firestore().collection('users').doc('my_document').set({ id: "0",name: "JOSE" }).then(() => alert("Data was sent"))
        } catch (error) {
            console.log(error);
            alert(error);
        }
    
        
    }
    return (
        <button onClick= { sendData }> "Send data to cloud firestore" </button>
    )
}
export default WriteToCloudFirestore;