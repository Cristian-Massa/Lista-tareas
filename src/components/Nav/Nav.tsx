import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNote } from "../../redux/actions/actions";

interface noteTemplate {
  id: number
  note: string | undefined;
  fav: boolean;
}
let counter = 0

const Nav: React.FC = () => {
  const [note, setNote] = useState<noteTemplate>({ id: 0,note: "", fav: false });
  const [error, setError] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const store = useSelector((store: any) => store);
  const dispatch = useDispatch();



  function handleSubmit() {
    if (input.current?.value) {
      const newNote: noteTemplate = {
        id: counter,
        note: input.current?.value,
        fav: note.fav,
      };
      dispatch(addNote(newNote))
      counter++
    } else {
      setError(true);
    }
  }

  return (
    <nav className="bg-green-900 h-30 p-5 items-center justify-around grid gap-1">
      <label htmlFor="">Nota</label>
      <input type="text" ref={input} />
      <label htmlFor="" >Importante</label>
      <input
        type="checkbox"
        name=""
        id=""
        checked={note.fav}
        onClick={() => setNote((prevNote) => ({ ...prevNote, fav: !prevNote.fav }))}
      />
      <button onClick={handleSubmit} className="bg-green-950 p-1 rounded-md	">Agregar</button>
    </nav>
  );
}

export default Nav;