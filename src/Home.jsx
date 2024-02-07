import { useContext } from "react";
import { ContextApi } from "./Context";
import { Link } from "react-router-dom";

const Home = () => {
  let { data, setData } = useContext(ContextApi);
  const handleDelete = id => {
    const obj = { ...data };
    delete obj[id];
    setData(obj);
    window.sessionStorage.setItem("cache", JSON.stringify(obj));
  };
  return (
    <div className="homeVBlock">
      {data && Object.keys(data).length > 0
        ? Object.entries(data).map(val => (
            <p key={val[0] + "data"}>
              {val[1].url}&nbsp;
              <button>
                <Link to={`/edit/${val[0]}`}>Edit</Link>
              </button>
              &nbsp;
              <button onClick={() => handleDelete(val[0])}>Delete</button>
            </p>
          ))
        : "No Data Found"}
    </div>
  );
};

export default Home;
