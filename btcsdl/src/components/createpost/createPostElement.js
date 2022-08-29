import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'

export const AllContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
`

export const LoadingContainer = styled.div`
	/* width: 100%;
	height: 625px; */
	padding: 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
`

export const StickyNavLeft = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
	margin-right: 16px;
`

export const StickyNavLeftHolder = styled.div`
	width: 232px;
`

export const StickyNavFixed = styled.div`
	position: fixed;
	top: 105px;
	height: auto;
	z-index: 800;
`

export const StickyNavScroll = styled.div`
	/* height: 100%; */
	overflow-y: auto;
	overflow-x: hidden
`

export const SideMenu = styled.div`
	border-radius: 16px;
	background-color: #fff;
	padding: 4px;
	width: 232px;
`

export const MenuItem = styled(LinkRouter)`
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 48px;
  border-radius: 16px;
  color: #8592a3;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  pointer-events: ${props => props.disabled ? 'none' : ''};

  &:hover {
    color: #657ef8;
    background-color: #eff2ff;
  }
`;

export const RootPageContainer = styled.div`
	display: flex;
	flex-grow: 1;
	justify-content: flex-start;
	padding-top: 105px;
`

export const RootPageLayout = styled.div`
	width: 896px;
	display: flex;
	justify-content: space-between;
`

export const MainPage = styled.div`
	width: 608px;
	/* background-color: #fff; */
	border-radius: 16px;
	margin-bottom: 60px;
`

export const MainPageWrp = styled.div`
	width: 608px;
	background-color: #fff;
	border-radius: 16px;
	margin-bottom: 60px;
`

export const NewArticleHeader = styled.div`
	height: 60px;
	line-height: 60px;
	border-bottom: 1px solid #f1f4f9;
	margin: 0 24px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const HeaderH1 = styled.h1`
	font-size: 16px;
	font-weight: bold;
`

export const NewArticleEditor = styled.div`
	width: auto;
	padding: 8px 24px 16px;
`

export const FormItemContainer = styled.div`
	margin-top: 16px;
	color: #2f3f56;
`

export const FormItemLabel = styled.span`
	color: #8592a3;
	margin-bottom: 8px;
	line-height: 20px;
	display: flex;
	align-items: center;
	font-size: 14px;
`

export const InputDiv = styled.div`
	height: 48px;
	font-size: 16px;
	position: relative;
	line-height: 20px;
`

export const InputDivContainer = styled.div`
	display: flex;
	border: ${props => props.borderChange ? '1px solid #657ef8' : '1px solid #f1f4f9'};
	border-radius: 8px;
	position: relative;
	height: 100%;
	transition: .3s border-color;

	&:hover {
		border-color: #657ef8;
	}
`

export const InputText = styled.input`
	padding-left: 24px;
	padding-right: 16px;
	border: none;
	flex-grow: 1;
	z-index: 2;
	background-color: #fff;
	outline: none;
	border-radius: 8px;
	height: 100%;
`

export const InputMaxCount = styled.span`
	color: #b2bdce;
	line-height: 48px;
	margin-right: 24px;
	font-size: 14px;
`

export const EditorContainer = styled.div`
	height: 200px;
	border: ${props => props.borderChange ? '1px solid #657ef8' : '1px solid #f1f4f9'};
	border-radius: 8px;
	position: relative;
	transition: .3s border-color;

	&:hover {
		border-color: #657ef8;
	} 
`

export const EditorInput = styled.textarea`
	padding: 16px 24px 0; 
	border: none;
	z-index: 2;
	background-color: #fff;
	outline: none;
	border-radius: 8px;
	width: 100%;
	height: calc(100% - 40px);
	overflow-x: hidden;
	overflow-y: auto;
	resize: none;
`

export const EditorMaxCount = styled.div`
	position: absolute;
	bottom: 0px;
	right: 12px;
	color: #b2bdce;
	line-height: 40px;
	font-size: 14px;
	z-index: 100;
`

export const PostImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-bottom: 8px;
`

export const PostImageTitle = styled.div`
	color: #8592a3;
	font-size: 14px;
`

export const ImageShowTitle = styled.div`
	font-size: 14px;
	color: #8592a3;
	line-height: 20px;
	margin: 4px 0;
`

export const PreviewPostImage = styled.img`
	width: 100%;
`

export const CreatePostFooter = styled.div`
	display: flex;
	gap: 16px;
	align-items: center;
	justify-content: center;
	margin-top: 16px;
	padding: 16px 0;
	border-top: 1px solid #f1f4f9;
`

export const SavePostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
  color: #657ef8;
  font-weight: bold;
  font-size: 14px;
  background-color: #e1e7ff;
  border: none;
  border-radius: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #657ef8;
    color: #fff;
    cursor: pointer;
  }
`;

export const CancelPostButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 32px;
  font-weight: bold;
  font-size: 14px;
  color: #8592a3;
  background-color: #f1f4f9;
  border: none;
  border-radius: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #657ef8;
    color: #fff;
    cursor: pointer;
  }
`;

export const CancelImage = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  color: #8592a3;
  background: #f1f4f9;
  font-size: 14px;
  border: none;
  border-radius: 16px;
  transition: all 0.2s ease-in-out;
  margin-left: 8px;

  &:hover {
    background-color: #8592a3;
    color: #000;
    cursor: pointer;
  }
`;

export const RightPart = styled.div`
	width: 272px;
	background: #fff;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-word;
  padding: 4px 16px;
	height: 215px;
`
