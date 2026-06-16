import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from "../Services/notesApi";
import toast from "react-hot-toast";

const ViewNote = () => {
  const { id } = useParams();

  const [note, setNote] = useState(null);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await API.get(`/${id}`);

        setNote(res.data.data);
      } catch {
        toast.error("Failed to load note");
      }
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return (
      <div className="min-h-screen bg-slate-50 flex justify-center items-center">
        <div className="h-12 w-12 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="text-indigo-600 font-medium"
        >
          ← Back to Notes
        </Link>

        <div className="bg-white rounded-3xl shadow-sm p-8 mt-4">
          <h1 className="sm:text-4xl text-2xl font-bold text-slate-800 mb-4">
            {note.title}
          </h1>

          <div className="flex flex-wrap gap-4 mb-8 text-sm text-slate-500">
            <span>
              Created:
              {" "}
              {new Date(
                note.createdAt
              ).toLocaleString()}
            </span>

            <span>
              Updated:
              {" "}
              {new Date(
                note.updatedAt
              ).toLocaleString()}
            </span>
          </div>

          <div className="border-t pt-6 whitespace-pre-wrap leading-8 text-slate-700">
            {note.content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;