import { useContext, useState } from "react";
import { ContextApi } from "./Context";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { id } = useParams();
  let { data, setData } = useContext(ContextApi);
  const [url, setUrl] = useState(data[id].url);
  const [fields, setFields] = useState(data[id].fields);

  const handleChange = (e, ind) => {
    const { name, value } = e.target;
    const arr = [...fields];
    arr[ind][name] = value;
    setFields(arr);
  };

  const handleClick = e => {
    const arr = [...fields];
    if (e) arr.push({ key: "", value: "" });
    else arr.pop();
    setFields(arr);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const obj = { ...data };
    obj[id] = { url: url, fields: fields };
    setData(obj);
    history.back();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Edit</h1>
      <input
        type="text"
        name="url"
        value={url}
        onChange={e => setUrl(e.target.value)}
        required
        placeholder="url"
      />
      <div>
        {fields.map((e, ind) => (
          <aside key={"fields" + ind}>
            <input
              type="text"
              name="key"
              value={e.key}
              onChange={e => handleChange(e, ind)}
              required
              placeholder="key"
            />
            <input
              type="text"
              name="value"
              value={e.value}
              onChange={e => handleChange(e, ind)}
              required
              placeholder="value"
            />
          </aside>
        ))}
        <button type="button" onClick={() => handleClick(1)}>
          Add
        </button>
        {fields.length > 1 && (
          <button type="button" onClick={() => handleClick()}>
            Remove
          </button>
        )}
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Edit;
