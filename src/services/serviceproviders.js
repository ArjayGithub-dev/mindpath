import { db } from "../firebase";
import { 
    collection, 
    getDocs, 
    query, 
    where,
    limit,
    doc,
    addDoc,
    updateDoc,
    deleteDoc 
} from "firebase/firestore";

const serviceProvidersCollectionRef = collection(db, "users");

class ServiceProvidersDataService {
    addServiceProvider = (newServiceProvider) => {
        return addDoc(serviceProvidersCollectionRef, newServiceProvider);
    };

    updateServiceProvider = (id, updatedServiceProvider) => {
        const serviceProviderDoc = doc(db, "users", id);
        return updateDoc(serviceProviderDoc, updatedServiceProvider);
    };

    deleteServiceProvider = (id) => {
        const serviceProviderDoc = doc(db, "users", id);
        return deleteDoc(serviceProviderDoc);
    };

    getAllServiceProviders = () => {
        return getDocs(serviceProvidersCollectionRef);
    };

    getAllServiceProvider = (id) => {
        const serviceProviderDoc = doc(db, "users", id);
        return getDoc(serviceProviderDoc);
    };

    // New method to get total service providers of userType "serviceProviders"
    getTotalServiceProviders = async (limitNumber) => {
        const q = query(serviceProvidersCollectionRef, where("userType", "==", "serviceProvider"), limit(limitNumber));
        return await getDocs(q);
    };
}

export default new ServiceProvidersDataService();
