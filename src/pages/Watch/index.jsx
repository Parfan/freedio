import { useParams } from "react-router-dom";
import VideoFrame from "../../components/VideoFrame";
import VideoDescription from "../../components/VideoDescription";
import VideoComments from "../../components/VideoComments";

const otherVideos = [
  {
    imgSrc: "https://picsum.photos/200",
    title: "Título",
    duration: "17m 36s"
  },
  {
    imgSrc: "https://picsum.photos/200",
    title: "Título",
    duration: "17m 36s"
  },
  {
    imgSrc: "https://picsum.photos/200",
    title: "Título",
    duration: "17m 36s"
  },
  {
    imgSrc: "https://picsum.photos/200",
    title: "Título",
    duration: "17m 36s"
  },
  {
    imgSrc: "https://picsum.photos/200",
    title: "Título",
    duration: "17m 36s"
  },
  {
    imgSrc: "https://picsum.photos/200",
    title: "Título",
    duration: "17m 36s"
  },
]

const videoComments = [
  {
    author: "Usuário",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae quod nostrum cupiditate sapiente sunt consequuntur iste dicta maxime non? Rerum quo omnis corporis consequatur ut, porro soluta nam numquam?"
  },
  {
    author: "Usuário",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae quod nostrum cupiditate sapiente sunt consequuntur iste dicta maxime non? Rerum quo omnis corporis consequatur ut, porro soluta nam numquam?"
  },
  {
    author: "Usuário",
    content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae quod nostrum cupiditate sapiente sunt consequuntur iste dicta maxime non? Rerum quo omnis corporis consequatur ut, porro soluta nam numquam?"
  }
]

function Watch() {
  const { video_id } = useParams();

  return (
    <div style={{
      padding: "50px",
      display: "flex",
      justifyContent: "center"
    }}>
      <main style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "35px",
        flexGrow: 1
      }}>
        <VideoFrame url="https://www.youtube.com/embed/rdcuOytxjKY" />
        <VideoDescription
          title={`Título do vídeo ${video_id}`}
          author="Autor do vídeo"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid beatae quod nostrum cupiditate sapiente sunt consequuntur iste dicta maxime non? Rerum quo omnis corporis consequatur ut, porro soluta nam numquam?"
        />
        <VideoComments comments={videoComments} />
      </main>
      <aside style={{
        width: "25%",
        cursor: "pointer"
      }}>
        {otherVideos.map(video => (
          <div style={{
            display: "flex",
            marginBottom: "20px"
          }}>
            <img
              style={{
                height: "100px",
                marginRight: "10px"
              }}
              src={video.imgSrc}
              alt=""
            />
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around"
            }}>
              <h3 style={{
                margin: 0
              }}>{video.title}</h3>
              <p style={{
                margin: 0
              }}>{video.duration}</p>
            </div>
          </div>
        ))}
      </aside>
    </div>
  )
}

export default Watch;