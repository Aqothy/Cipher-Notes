"use client";

import { useDispatch, useSelector } from "react-redux";
import { setSortedNotes } from "@/redux/features/noteSlice";
import { useEffect, useState } from "react";

export default function Search() {
  const { notes } = useSelector((state) => state.user.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const dispatch = useDispatch();
  function handleSearch() {
    // Filter jobs based on the search term
    const filtered = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    dispatch(setSortedNotes(filtered));
  }

  useEffect(() => {
    let sortedNotes = [...notes];
    switch (sortOption) {
      case "Alphabetical":
        sortedNotes.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "Date":
        sortedNotes.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
      default:
        break;
    }
    dispatch(setSortedNotes(sortedNotes));
  }, [sortOption]);

  return (
    <section className="sm:w-[30%] border rounded-md bg-white flex flex-col justify-center items-center gap-[1rem] max-sm:py-[1rem]">
      <input
        type="text"
        className="border rounded-md p-[0.5rem] bg-[#F5F4F1] border-[#FCCB2A] focus:outline-none w-[80%]"
        placeholder="Search for a note..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button
        className="p-[0.3rem] rounded-md w-[80%] lg:w-[60%]"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,207,0,1) 0%, rgba(252,169,3,1) 100%)",
        }}
        onClick={() => handleSearch()}
      >
        <span
          className="p-[0.5rem] flex justify-center items-center rounded-md font-semibold xl:text-xl text-[#efebe1]"
          style={{
            background:
              "linear-gradient(180deg, rgba(252,169,3,1) 0%, rgba(255,207,0,1) 100%)",
          }}
        >
          Search by title
        </span>
      </button>
      <p className="font-bold">or</p>
      <select
        defaultValue={"DEFAULT"}
        className="bg-[#DCDCDC] sm:pl-2 rounded-md py-[0.8rem] max-xl:w-[80%] cursor-pointer border-[#FCCB2A] focus:outline-none border"
        onChange={(e) => setSortOption(e.target.value)}
      >
        <option disabled value="DEFAULT">
          Sort by...
        </option>
        <option>Alphabetical</option>
        <option>Date</option>
      </select>
    </section>
  );
}
