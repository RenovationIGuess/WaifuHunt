import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { Loading, LoadingContainer } from "../Loading";
import Chilling from "../../videos/chillin.gif";
import WaifuListPage from '../../pages/waifulist';

const ProtectedDb = () => {
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

  return <WaifuListPage />;
};

export default ProtectedDb;
