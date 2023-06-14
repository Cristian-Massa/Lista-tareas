import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../../redux/actions/actions";

const Display = () => {
    const notes = useSelector((state: any) => state.notes);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("Notas actualizadas:", notes);
    }, [notes]);

    function handleDelete(id: number) {
        dispatch(removeNote(id));
    }

    return (
        <div className="bg-gray-800 h-screen">
            {notes.map((note: any, index: number) => (
                <div key={index}>
                    {note.fav ? (
                        <div className="bg-lime-600 my-2 h-20 rounded-lg">
                            <button onClick={() => handleDelete(note.id)}>x</button>
                            <p className="mx-5 overflow-scroll md:overflow-hidden">{note.note}</p>
                            <p>{note.fav ? '♥' : '♡'}</p>
                        </div>
                    ) : (
                        <div className="bg-lime-900 my-2 h-20 rounded-lg">
                            <button onClick={() => handleDelete(note.id)}>x</button>
                            <p className="mx-5 overflow-scroll md:overflow-hidden">{note.note}</p>
                            <p>{note.fav ? '♥' : '♡'}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Display;