function VideoFrame({ url }) {
  return (
    <iframe
      style={{
        width: "100%",
        aspectRatio: "16 / 9"
      }}
      src={url}
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    >
    </iframe>
  )
}

export default VideoFrame;