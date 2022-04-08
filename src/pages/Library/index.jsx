import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Library() {
  const navigate = useNavigate();

  setTimeout(() => navigate("/"), 5000);

  return (
    <h1>
      Você não tem nenhum curso no momento :(
    </h1>
  )
}

export default Library;