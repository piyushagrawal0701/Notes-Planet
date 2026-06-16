import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import API from "../Services/notesApi";

const CreateNote = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return toast.error("Title is required");
    }

    try {
      setLoading(true);

      await API.post("/", formData);

      toast.success("Note created successfully");

      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-indigo-600 font-medium">
          ← Back to Notes
        </Link>

        <div className="bg-white rounded-3xl shadow-sm sm:p-8 p-5 mt-4">
          <h1 className="sm:text-3xl  text-2xl font-bold text-slate-800 mb-6">
            Create New Note
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="title"
              placeholder="Enter note title"
              value={formData.title}
              onChange={handleChange}
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                p-4
                outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />

            <textarea
              rows="10"
              name="content"
              placeholder="Write your note..."
              value={formData.content}
              onChange={handleChange}
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                p-4
                outline-none
                focus:ring-2
                focus:ring-indigo-500
              "
            />

            <button
              disabled={loading}
              className="
                bg-gradient-to-r
                from-indigo-600
                to-violet-600
                text-white
                px-6
                py-3
                rounded-xl
                font-medium
                hover:opacity-90
                transition
              "
            >
              {loading ? "Creating..." : "Create Note"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNote;
