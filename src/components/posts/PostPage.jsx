import { useParams, Link, useNavigate } from "react-router-dom";
import { useStoreState, useStoreActions } from 'easy-peasy';

const PostPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const post = getPostById(id);

  // handleDelete v1
  // const handleDelete = (id) => {
  //   const postsList = posts?.filter(post => post.id !== id);
  //   setPosts(postsList);
  //   navigate('/');
  // }
  // handleDelete v1

  // handleDelete v2
  // const handleDelete = async (id) => {
  //   try {
  //     await api.delete(`/posts/${id}`);
  //     const postsList = posts?.filter(post => post.id !== id);
  //     setPosts(postsList);
  //     navigate('/');
  //   } catch (err) {
  //     console.log(`Error: ${err.message}`);
  //   }
  // }
  // handleDelete v2
  // handleDelete v3
  const handleDelete = (id) => {
    deletePost(id);
    navigate('/');
  }
  // handleDelete v3


  return (
    <>
      <main className="PostPage">
        <article className="post">
          {post &&
            <>
              <h2>{post.title}</h2>
              <p className="postDate">{post.datetime}</p>
              <p className="postBody">{post.body}</p>
              <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
              <button className="deleteButton" onClick={() => handleDelete(post.id)}>
                Delete Post
              </button>
            </>
          }
          {!post &&
            <>
              <h2>Post Not Found</h2>
              <p>Well, that's disappointing.</p>
              <p>
                <Link to='/'>Visit Our Homepage</Link>
              </p>
            </>
          }
        </article>
      </main>
    </>
  )
}

export default PostPage;