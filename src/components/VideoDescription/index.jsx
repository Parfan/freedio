function VideoDescription({ title, author, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{author}</h3>
      <p>{description}</p>
    </div>
  )
}

export default VideoDescription;