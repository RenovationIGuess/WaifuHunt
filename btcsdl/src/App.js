import "./App.scss";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import SignInPage from "./pages/signin";
import AboutUsPage from "./pages/aboutus";
import AboutProject from "./pages/aboutpj";

import AuthContextProvider from "./contexts/AuthContext";
import WaifuContextProvider from "./contexts/WaifuContext";
import PostContextProvider from "./contexts/PostContext";
import UserContextProvider from "./contexts/UsersContext";
import WaifuCommentContextProvider from "./contexts/WaifuCommentContext";
import PostCommentContextProvider from "./contexts/PostCommentContext";
import PostCommentReplyContextProvider from "./contexts/PostCmtRepContext";

import ErrorNotFound from "./pages/error404";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import ProtectedDb from "./components/routing/ProtectedDb";
import ProtectedWaifu from "./components/routing/ProtectedWaifu";
import ProtectedRoll from "./components/routing/ProtectedGetWaifu";
import ProtectedCreatePost from "./components/routing/ProtectedCreatePost";
import ProtectedPostDetail from "./components/routing/ProtectedPostDetail";
import ProtectedPostList from "./components/routing/ProtectedPostList";
import ProtectedOtherProfile from "./components/routing/ProtectedOtherUser";
import ProtectedUserList from "./components/routing/ProtectedUserList";
import WaifuCommentReplyContextProvider from "./contexts/WaifuCmtRepContext";

function App() {
  return (
    <AuthContextProvider>
      <WaifuContextProvider>
        <PostContextProvider>
          <UserContextProvider>
            <WaifuCommentContextProvider>
              <WaifuCommentReplyContextProvider>
                <PostCommentContextProvider>
                  <PostCommentReplyContextProvider>
                    <Router>
                      <Routes>
                        <Route
                          path="/waifudb/:id/get"
                          element={<ProtectedRoll />}
                        />
                        <Route path="/waifudb/:id" element={<ProtectedWaifu />} />
                        <Route
                          path="/otheruser/:id"
                          element={<ProtectedOtherProfile />}
                        />
                        <Route path="/user/:id" element={<ProtectedRoute />} />
                        <Route
                          path="/posts/:id"
                          element={<ProtectedPostDetail />}
                        />
                        <Route path="/waifudb" element={<ProtectedDb />} exact />
                        <Route
                          path="/postlist"
                          element={<ProtectedPostList />}
                          exact
                        />
                        <Route
                          path="/about-pj"
                          element={<AboutProject />}
                          exact
                        />
                        <Route path="/about-us" element={<AboutUsPage />} exact />
                        <Route
                          path="/createpost"
                          element={<ProtectedCreatePost />}
                          exact
                        />
                        <Route path="/" element={<Home />} exact />
                        <Route
                          path="/userlist"
                          element={<ProtectedUserList />}
                          exact
                        />
                        <Route path="/signin" element={<SignInPage />} exact />
                        <Route path="*" element={<ErrorNotFound />} />
                      </Routes>
                    </Router>
                  </PostCommentReplyContextProvider>
                </PostCommentContextProvider>
              </WaifuCommentReplyContextProvider>
            </WaifuCommentContextProvider>
          </UserContextProvider>
        </PostContextProvider>
      </WaifuContextProvider>
    </AuthContextProvider>
  );
}

export default App;
