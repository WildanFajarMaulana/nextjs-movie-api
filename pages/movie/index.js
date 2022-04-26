import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@component/navbar";
import styles from "../../styles/Movie.module.css";
import React, { useEffect, useState } from "react";

const Movie = (props) => {
  const [cariBackup, setCariBackup] = React.useState("");
  const [cari, setCari] = React.useState([]);
  const [cek, setCek] = React.useState(false);

  // console.log(props.data.results);
  const postdata = props.data.results;

  const fetchDataByName = async () => {
    if (cariBackup == "") {
      setCek(false);
      setCari("");
      console.log(cariBackup.length);
    }
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=97cf02a3c22a1e7faa6f29c53573bbb8&language=en-US&query=${cariBackup}&page=1&include_adult=false`);
    const result = await data.json();

    setCari(result.results);
    console.log(result.results);
  };
  useEffect(() => {
    if (cek) {
      if (cariBackup.length <= 2) {
        setCek(false);
      } else {
        fetchDataByName();
        console.log("fetch search");
      }
    }
  }, [cariBackup]);

  let cekLast = false;

  if (cari == 0) {
    cekLast = false;
  } else {
    cekLast = true;
  }
  return (
    <div style={{ backgroundColor: "black" }}>
      <Navbar />
      <div className="wrapperMovie">
        <div className="container">
          <div className="row">
            <div className="col text-center mt-5">
              <h4 className={styles.th4}>Movie Popular</h4>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-group">
                <label style={{ color: "white" }}>Search Movie</label>
                <input
                  type="text"
                  className="form-control"
                  id="formGroupExampleInput"
                  placeholder="Search"
                  onChange={function (e) {
                    setCariBackup(e.target.value);
                    setCek(true);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            {cek ? (
              cekLast ? (
                cari.map((item) => (
                  <div key={item.id} className="col-md-3  mb-5">
                    <div className="card mt-5 ">
                      <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text"></p>
                        <div className="wrapperButton"></div>
                        <Link href={`movie/${item.id}`}>
                          <a className="btn btn-primary buttonDetail">Detail</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p style={{ color: "white" }}>Data Yang Anda Cari Tidak Ada</p>
              )
            ) : (
              postdata.map((item) => (
                <div key={item.id} className="col-md-3  mb-5">
                  <div className="card mt-5 ">
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text"></p>
                      <div className="wrapperButton"></div>
                      <Link href={`movie/${item.id}`}>
                        <a className="btn btn-primary buttonDetail">Detail</a>
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .wrapperMovie {
          background-color: black;
          width: 100%;
          min-height: 623px;
        }
        .card {
          min-height: 520px;
        }
        .card-title {
          font-size: 13px;
          display: block;
        }
        .buttonDetail {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default Movie;

export async function getServerSideProps(context) {
  const res = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=97cf02a3c22a1e7faa6f29c53573bbb8&language=en-US&page=1");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  };
}
