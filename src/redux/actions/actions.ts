interface AddNoteAction {
    type: "ADDNOTE"
    payload: object
}
interface RemoveNoteAction {
    type: "REMOVENOTE";
    payload: number;
}

const ADDNOTE = "ADDNOTE"
const REMOVENOTE = "REMOVENOTE";

export const addNote = (note: object): AddNoteAction => {
    return {
        type: ADDNOTE,
        payload: note
    }
}

export const removeNote = (id: number): RemoveNoteAction => {
    return {
        type: REMOVENOTE,
        payload: id,
    };
};