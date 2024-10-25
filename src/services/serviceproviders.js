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
    deleteDoc,
    getDoc 
} from "firebase/firestore";

// Reference to the 'users' collection
const usersCollectionRef = collection(db, "users");

class ServiceProvidersDataService {
    // Add a new service provider (ensuring userType is set to 'serviceProvider')
    addServiceProvider = (newServiceProvider) => {
        newServiceProvider.userType = "serviceProvider"; // Enforce the userType to 'serviceProvider'
        return addDoc(usersCollectionRef, newServiceProvider);
    };

    // Update an existing service provider (only if userType is 'serviceProvider')
    updateServiceProvider = async (id, updatedServiceProvider) => {
        const serviceProviderDoc = doc(db, "users", id);
        const docSnap = await getDoc(serviceProviderDoc);

        // Check if the document exists and has the correct userType
        if (docSnap.exists() && docSnap.data().userType === "serviceProvider") {
            updatedServiceProvider.userType = "serviceProvider"; // Ensure the userType stays as 'serviceProvider'
            return updateDoc(serviceProviderDoc, updatedServiceProvider);
        } else {
            throw new Error("Document not found or is not a service provider");
        }
    };

    // Delete a service provider (only if userType is 'serviceProvider')
    deleteServiceProvider = async (id) => {
        const serviceProviderDoc = doc(db, "users", id);
        const docSnap = await getDoc(serviceProviderDoc);

        // Check if the document exists and has the correct userType
        if (docSnap.exists() && docSnap.data().userType === "serviceProvider") {
            return deleteDoc(serviceProviderDoc);
        } else {
            throw new Error("Document not found or is not a service provider");
        }
    };

    // Fetch all service providers (where userType is 'serviceProvider')
    getAllServiceProviders = async () => {
        const q = query(usersCollectionRef, where("userType", "==", "serviceProvider"));
        return await getDocs(q);
    };

    // Fetch a specific service provider by ID (only if userType is 'serviceProvider')
    getServiceProvider = async (id) => {
        const serviceProviderDoc = doc(db, "users", id);
        const docSnap = await getDoc(serviceProviderDoc);

        // Check if the document exists and has the correct userType
        if (docSnap.exists() && docSnap.data().userType === "serviceProvider") {
            return docSnap;
        } else {
            throw new Error("Document not found or is not a service provider");
        }
    };

    // Fetch limited service providers (where userType is 'serviceProvider')
    getLimitedServiceProviders = async (limitNumber) => {
        const q = query(usersCollectionRef, where("userType", "==", "serviceProvider"), limit(limitNumber));
        return await getDocs(q);
    };

}

export default new ServiceProvidersDataService();
