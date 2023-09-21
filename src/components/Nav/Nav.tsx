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
  let input = useRef<HTMLInputElement>(null);
  const store = useSelector((store: noteTemplate) => store);
  const dispatch = useDispatch();

console.log(store)

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
    <nav className="bg-green-900 h-30 p-5  items-center justify-around grid gap-1">
      <label htmlFor="" className="text-white">Nota</label>
      <input className="text-black" type="text" ref={input} />
      <label htmlFor="" className="text-white">Importante</label>
      <input
        type="checkbox"
        name=""
        id=""
        defaultChecked={note.fav}
        onClick={() => setNote((prevNote) => ({ ...prevNote, fav: !prevNote.fav }))}
      />
      <button onClick={handleSubmit} className="bg-green-950 p-1 text-white rounded-md	">Agregar</button>
    </nav>
  );
}

export default Nav;