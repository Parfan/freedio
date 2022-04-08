function VideoComments({ comments }) {
  return (
    <section>
      <h2>Comentários</h2>
      {comments.map(comment => (
        <div>
          <h4>{comment.author}</h4>
          <p>{comment.content}</p>
        </div>
      ))}
    </section>
  )
}

export default VideoComments;