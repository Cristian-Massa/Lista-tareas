import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNote } from "../../redux/actions/actions";


interface notes{
    id: number,
    note: string,
    fav: boolean
}

const Display = () => {
    const notes = useSelector((state: any) => state.notes);
    const dispatch = useDispatch();


    function handleDelete(id: number) {
        dispatch(removeNote(id));
    }
    console.log(notes)
    return (
        <div className="bg-gray-800 h-screen">
            {notes.map((element: notes, key: number): object => (
                <div key={key++} className="mx-2">
                    {element.fav ? (
                        <div className="bg-lime-600 my-2 h-20 rounded-lg grid grid-cols-[10%_80%_10%] items-center justify-between">
                            <button className="text-2xl text-white" onClick={() => handleDelete(element.id)}>x</button>
                            <p className="mx-5 overflow-scroll md:overflow-hidden">{element.note}</p>
                            <p className="text-4xl text-red-600">{element.fav ? '♥' : '♡'}</p>
                        </div>
                    ) : (
                        <div className="bg-lime-900 my-2 h-20 rounded-lg grid grid-cols-[10%_80%_10%] items-center justify-between">
                            <button className="text-2xl text-white" onClick={() => handleDelete(element.id)}>x</button>
                            <p className="mx-5 overflow-scroll md:overflow-hidden">{`${element.note}`}</p>
                            <p className="text-4xl">{element.fav ? '♥' : '♡'}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Display;