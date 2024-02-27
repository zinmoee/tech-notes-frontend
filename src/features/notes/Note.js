import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectNoteById } from "./notesApiSlice";

const Note = ({ noteId }) => {
  const note = useSelector((state) => selectNoteById(state, noteId));

  const navigate = useNavigate();

  if (note) {
    const created = new Date(note.createdAt).toLocaleString('en-Us', { day: 'numeric', month: 'long' })
    
    const updated = new Date(note.updatedAt).toLocaleString('en-Us', { day: 'numeric', month: 'long' })

    const handelEdit = () => navigate(`/dash/notes/${noteId}`);

    return (
      <tr className="table__row note">
        <td className="table__cell note__status">
          {note.complete ? (
            <span className="note__status--completed">Compeleted</span>
          ) : (
            <span className="note__status--open">Open</span>
          )}
        </td>
        <td className={`table__cell note__created`}>{created}</td>
        <td className={`table__cell note__updated`}>{updated}</td>
        <td className={`table__cell note__title`}>{note.title}</td>
        <td className={`table__cell note__username`}>{note.username}</td>
        <td className={`table__cell`}>
          <button className="icon-button table__button" onClick={handelEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </td>
      </tr>
    );
  } else return null;
};

export default Note;
