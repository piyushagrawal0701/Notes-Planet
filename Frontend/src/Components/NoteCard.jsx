import { Link } from "react-router-dom";
import API from "../Services/notesApi";
import toast from "react-hot-toast";

const NoteCard = ({ note, fetchNotes }) => {
  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Delete this note?"
    );

    if (!confirmed) return;

    try {
      await API.delete(`/${note._id}`);

      toast.success("Note deleted");

      fetchNotes();
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <h2 className="text-xl font-bold text-slate-800 mb-2 line-clamp-1">
        {note.title}
      </h2>

      <p className="text-slate-600 line-clamp-3 mb-5">
        {note.content}
      </p>

      <div className="text-sm text-slate-500 mb-5">
        Updated{" "}
        {new Date(
          note.updatedAt
        ).toLocaleDateString()}
      </div>

      <div className="flex gap-2 flex-wrap max-md:flex-col">
        <Link
          to={`/note/${note._id}`}
          className="flex-1 bg-slate-100 text-center py-2 rounded-xl"
        >
          View
        </Link>

        <Link
          to={`/edit/${note._id}`}
          className="flex-1 bg-indigo-600 text-white text-center py-2 rounded-xl"
        >
          Edit
        </Link>

        <button
          onClick={handleDelete}
          className="flex-1 bg-red-500 text-white px-4 py-2 rounded-xl cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;