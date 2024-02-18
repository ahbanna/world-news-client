import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const BlogList = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        "https://basic-blog.teamrabbil.com/api/post-newest"
      );
      setList(res.data);
    };
    loadData();
  }, []);

  return (
    <>
      {list ? (
        <div className="container mx-auto my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {list.map((item, index) => (
              <Link
                to={`/details/${item.id}`}
                key={index}
                className="card w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img src={item.img} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default BlogList;
