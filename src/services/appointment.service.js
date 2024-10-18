import { db } from "../firebase";
import { 
    collection, 
    getDocs, 
    getDoc, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc,
    query,
    limit
} from "firebase/firestore";

const appointmentCollectionRef = collection(db, "interviewAppointments")

class ApppointmentDataService {
    addAppointment = (newAppointment) => {
        return addDoc(appointmentCollectionRef, newAppointment);
    };

    updateAppointment = (id, updatedAppointment) => {
        const appointmentDoc = doc(db, "interviewAppointments", id);
        return updateDoc(appointmentDoc, updatedAppointment);
    };

    deleteAppointment = (id) => {
        const appointmentDoc = doc(db, "interviewAppointments", id);
        return deleteDoc(appointmentDoc)
    };

    getAllAppointments = () => {
        return getDocs(appointmentCollectionRef);
    };

    getAppointment = (id) => {
        const appointmentDoc = doc(db, "interviewAppointments", id);
        return getDoc(appointmentDoc);
    };

    getTotalAppointments = async (limitNumber) => {
        const q = query(appointmentCollectionRef, limit(limitNumber));
        return await getDocs(q);
    };
}

export default new ApppointmentDataService();