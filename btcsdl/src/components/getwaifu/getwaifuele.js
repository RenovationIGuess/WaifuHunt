import styled from "styled-components";
import { BsPlus, BsTrashFill } from "react-icons/bs";

export const GetButton = styled(BsPlus)`
  color: #fff;
  border-radius: 6px;
  font-size: 32px;
  padding: 4px;
  border: none;
  margin-right: 8px;
	/* transition: all 0.2s ease-in-out; */
	opacity: ${props => props.available ? "0.5" : "1"};
	pointer-events: ${props => props.available ? "none" : ""};

  background: linear-gradient(
    to top right,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff,
    #a6aaff,
    #f1b9f3,
    #9dfdfd,
    #7bb1ff
  );
  -webkit-background-clip: border-box;
  animation: rgb-text 50s infinite linear;
  background-size: 500% 500%;

  @keyframes rgb-text {
    0% {
      background-position: 250% -250%;
    }
    100% {
      background-position: -250% 250%;
    }
  }

  &:hover {
    background: #657ef8;
		color: #fff;
		cursor: pointer;
  }
`;

export const TrashButton = styled(BsTrashFill)`
  color: #fff;
  background: #c0c0c0;
  border-radius: 6px;
  font-size: 32px;
  padding: 8px;
  border: none;
  pointer-events: ${props => props.clickable ? "none" : ""};
  opacity: ${props => props.clickable ? "0.5" : "1"};

  &:hover {
      background: #9a9a9a;
      cursor: pointer;
  }
`
