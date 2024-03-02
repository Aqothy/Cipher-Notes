import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    sortedNote: null
}

const noteSlice = createSlice({
    name: "note",
    initialState,
    reducers: {
        setSortedNotes: (state, action) => {
            state.sortedNote = action.payload
        }
    }
})

export const { setSortedNotes } = noteSlice.actions

export default noteSlice.reducer