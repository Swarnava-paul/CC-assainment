function Post({ title, body }) {
  console.log(title);
  return (
    <div>
      <p>Title : {title}</p>
      <p>Body : {body}</p>
    </div>
  )
}

export default Post;
