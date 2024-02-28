import css from "./ContactsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getContacts, getFilter } from "../../redux/selectors";
import { deleteContact } from "../../redux/contactsSlice";

export const ContactsList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter((contact) =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  if (!filteredContacts?.length) {
    return "No contacts found";
  }

  return (
    <ul className={css.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={css.list_item} key={id}>
          <p>
            {name} <span> </span>
            {number }
          </p>
          <button
            className={css.button_delete}
            type="submit"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};


