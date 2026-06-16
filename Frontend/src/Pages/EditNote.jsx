import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
  Link,
} from "react-router-dom";
import toast from "react-hot-toast";
import API from "../Services/notesApi";

const EditNote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await API.get(`/${id}`);

        setFormData({
          title: res.data.data.title,
          content: res.data.data.content,
        });
      } catch {
        toast.error("Failed to load note");
      }
    };

    fetchNote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      return toast.error("Title is required");
    }

    try {
      setLoading(true);

      await API.put(`/${id}`, formData);

      toast.success("Note updated");

      navigate("/");
    } catch {
      toast.error("Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/"
          className="text-indigo-600 font-medium"
        >
          ← Back to Notes
        </Link>

        <div className="bg-white rounded-3xl shadow-sm p-8 mt-4">
          <h1 className="sm:text-3xl  text-2xl font-bold mb-6">
            Edit Note
          </h1>

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <input
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  title: e.target.value,
                })
              }
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                p-4
                focus:ring-2
                focus:ring-indigo-500
                outline-none
              "
            />

            <textarea
              rows="10"
              value={formData.content}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  content: e.target.value,
                })
              }
              className="
                w-full
                border
                border-slate-200
                rounded-xl
                p-4
                focus:ring-2
                focus:ring-indigo-500
                outline-none
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
              "
            >
              {loading
                ? "Updating..."
                : "Update Note"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditNote;