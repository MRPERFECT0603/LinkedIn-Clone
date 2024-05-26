import React, { useEffect, useState } from 'react';
import './feed.scss';
import { Avatar, rgbToHex } from '@mui/material';
import FeedOption from '../FeedOption/feedOption';
import ImageIcon from '@mui/icons-material/Image';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from '../Post/post';
import { db } from "../../config.js";
import { collection, addDoc, serverTimestamp, onSnapshot, orderBy, query } from "firebase/firestore";



function Feed() {
  const blue = rgbToHex("rgb(80, 141, 226)");
  const yellow = rgbToHex("rgb(179, 124, 48)");
  const orange = rgbToHex("rgb(196, 104, 75)");

  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // const fetchPosts = async () => {
    // try{
    // const postCol = collection(db , 'posts');
    // const postSnapshot = await getDocs(postCol);
    // setPosts(
    //   postSnapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     data: doc.data()
    //   })));
    // }
    // catch(error) {
    //   console.error('Error fetching posts:', error);
    // }
    // }
    //   fetchPosts();
    const postData = onSnapshot(query(collection(db, 'posts'),orderBy("timestamp" , "desc")), (snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => postData();
  }, []);


  const sendPost = async (e) => {
    e.preventDefault();
    try {
      if (input.trim() !== "") {
        // Check if the input is not empty or just whitespace
        const docRef = await addDoc(collection(db, "posts"), {
          name: "Vivek Shaurya", // Add the user's name or any other identifier
          description: "Student Jiit", // Add the user's description
          message: input.trim(),
          photoUrl: "", // Add the user's photo URL if available
          timestamp: serverTimestamp(),
        });
        console.log("Document written with ID: ", docRef.id);
        setInput(""); // Clear the input field after posting
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };
  return (
    <div className='feed'>
      <div className="addPost">
        <div className="img">
          <Avatar src="./Post2.jpeg" className='avatar' />
        </div>
        <div className="postForm">
          <form action="">
            <input value={input} onChange={e => setInput(e.target.value)}
              type="text" name="" id="" placeholder='Start a post' />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="options">
        <FeedOption Icon={ImageIcon} title='Media' colour={blue} />
        <FeedOption Icon={CalendarMonthIcon} title='Event' colour={yellow} />
        <FeedOption Icon={CalendarViewDayIcon} title='Write article' colour={orange} />
      </div>

      <div className="postSection">
        {posts && posts.map((post) => (
          <Post
            key={post.id}
            name={post.data.name ?? ''}
            desc={post.data.description ?? ''}
            time={post.data.timestamp?.toDate().toLocaleString() ?? ''}
            message={post.data.message ?? ''}
            img={post.data.photoUrl ?? ''}
          />
        ))}
        <Post name="Vivek Shaurya" desc="Student of Jaypee Institute of Information Technology" time="1w" message="This is the post i have made today." img="./Post2.jpeg" />
        <Post name="Vivek Shaurya" desc="Student of Jaypee Institute of Information Technology" time="1w" message="This is the post i have made today." img="./story7.jpeg" />
      </div>
    </div>
  )
}

export default Feed