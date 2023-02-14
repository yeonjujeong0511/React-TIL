import { Route, Routes } from "react-router-dom";
import PostListPage from "../Components/PostListPage";
import LoginPage from "../Components/LoginPage";
import ResisterPage from "../Components/ResisterPage";
import WritePage from "../Components/WritePage";
import PostPage from "../Components/PostPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PostListPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<ResisterPage />} />
      <Route path="/write" element={<WritePage />} />
      <Route path="/@:username">
        <Route index element={<PostListPage />} />
        <Route path=":postid" element={<PostPage />} />
      </Route>
    </Routes>
  );
}
export default App;

// postListPage는 / 경로에서도 보여지고 /@:username경로에서도 보여진다.
// username URL 파라미터가 주어졌을떄는 특정 사용자가 작성한 포스트의 목록을 보여주고
// 이 URL 파라미터가 주어지지 않을때는 전체 포스트 목록을 보여준다.
