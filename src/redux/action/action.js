import { db } from "../../firebase/firebase"; // Adjust the import path
import { collection,getDocs,orderBy,query} from "firebase/firestore";
import {
  getSkills,getWork
} from "../type/type";
// skills
export const allSkills = () => {
  return async (dispatch) => {
    try {
      const skillsRef = collection(db, "skills"); // Use the initialized db
      const skillsQuery = query(skillsRef,orderBy("skillNum")); // Use the initialized db

      const snapshot = await getDocs(skillsQuery); // Use get() to retrieve data

      if (snapshot.empty) {
        throw new Error("No skills found"); // Handle the case when no skills are found
      }

      const skillsArray = snapshot.docs.map(doc => ({
        id: doc.id, // Use the document ID
        ...doc.data(), // Spread the document data
      }));
      console.log(skillsArray);
      dispatch({ type: getSkills, data: skillsArray });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Optionally dispatch an error action
      dispatch({ type: "FETCH_SKILLS_ERROR", error: error.message });
    }
  };
};
// work
export const allWork = () => {
  return async (dispatch) => {
    try {
      const workRef = collection(db, "work"); // Use the initialized db
      const workQuery = query(workRef,orderBy("workNum")); // Use the initialized db

      const snapshot = await getDocs(workQuery); // Use get() to retrieve data

      if (snapshot.empty) {
        throw new Error("No work found"); // Handle the case when no work are found
      }

      const workArray = snapshot.docs.map(doc => ({
        id: doc.id, // Use the document ID
        ...doc.data(), // Spread the document data
      }));
      // console.log(workArray);
      dispatch({ type: getWork, data: workArray });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Optionally dispatch an error action
      dispatch({ type: "FETCH_WORK_ERROR", error: error.message });
    }
  };
};
