import { useContext, useState } from "react";
import { ContextApi } from "./Context";

const Create = () => {
  let { data, setData } = useContext(ContextApi);

  const [url, setUrl] = useState("");
  const [fields, setFields] = useState([{ key: "", value: "" }]);

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
    if (data) {
      const obj = { ...data };
      const id = Object.keys(data).length || 1;
      obj[id] = { url: url, fields: fields };
      setData(obj);
      history.back();
    } else {
      setData({ 1: { url: url, fields: fields } });
      history.back();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create</h1>
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

export default Create;
