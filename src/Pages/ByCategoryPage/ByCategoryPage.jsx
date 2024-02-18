import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import { postByCategory } from "../../APIRequest/APIRequest";
import Loader from "../../Components/Loader";
import axios from "axios";

const ByCategoryPage = () => {
  const { categoryID } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `https://basic-blog.teamrabbil.com/api/post-list/${categoryID}`
      );
      setList(res.data);
      console.log(res.data);
    };
    loadData();
  }, [categoryID]);
  return (
    <div>
      <h2 className="text-red-600 mt-24">
        this is category page with id {categoryID}
      </h2>
      {/* {list ? (
        <div className="container mx-auto my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {list.map((item, index) => (
              <Link className="card w-96 bg-base-100 shadow-xl" key={index}>
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
      )} */}
      {list ? (
        <div className="container mx-auto my-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {list.map((item, index) => (
              <Link
                to={`/details/${item.id}`}
                className="card w-96 bg-base-100 shadow-xl"
                key={index}
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
    </div>
  );
};

export default ByCategoryPage;
