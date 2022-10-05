import React from "react";
import Banner from "../components/Banner";
import Navbar from "../components/NavBar";
import Row from "../components/Row";
import request from "..//Requset";
const HomeScreen = () => {
  return (
    <div className="w-screen">
      {/* Navbar */}
      <Navbar />
      <Banner />
      <Row title="NETFLIX ORIGINALS" fetchURL={request.fetchNetflixOriginals} isLargerRow/>
      <Row title="Trending Now" fetchURL={request.fetchTrending} />
      <Row title="Top Rated" fetchURL={request.fetchTopRated} />
      <Row title="Action Movies" fetchURL={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={request.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={request.fetchDocumentaries} />
      {/* Banner */}
      {/* Row */}
    </div>
  );
};

export default HomeScreen;
