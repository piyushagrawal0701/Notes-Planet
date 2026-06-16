import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../Services/notesApi";
import NoteCard from "../components/NoteCard";
import { FiSearch, FiFileText } from "react-icons/fi";

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      setLoading(true);

      const res = await API.get("/");

      setNotes(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const searchNotes = async (query) => {
    try {
      const res = await API.get(`/search?q=${query}`);
      setNotes(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim()) {
        searchNotes(search);
      } else {
        fetchNotes();
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [search]);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto sm:p-6 p-3">
        <div className="bg-gradient-to-r from-indigo-600 to-violet-600 rounded-3xl sm:p-8 p-6 text-white mb-8">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div>
              <h1 className="sm:text-4xl text-2xl font-bold">Notes Management System</h1>

              <p className="mt-2 text-indigo-100 max-md:text-md">
                Create, organize and manage your notes.
              </p>
            </div>

            <Link
              to="/create"
              className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
            >
              + Create Note
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-8">
          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-slate-500">Total Notes</p>

            <h2 className="text-3xl font-bold text-indigo-600">
              {notes.length}
            </h2>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm">
            <p className="text-slate-500">Search Results</p>

            <h2 className="text-3xl font-bold text-violet-600">
              {notes.length}
            </h2>
          </div>
        </div>

        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white border border-slate-200 rounded-2xl p-4 mb-8 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-12 w-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : notes.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center">
            <h2 className="text-2xl font-bold">No Notes Found</h2>

            <p className="text-slate-500 mt-2">Create your first note.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {notes.map((note) => (
              <NoteCard key={note._id} note={note} fetchNotes={fetchNotes} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
