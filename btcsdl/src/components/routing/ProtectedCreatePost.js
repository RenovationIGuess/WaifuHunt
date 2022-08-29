import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Loading, LoadingContainer } from "../Loading";
import Chilling from "../../videos/chillin.gif";
import CreatePostPage from '../../pages/createPost';

const ProtectedCreatePost = () => {
  const {
    authState: { authLoading, isAuthenticated },
  } = useContext(AuthContext);

  if (authLoading) {
    return (
      <LoadingContainer>
        <Loading src={Chilling} alt="loading-chilling" />
      </LoadingContainer>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/signin" />
  }

  return <CreatePostPage />;
};

export default ProtectedCreatePost;
