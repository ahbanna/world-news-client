import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../../Components/Loader";

const PostDetailsPage = () => {
  const { postID } = useParams();
  const [list, setList] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      const res = await axios.get(
        `https://basic-blog.teamrabbil.com/api/post-details/${postID}`
      );
      setList(res.data);
      console.log(res.data);
    };
    loadData();
  }, [postID]);
  return (
    <div>
      <h2>This is blog details page</h2>
      {list ? (
        <div className="container mx-auto my-24">
          <div className="grid grid-cols-1">
            <div className="card">
              <figure>
                <img src={list.postDetails.img} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{list.postDetails.title}</h2>
                <p>{list.postDetails.content}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default PostDetailsPage;
