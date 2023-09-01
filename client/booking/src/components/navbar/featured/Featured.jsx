import useFetch from "../../../hooks/useFetch";
import "./featured.css";

export const Featured = () => {

  const {data,loading,error} = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london");

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ):(
        <>
      <div className="featuredItem">
        <img
          src="https://www.reuters.com/resizer/Y-Va7fDky4Q0J35gGiszFECjjHM=/960x0/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2NKW6SZRP5JMZPRCBUIYTY7UEM.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>India</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Madrin</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>London</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      </>
      )}
    </div>
  );
};
