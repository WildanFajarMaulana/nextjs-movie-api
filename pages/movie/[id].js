import Link from "next/link";
import Navbar from "../../component/navbar";
import styles from "../../styles/Movie.module.css";
const Post = (props) => {
  console.log(props);
  const data = props.data;
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="wrapperBox">
        <div className="container ">
          <div className="row">
            <div className="col text-center mt-3">
              <h4 className={styles.th4}>
                Detail Movie <span>{data.title}</span>
              </h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="wrapperCard">
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="cardDetail">
                        <img src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} />
                      </div>
                    </div>
                    <div className="col">
                      <div className="cardDeskripsi">
                        <h4>{data.title}</h4>
                        <p>{data.overview}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .wrapperBox {
          background-color: black;
          min-height: 624px;
        }
        .wrapperCard {
          background-color: white;
          border-radius: 10px;
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          width: 100%;
          margin-top: 25px;
          height: 500px;
          margin-bottom: 100px;
        }
        .wrapperBack {
          box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
          margin-top: 50px;
          background-color: white;
          min-width: 50px;
        }
        .icon-arrow {
          font-size: 50px;
          width: 20px;
          margin-left: 70px;
        }
        span {
          color: orange;
        }
        .cardDetail img {
          margin-top: 30px;
          height: 450px;
          width: 500px;
          background-color: red;
        }
        .cardDeskripsi {
          margin-top: 30px;
        }
        .cardDeskripsi h4 {
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const param = context.params;
  const res = await fetch(`
  https://api.themoviedb.org/3/movie/${param.id}?api_key=97cf02a3c22a1e7faa6f29c53573bbb8&language=en-US`);
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
