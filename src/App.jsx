import Home from "./components/home/Home";
import NewPost from "./components/posts/NewPost";
import PostPage from "./components/posts/PostPage";
import About from "./components/about/About";
import EditPost from "./components/edit/EditPost";
import Missing from "./components/missing/Missing";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Route, Routes } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useEffect } from 'react';
import './index.css';

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const { data, fetchError, isLoading } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts])

  return (
    <>
      <div className="App">
        <Header title="React JS Blog" />
        
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home isLoading={isLoading}
              fetchError={fetchError} />}>
            </Route>
            <Route exact path="/post" element={<NewPost />}>

            </Route>
            <Route path="/edit/:id" element={<EditPost />}>

            </Route>
            <Route path="/post/:id" element={<PostPage />}>

            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App;
