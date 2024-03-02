"use client";

import Note from "./Note";
import { useSelector, useDispatch } from "react-redux";
import { setSortedNotes } from "@/redux/features/noteSlice";
import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function NotesList() {
  const { user } = useSelector((state) => state.user);
  const { sortedNote } = useSelector((state) => state.note);
  const [modal, setModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.notes) {
      dispatch(setSortedNotes(user.notes));
    }
  }, [user.notes]);

  if (user?.notes.length === 0)
    return <p className="font-semibold text-xl">No notes currently...</p>;

  return (
    <section className="flex flex-wrap justify-center gap-[5rem] mt-[1rem]">
      {modal && <Modal modalData={modalData} setModal={setModal} />}
      {sortedNote?.map((note, index) => (
        <Note
          key={index}
          note={note}
          setModal={setModal}
          setModalData={setModalData}
        />
      ))}
    </section>
  );
}
