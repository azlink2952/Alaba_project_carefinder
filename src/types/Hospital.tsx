// src/types/Hospital.ts
export type Hospital = {
    id?: string; // Optional field for Firestore document ID
    "hospital name": string;
    address: string;
    contact: string;
    state?: string; // Optional field for the state if you include it
  };
  