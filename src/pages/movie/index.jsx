import React from "react";
import Nav from "../../components/navbar/navbar"
import Video from "../../components/video/video"
import Detail from "../../components/detail/detail"
import ListCard from "../../components/card/listCard"
import ListComment from "../../components/comment/listComment";
import CommentForm from "../../components/comment/form.jsx";
import Footer from "../../components/footer/footer.jsx";
export default function Home() {
    return (
      <>
        <Nav />
        <Video/>
        <Detail title="Lorem Ipsum"/>
        <ListCard length={8}/>
        <CommentForm/>
        <ListComment/>
        <Footer/>
      </>
    );
  }