'use client'
import { auth, firestore } from '../firebase/config';

const ShareHospitals = () => {
  const shareHospitals = async () => {
    const user = auth.currentUser;
    const hospitalsRef = firestore.collection('hospitals');
    hospitalsRef.add({
      userId: user.uid,
      hospitals,
    });
    // Send email or share link using Firebase's email and link-sharing functionalities
  };

  return (
    <div className="container mx-auto p-4">
      <button onClick={shareHospitals} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Share Hospitals
      </button>
    </div>
  );
};

export default ShareHospitals;