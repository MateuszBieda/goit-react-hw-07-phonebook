import { setFilter } from "../../redux/filterSlice";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "../../redux/selectors";
import css from "./Filter.module.css";

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <label className ={css.label_filter}>
      <p className ={css.paragraph_filter}>Find contacts by name</p>
      <input className ={css.input_filter}
        type="text"
        value={filter}
        onChange={(event) => dispatch(setFilter(event.target.value.trim()))}
      />
    </label>
  );
};
