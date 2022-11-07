import styled from "styled-components";
import { IoImage } from "react-icons/io5";
import { MdOutlineAddReaction } from "react-icons/md";

export const CommentImage = styled.img`
  max-width: 100%;
  display: block;
  margin: 8px 0;
  height: auto;
  border-style: none;
`;

export const ReplyBoxToolBar = styled.div`
  font-size: 24px;
  height: 30px;
  position: relative;
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const CommentAddReactIcon = styled(MdOutlineAddReaction)`
  margin-right: 8px;
  cursor: pointer;
  color: #8592a3;

  &:hover {
    color: #657ef8;
  }
`;

export const CommentImageAddIcon = styled(IoImage)`
  margin-right: 8px;
  cursor: pointer;
  color: #8592a3;

  &:hover {
    color: #657ef8;
  }
`;
