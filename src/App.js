import { useState, useEffect } from "react";
import { getPost} from "./api";

import './App.css';
import PostCard from "./components/postCard";

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getPost().then((posts) => setData(posts));
  }, []);

  return (<div className="App">
    {
      data ? (
        data.map((e) => <PostCard title={e.title} body={e.body} />)
      ) : <p>No Data</p>
    }
  </div>);
}

export default App;
