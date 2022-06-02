import { useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { UserContext } from "../contexts/userContext";
import {
  Home,
  Login,
  Profile,
  Library,
  Course,
  Lesson,
  Plans,
  PurchaseCourse,
  NotFound
} from "./routes";

function PageRoutes() {
  // const { isLogged } = useContext(UserContext);
  // const navigate = useNavigate();

  // function protectedRoute(page) {
  //   if (isLogged) {
  //     return page;
  //   }
  //   navigate("/login");
  // }

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/" element={<Login />}>
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignUpForm />} />
      </Route>
      <Route path="user/:id">
        <Route index element={<Profile />} />
        <Route path="library" element={<Library />} />
      </Route>
      <Route path="course/:course_id">
        <Route index element={<Course />} />
        <Route path="lesson/:lesson_id" element={<Lesson />} />
      </Route>
      <Route path="plans" element={<Plans />} />
      <Route path="purchase">
        <Route index element={<PurchaseCourse />} />
        <Route path=":course_id" element={<PurchaseCourse />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PageRoutes;
