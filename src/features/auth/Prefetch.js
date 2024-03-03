import { store } from "../../app/store";
import { notesApiSlice } from "../notes/notesApiSlice";
import { usersApiSlice } from "../users/usersApiSlice";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import React from "react";

const Prefetch = () => {
  useEffect(() => {
    // This is manual subscribing the API to not expire the state 
    // on page refreshing, in 5 seconds or 60 seconds.
    const notes = store.dispatch(notesApiSlice.endpoints.getNotes.initiate());
    const users = store.dispatch(usersApiSlice.endpoints.getUsers.initiate());

    return () => {
      // Unsubscribe for the unprotected Pages
      notes.unsubscribe();
      users.unsubscribe();
    };
  }, []);
  
  return  <Outlet />
};

export default Prefetch;
