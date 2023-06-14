interface Note {
  id: number;
  note: string;
  fav: boolean;
}

interface InitialState {
  notes: Note[];
}

const initialState: InitialState = {
  notes: [],
}

const reducer = (state: InitialState = initialState, action: any) => {
  switch (action.type) {
    case 'ADDNOTE':
      const newNote: Note = {
        id: action.payload.id,
        note: action.payload.note,
        fav: action.payload.fav,
      }
      return {
        ...state,
        notes: [...state.notes, newNote],
      }
      case 'REMOVENOTE':
        const updatedNotes: Note[] = state.notes.filter(note => note.id !== action.payload);
        return {
          ...state,
          notes: updatedNotes,
        }
    default:
      return state;
  }
}

export default reducer