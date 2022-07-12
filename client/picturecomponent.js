import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const FoodPicture = () => {
  const [pictures, setPicture] = useState([]);
  const [error, setError] = useState(null);
  const randomIdx = Math.floor(Math.random() * 15);

  const fetchImage = async () => {
    const res = await fetch(
      "https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images"
    );
    const json = await res.json();
    setPicture(json);
  };
  console.log(pictures);
  useEffect(() => {
    try {
      fetchImage();
    } catch (e) {
      setError(e);
      console.log(e);
    }
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else {
    return (
      <div>
        {pictures[randomIdx] == "http://www.fakeurl.io/fakeimage1.jpeg" ? (
          <div>'Not Found'</div>
        ) : pictures[randomIdx] == "http://www.fakeurl.io/fakeimage2.jpeg" ? (
          <div>'Not Found'</div>
        ) : pictures[randomIdx] == "http://www.fakeurl.io/fakeimage3.jpeg" ? (
          <div>'Not Found'</div>
        ) : pictures[randomIdx] == "http://www.fakeurl.io/fakeimage4.jpeg" ? (
          <div>'Not Found'</div>
        ) : pictures[randomIdx] == "http://www.fakeurl.io/fakeimage5.jpeg" ? (
          <div>'Not Found'</div>
        ) : (
          <img src={pictures[randomIdx]} key={pictures} />
        )}
      </div>
    );
  }
};
export default FoodPicture;

// const fetchImage = async () => {
//     const res = await fetch('https://us-central1-codesmith-curriculum-server.cloudfunctions.net/app/images');
//     const json = await res.json();
//     setPicture(json);
// }

{
  /* {
        pictures[randomIdx] == "http://www.fakeurl.io/fakeimage1.jpeg" ? <div>'Not Found'</div> 
        : pictures[randomIdx] == "http://www.fakeurl.io/fakeimage2.jpeg" ? <div>'Not Found'</div> 
        : pictures[randomIdx] == "http://www.fakeurl.io/fakeimage3.jpeg" ? <div>'Not Found'</div>
        : pictures[randomIdx] == "http://www.fakeurl.io/fakeimage4.jpeg" ? <div>'Not Found'</div>
        : pictures[randomIdx] == "http://www.fakeurl.io/fakeimage5.jpeg" ? <div>'Not Found'</div>
        : <img src={pictures[randomIdx]} key={pictures}/>
    } */
}

// -------------------------
// const fetchImage = async () => {
//     const res = await fetch(`https://foodish-api.herokuapp.com/images/pizza/pizza${randomIdx}.jpg`);
//     const imageBlob = await res.blob();
//     const imageObjectUrl = URL.createObjectURL(imageBlob);
//     setPicture([imageObjectUrl]);
//     setError(error);
// }

///// DIFFERENT WAYS OF WRITING ASYNC FUNCTIONS ^^ VVV

// async function fetchImage(){
//     const res = await fetch(`https://foodish-api.herokuapp.com/images/pizza/pizza${randomIdx}.jpg`);
//     const imageBlob = await res.blob();
//     const imageObjectUrl = URL.createObjectURL(imageBlob);
//     setPicture([imageObjectUrl]);
//     setError(error);
// }

{
  /* {pictures.map(pictures => <img src={pictures} key={pictures}/>)} */
}
