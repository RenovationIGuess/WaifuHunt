import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  Img,
  SearchBarContainer,
  SearchBarIcon,
  SearchBar,
  User,
  UserAva,
  UserName,
  LeftSideNav,
  LeftNavWrap,
  LeftItem,
  LeftImg,
  Database,
  Us,
  Prj,
  ContactHeader,
  ContactTitle,
  MailWrap,
  MailTitle,
  MailCard,
  EmailAdd,
  EmailOwner,
  PaiFace,
  CopyRight,
  ContactFooter,
  ToTopButton,
  EditIcon,
  PostsContainer,
  CardHeader,
  CardUserInfo,
  CardArticle,
  PostAva,
  PostCardInfo,
  PostCardName,
  ArticleCardInfo,
  PostAvaImg,
  PostRouter,
  ArticleCardTitle,
  ArticleCardContent,
  ArticleCardPreview,
  ArticleCardTopic,
  ArticleCardTopicLabel,
  TopicRouter,
  ArticleCardFooter,
  ArticleCardData,
  CardDataItem,
  CardItemLike,
  CardIconLike,
  CardDataSpan,
  CardItemComment,
  CardIconComment,
  CardIconLikeFill,
  ArticleCardAction,
  CardAction,
  PostSelectMenu,
  SelectMenuItem,
  SelectMenuTitle,
  SelectMenuList,
  TrashFillIcon,
  SelectMenuItemSpan,
  EditPostIcon,
  CancelSelectMenuIcon,
  ArticleImage,
  NavRightPart,
  PostIconNavWrap,
  PostIconNav,
  PostIconNavContainer,
  NavPostDialog,
  NavPostNew,
  NavPostNewContent,
  NavPostNewItem,
  DialogPostButton,
  DialogSpan,
  NewPostIconWrap,
  NewPostIcon,
  LeftSideNavLoading,
  LeftSideNavLoadingIcon,
  LeftSideNavLoadingDiv,
  FollowDiv,
  FollowButton,
  FollowSpan,
  UnfollowButton,
} from "../profile/pfelement";

import { Loading } from "../Loading";

import Chilling from "../../videos/chillin.gif";
import LoadingNav from "../../videos/loadingNav.gif";
import NoPost from "../../videos/loadingPost.gif";
import WebLogo from "../../images/logoweb.png";
import LeftImage from "../../images/logoroll.svg";
import Paimoe from "../../images/paiface.png";
import EditBtn from "../../images/editbtn.png";
import InazumaBg from "../../images/inazuma.jpg";

import ToTopBtn from "../../images/arrow/RArrow.png";

import { RiLogoutBoxLine } from "react-icons/ri";
import { MdKeyboardArrowRight, MdErrorOutline } from "react-icons/md";
import { GrUserSettings } from "react-icons/gr";
/* import Footer from "../footer"; */
import { Link as LinkRouter } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll/modules";
import { AuthContext } from "../../contexts/AuthContext";
import { Toast } from "../toastMsg";

import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineCheckCircle } from "react-icons/ai";

import "../waifudb/waifulist.scss";
import "../profile/profile.scss";
import "../profile/title.scss";

import HutaoAva from "../../images/hutaostick.png";
import RaidenAva from "../../images/raidenfbi.png";
import DoggoAva from "../../images/realdoggo.png";

import { ToastMsg } from "../toastMsg";

import { TIME_STORAGE, ROLL_STORAGE } from "../../contexts/constants";

import { WaifuContext } from "../../contexts/WaifuContext";
import { PostContext } from "../../contexts/PostContext";
import { UserContext } from "../../contexts/UsersContext";

import Timer from "../timer";
import {
  AllContainer,
  LoadingContainer,
  MainPage,
  MenuItem,
  RightPart,
  RootPageContainer,
  RootPageLayout,
  SideMenu,
  StickyNavFixed,
  StickyNavLeft,
  StickyNavLeftHolder,
  StickyNavScroll,
} from "../createpost/createPostElement";
import {
  PHRArrowIcon,
  PHRLi,
  PHRLiSpan,
  PHRSelect,
  PHRSelectContainer,
  PHRSelectMenu,
  PHRSpan,
  PHRUl,
  PostDetailHeader,
  PostHeaderContent,
  PostHeaderLeft,
  PostHeaderLeftH1,
  PostHeaderMain,
  PostHeaderMask,
  PostHeaderRight,
  PostHeaderRightList,
  PostHeaderWrap,
} from "../postDetail/postDetailEle";
import {
  NoPostImg,
  NoPosts,
  PostNew,
  PostNewArrow,
  PostNewBtnSpan,
  PostNewButton,
  PostNewButtonDiv,
  PostNewButtonDivAfter,
  PostNewContent,
  PostNewSymbolIcon,
  PostNewTitle,
} from "./postListEle";
import { EmptyText } from "../waifudb/waifuElement";

const CreatePost = () => {
  const {
    authState: { user },
    logoutUser,
    increaseRoll,
    followUser,
    unfollowUser,
  } = useContext(AuthContext);

  const {
    waifuState: { waifus, waifusLoading },
    getWaifus,
  } = useContext(WaifuContext);

  const {
    postState: { posts, postsLoading },
    getPosts,
    likePost,
    unlikePost,
    deletePost,
  } = useContext(PostContext);

  const {
    userState: { users, usersLoading },
    /* loadAllUser, */
  } = useContext(UserContext);

  let body;
  let left;

  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [userAva, setUserAva] = useState(RaidenAva);

  // Ava handler
  const [AvaRaiden, setAvaRaiden] = useState(false);
  const [AvaHutao, setAvaHutao] = useState(false);
  const [AvaDoggo, setAvaDoggo] = useState(false);

  // Controlling preview post image
  const [isPreviewed, setIsPreviewed] = useState(true);

  // Controlling post menu
  const [isSelectMenuOn, setIsSelectMenuOn] = useState(false);

  // Controlling post header right menu
  const [isPHRMenuOn, setIsPHRMenuOn] = useState(false);
  const [newestPost, setNewestPost] = useState(true);
  const [myPost, setMyPost] = useState(false);
  const [follow, setFollow] = useState(false);

  // Modal message
  const [message, setMessage] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");

  // Used for searching
  const [searchValue, setSearchValue] = useState("");

  // Timeout
  const initTimer = 3600000; //in miliseconds, 3600000 = 1 hour

  // Controlling NavPostDialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Control SelectedMenu
  const [postSelectState, setPostSelectState] = useState([]);

  // Set a temporary post
  const [tempPosts, setTempPosts] = useState([]);

  const [rollTimes, setRollTimes] = useState(() => {
    const roll = window.localStorage.getItem(ROLL_STORAGE);
    if (roll) {
      return parseInt(roll);
    } else return 10;
  });
  const [deadline, setDeadline] = useState(() => {
    const dead = window.localStorage.getItem(TIME_STORAGE);
    if (dead) {
      return parseInt(dead);
    } else return null;
  });

  useEffect(() => {
    async function fetchData() {
      await getPosts();
    }
    fetchData();
  }, []);

  const startTimer = () => {
    const deadTime = Date.now() + initTimer;
    window.localStorage.setItem(TIME_STORAGE, deadTime);
    setDeadline(deadTime);
  };

  const handleDead = () => {
    setRollTimes(10);
  };

  const startReset = async () => {
    try {
      const response = await increaseRoll();
      if (response.success) {
        if (rollTimes > 1) {
          setRollTimes(rollTimes - 1);
        } else if (rollTimes === 1) {
          setRollTimes(rollTimes - 1);
          startTimer();
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    window.localStorage.setItem(ROLL_STORAGE, rollTimes);
  }, [rollTimes]);

  useEffect(() => {
    async function fetchData() {
      await getWaifus();
    }
    fetchData();
  }, []);

  const scrollBtn = () => {
    if (window.scrollY >= 80) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBtn);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleSearch = () => {
    if (searchValue !== "") {
      const searchIndex = waifus.findIndex((item) =>
        item.name.includes(searchValue)
      );
      if (searchIndex !== -1) {
        navigate(`/waifudb/${waifus[searchIndex].waifuid}`);
      } else {
        setMessage("Không tìm thấy tên waifu!");
        setDesc("Hãy nhập đúng tên waifu muốn tìm");
        setType("error");
        myFunction();
        setSearchValue("");
      }
    } else {
      setMessage("Không tìm thấy tên waifu!");
      setDesc("Hãy nhập đúng tên waifu muốn tìm");
      setType("error");
      myFunction();
    }
  };

  const handleLogout = () => logoutUser();

  useEffect(() => {
    switch (user.avatar) {
      case "RaidenAva":
        setAvaRaiden(true);
        setUserAva(RaidenAva);
        break;
      case "DoggoAva":
        setAvaDoggo(true);
        setUserAva(DoggoAva);
        break;
      case "HutaoAva":
        setAvaHutao(true);
        setUserAva(HutaoAva);
        break;
      default:
        setUserAva(RaidenAva);
        break;
    }
  }, [user.avatar]);

  const handleSelectMenu = (index) => {
    postSelectState[index].state = !postSelectState[index].state;
    for (const item of postSelectState) {
      if (item.postid !== postSelectState[index].postid) {
        item.state = false;
      }
    }
    // use to cause rerender
    setIsSelectMenuOn(!isSelectMenuOn);
  };

  const handleLikePost = async (postId) => {
    try {
      const afterLikedPost = await likePost({ postid: postId });
      if (afterLikedPost.success) {
        setMessage("Đã tính like vào post này nha :v!");
        setDesc("Đừng để ý thông báo này :3 :v!");
        setType("success");
        myFunction();
        const newPostIndex = posts.findIndex(
          (p) => p.postid === afterLikedPost.updatedPost.postid
        );
        posts[newPostIndex] = { ...afterLikedPost.updatedPost };
        setTempPosts([...posts]);
      } else {
        setMessage("Like post thất bại!");
        setDesc(afterLikedPost.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnlikePost = async (postId) => {
    try {
      const afterUnlikedPost = await unlikePost({ postid: postId });
      if (afterUnlikedPost.success) {
        setMessage("Sao unlike rồi :<!");
        setDesc("...");
        setType("success");
        myFunction();
        const newPostIndex = posts.findIndex(
          (p) => p.postid === afterUnlikedPost.updatedPost.postid
        );
        posts[newPostIndex] = { ...afterUnlikedPost.updatedPost };
        setTempPosts([...posts]);
      } else {
        setMessage("Unlike post thất bại!");
        setDesc(afterUnlikedPost.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletePost = async (id) => {
    try {
      const delResponse = await deletePost(id);
      if (delResponse.success) {
        setMessage("Xóa post thành công!");
        setDesc("Ơ kìa...");
        setType("success");
        myFunction();
        /* console.log(posts)
        posts.filter((p) => p.postid !== id);
        console.log(posts) */
        setTempPosts(tempPosts.filter((p) => p.postid !== id));
        setPostSelectState(postSelectState.filter((p) => p.postid !== id));
      } else {
        setMessage("Xóa post thất bại!");
        setDesc(delResponse.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleNewestPost = () => {
    setNewestPost(true);
    setMyPost(false);
    setFollow(false);
    setIsPHRMenuOn(false);
    setTempPosts([...posts]);
    /* posts = [...tempPosts]; */
    const newestPostSelectState = [];
    posts.map((p) =>
      newestPostSelectState.push({
        postid: p.postid,
        state: false,
      })
    );
    setPostSelectState(newestPostSelectState);
  };

  const handleMyPost = () => {
    setNewestPost(false);
    setMyPost(true);
    setFollow(false);
    setIsPHRMenuOn(false);
    /* posts = tempPosts.filter((p) => p.postAuthor === user._id); */
    const allOfMyPosts = posts.filter((p) => p.postAuthor === user._id);
    const myPostSelectState = [];
    allOfMyPosts.map((p) =>
      myPostSelectState.push({
        postid: p.postid,
        state: false,
      })
    );
    setTempPosts(allOfMyPosts);
    setPostSelectState(myPostSelectState);
  };

  const handleFollow = () => {
    setNewestPost(false);
    setMyPost(false);
    setFollow(true);
    setIsPHRMenuOn(false);
    /* posts = tempPosts.filter((p) => {
      const authorIndex = users.findIndex((u) => u._id === p.postAuthor);
      const author = users[authorIndex];
      const checkFollow = user.follow.includes(author.userid);
      if (checkFollow) return p;
    }); */
    const followedPosts = posts.filter((p) => {
      const authorIndex = users.findIndex((u) => u._id === p.postAuthor);
      const author = users[authorIndex];
      const checkFollow = user.follow.includes(author.userid);
      if (checkFollow) return p;
    });
    /* const followedPostState = [];
    followedPosts.map((p) =>
      followedPostState.push({
        postid: p.postid,
        state: false,
      })
    ); */
    setTempPosts(followedPosts);
    /* setPostSelectState(followedPostState); */
  };

  const handleFollowUser = async (followId) => {
    try {
      const afterFollowed = await followUser({ followid: followId });

      if (afterFollowed.success) {
        setMessage("Follow thành công!");
        setDesc("Cảm ơn vì đã hoạt động sôi nổi!");
        setType("success");
        myFunction();
      } else {
        setMessage("Follow thất bại!");
        setDesc(afterFollowed.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleUnfollowUser = async (followId) => {
    try {
      const afterUnfollowed = await unfollowUser({ followid: followId });

      if (afterUnfollowed.success) {
        setMessage("Unfollow thành công!");
        setDesc("Why... :<?");
        setType("success");
        myFunction();
      } else {
        setMessage("Follow thất bại!");
        setDesc(afterUnfollowed.message);
        setType("error");
        myFunction();
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (postsLoading) {
    body = (
      <LoadingContainer>
        <Loading src={Chilling} alt="loading-chilling" />
      </LoadingContainer>
    );
  } else if (posts.length === 0) {
    body = (
      <NoPosts>
        <NoPostImg src={NoPost} alt="no-posts" />
        <EmptyText>
          {newestPost
            ? "Chưa có bài viết nào được tạo"
            : myPost
            ? "Bạn chưa đăng bài viết nào"
            : "Bạn chưa follow ai hoặc người bạn follow chưa tạo bài viết nào"}
        </EmptyText>
      </NoPosts>
    );
  } else {
    if (tempPosts.length === 0 && newestPost) {
      posts.map((p) => tempPosts.push({ ...p }));
    }
    if (postSelectState.length === 0 && newestPost) {
      posts.map((p) =>
        postSelectState.push({
          postid: p.postid,
          state: false,
        })
      );
    }
    if (usersLoading) {
      body = (
        <LoadingContainer>
          <Loading src={Chilling} alt="loading-chilling" />
        </LoadingContainer>
      );
    } else {
      if (tempPosts.length === 0) {
        body = (
          <NoPosts>
            <NoPostImg src={NoPost} alt="no-posts" />
            <EmptyText>
              {myPost
                ? "Bạn chưa đăng bài viết nào"
                : "Bạn chưa follow ai hoặc người bạn follow chưa tạo bài viết nào"}
            </EmptyText>
          </NoPosts>
        );
      } else {
        if (!follow) {
          body = (
            <>
              {tempPosts.map((p, i) => {
                const postAuthorIndex = users.findIndex(
                  (u) => u._id === p.postAuthor
                );
                const author = users[postAuthorIndex];
                let displayAva = RaidenAva;
                switch (author.avatar) {
                  case "RaidenAva":
                    displayAva = RaidenAva;
                    break;
                  case "DoggoAva":
                    displayAva = DoggoAva;
                    break;
                  case "HutaoAva":
                    displayAva = HutaoAva;
                    break;
                  default:
                    displayAva = RaidenAva;
                    break;
                }
                const LikedPostIndex = p.postLikes.findIndex(
                  (u) => u === user.userid
                );
                const hasLiked = LikedPostIndex !== -1 ? true : false;
                const hasFollowedIndex = user.follow.findIndex(
                  (f) => f === author.userid
                );
                const isFollowed = hasFollowedIndex === -1 ? false : true;
                return (
                  <PostsContainer key={p.postid}>
                    <CardHeader>
                      <CardUserInfo>
                        <CardArticle>
                          <PostAva
                            to={
                              author.userid === user.userid
                                ? `/user/${author.userid}`
                                : `/otheruser/${author.userid}`
                            }
                          >
                            <PostAvaImg src={displayAva} alt="user-post-ava" />
                          </PostAva>
                          <PostCardInfo>
                            <PostCardName
                              to={
                                author.userid === user.userid
                                  ? `/user/${author.userid}`
                                  : `/otheruser/${author.userid}`
                              }
                            >
                              {author.name}
                            </PostCardName>
                            <ArticleCardInfo>{p.createdAt}</ArticleCardInfo>
                          </PostCardInfo>
                        </CardArticle>
                      </CardUserInfo>
                      <ArticleCardAction>
                        {user.userid === author.userid ? (
                          <CardAction isActive={postSelectState[i].state}>
                            <EditIcon
                              onClick={() => handleSelectMenu(i)}
                              src={EditBtn}
                              alt="edit-btn"
                            />
                          </CardAction>
                        ) : isFollowed ? (
                          <FollowDiv
                            style={{ marginRight: "16px", marginLeft: "0" }}
                          >
                            <UnfollowButton
                              onClick={() => handleUnfollowUser(author.userid)}
                            >
                              <FollowSpan>Đã theo dõi</FollowSpan>
                            </UnfollowButton>
                          </FollowDiv>
                        ) : (
                          <FollowDiv>
                            <FollowButton
                              onClick={() => handleFollowUser(author.userid)}
                            >
                              <FollowSpan>Theo dõi</FollowSpan>
                            </FollowButton>
                          </FollowDiv>
                        )}
                        <PostSelectMenu isActive={postSelectState[i].state}>
                          <SelectMenuTitle>Khác</SelectMenuTitle>
                          <SelectMenuList>
                            <LinkRouter to={`/posts/${p.postid}`}>
                              <SelectMenuItem>
                                <EditPostIcon src={EditBtn} alt="edit-post" />
                                <SelectMenuItemSpan>
                                  Chỉnh sửa bài viết
                                </SelectMenuItemSpan>
                              </SelectMenuItem>
                            </LinkRouter>
                            <SelectMenuItem
                              onClick={() => handleDeletePost(p.postid)}
                            >
                              <TrashFillIcon />
                              <SelectMenuItemSpan>
                                Xóa bài viết
                              </SelectMenuItemSpan>
                            </SelectMenuItem>
                            <SelectMenuItem onClick={() => handleSelectMenu(i)}>
                              <CancelSelectMenuIcon />
                              <SelectMenuItemSpan>Hủy</SelectMenuItemSpan>
                            </SelectMenuItem>
                          </SelectMenuList>
                        </PostSelectMenu>
                      </ArticleCardAction>
                    </CardHeader>
                    <PostRouter to={`/posts/${p.postid}`}>
                      <ArticleCardTitle>{p.postTitle}</ArticleCardTitle>
                      <ArticleCardContent>{p.postContent}</ArticleCardContent>
                      {p.postImage && (
                        <ArticleCardPreview>
                          <ArticleImage src={p.postImage} alt="post-image" />
                        </ArticleCardPreview>
                      )}
                    </PostRouter>
                    <ArticleCardTopic>
                      {p.hashtag.length !== 0 &&
                        p.hashtag.map((tag) => (
                          <ArticleCardTopicLabel>
                            <TopicRouter to="/">{"#" + tag}</TopicRouter>
                          </ArticleCardTopicLabel>
                        ))}
                    </ArticleCardTopic>
                    <ArticleCardFooter>
                      <ArticleCardData>
                        <CardDataItem>
                          <CardItemLike isLiked={hasLiked}>
                            {hasLiked ? (
                              <CardIconLikeFill
                                onClick={() => handleUnlikePost(p.postid)}
                              />
                            ) : (
                              <CardIconLike
                                onClick={() => handleLikePost(p.postid)}
                              />
                            )}
                            <CardDataSpan>{p.postLikes.length}</CardDataSpan>
                          </CardItemLike>
                        </CardDataItem>
                        <CardDataItem>
                          <CardItemComment to={`/posts/${p.postid}`}>
                            <CardIconComment />
                            <CardDataSpan>{p.comment.length}</CardDataSpan>
                          </CardItemComment>
                        </CardDataItem>
                      </ArticleCardData>
                    </ArticleCardFooter>
                  </PostsContainer>
                );
              })}
            </>
          );
        } else {
          body = (
            <>
              {tempPosts.map((p, i) => {
                const postAuthorIndex = users.findIndex(
                  (u) => u._id === p.postAuthor
                );
                const author = users[postAuthorIndex];
                let displayAva = RaidenAva;
                switch (author.avatar) {
                  case "RaidenAva":
                    displayAva = RaidenAva;
                    break;
                  case "DoggoAva":
                    displayAva = DoggoAva;
                    break;
                  case "HutaoAva":
                    displayAva = HutaoAva;
                    break;
                  default:
                    displayAva = RaidenAva;
                    break;
                }
                const LikedPostIndex = p.postLikes.findIndex(
                  (u) => u === user.userid
                );
                const hasLiked = LikedPostIndex !== -1 ? true : false;
                const hasFollowedIndex = user.follow.findIndex(
                  (f) => f === author.userid
                );
                const isFollowed = hasFollowedIndex === -1 ? false : true;
                return (
                  <PostsContainer key={p.postid}>
                    <CardHeader>
                      <CardUserInfo>
                        <CardArticle>
                          <PostAva
                            to={
                              author.userid === user.userid
                                ? `/user/${author.userid}`
                                : `/otheruser/${author.userid}`
                            }
                          >
                            <PostAvaImg src={displayAva} alt="user-post-ava" />
                          </PostAva>
                          <PostCardInfo>
                            <PostCardName
                              to={
                                author.userid === user.userid
                                  ? `/user/${author.userid}`
                                  : `/otheruser/${author.userid}`
                              }
                            >
                              {author.name}
                            </PostCardName>
                            <ArticleCardInfo>{p.createdAt}</ArticleCardInfo>
                          </PostCardInfo>
                        </CardArticle>
                      </CardUserInfo>
                      <ArticleCardAction>
                        {isFollowed ? (
                          <FollowDiv
                            style={{ marginRight: "16px", marginLeft: "0" }}
                          >
                            <UnfollowButton
                              onClick={() => handleUnfollowUser(author.userid)}
                            >
                              <FollowSpan>Đã theo dõi</FollowSpan>
                            </UnfollowButton>
                          </FollowDiv>
                        ) : (
                          <FollowDiv>
                            <FollowButton
                              onClick={() => handleFollowUser(author.userid)}
                            >
                              <FollowSpan>Theo dõi</FollowSpan>
                            </FollowButton>
                          </FollowDiv>
                        )}
                      </ArticleCardAction>
                    </CardHeader>
                    <PostRouter to={`/posts/${p.postid}`}>
                      <ArticleCardTitle>{p.postTitle}</ArticleCardTitle>
                      <ArticleCardContent>{p.postContent}</ArticleCardContent>
                      {p.postImage && (
                        <ArticleCardPreview>
                          <ArticleImage src={p.postImage} alt="post-image" />
                        </ArticleCardPreview>
                      )}
                    </PostRouter>
                    <ArticleCardTopic>
                      {p.hashtag.length !== 0 &&
                        p.hashtag.map((tag) => (
                          <ArticleCardTopicLabel>
                            <TopicRouter to="/">{"#" + tag}</TopicRouter>
                          </ArticleCardTopicLabel>
                        ))}
                    </ArticleCardTopic>
                    <ArticleCardFooter>
                      <ArticleCardData>
                        <CardDataItem>
                          <CardItemLike isLiked={hasLiked}>
                            {hasLiked ? (
                              <CardIconLikeFill
                                onClick={() => handleUnlikePost(p.postid)}
                              />
                            ) : (
                              <CardIconLike
                                onClick={() => handleLikePost(p.postid)}
                              />
                            )}
                            <CardDataSpan>{p.postLikes.length}</CardDataSpan>
                          </CardItemLike>
                        </CardDataItem>
                        <CardDataItem>
                          <CardItemComment to={`/posts/${p.postid}`}>
                            <CardIconComment />
                            <CardDataSpan>{p.comment.length}</CardDataSpan>
                          </CardItemComment>
                        </CardDataItem>
                      </ArticleCardData>
                    </ArticleCardFooter>
                  </PostsContainer>
                );
              })}
            </>
          );
        }
      }
    }
  }

  if (waifusLoading) {
    left = (
      <LeftSideNav>
        <LeftSideNavLoading>
          <LeftSideNavLoadingIcon src={LoadingNav} alt="loading-nav" />
          <LeftSideNavLoadingDiv>Đang tải</LeftSideNavLoadingDiv>
        </LeftSideNavLoading>
      </LeftSideNav>
    );
  } else if (waifus.length === 0) {
    left = (
      <LeftSideNav>
        <LeftNavWrap to={`/waifudb`}>
          <LeftImg src={LeftImage} alt="roll-waifu" />
          <LeftItem>Roll Waifu</LeftItem>
        </LeftNavWrap>
        <LeftNavWrap to="/waifudb">
          <Database />
          <LeftItem>Waifu Database</LeftItem>
        </LeftNavWrap>
        <LeftNavWrap to="/about-us">
          <Us />
          <LeftItem>Về chúng tôi</LeftItem>
        </LeftNavWrap>
        <LeftNavWrap to="/about-pj">
          <Prj />
          <LeftItem>Về Project</LeftItem>
        </LeftNavWrap>
      </LeftSideNav>
    );
  } else {
    left = (
      <>
        <MenuItem
          disabled={rollTimes === 0}
          onClick={startReset}
          to={`/waifudb/${
            waifus[Math.floor(Math.random() * waifus.length)].waifuid
          }/get`}
        >
          <LeftImg src={LeftImage} alt="roll-waifu" />
          <LeftItem>
            {rollTimes === 0 ? (
              <Timer
                countdownTimestampMs={deadline}
                handleDead={handleDead}
                rollTimes={rollTimes}
              />
            ) : (
              `Roll Waifu (${rollTimes})`
            )}
          </LeftItem>
        </MenuItem>
        <MenuItem to="/waifudb">
          <Database />
          <LeftItem>Waifu Database</LeftItem>
        </MenuItem>
        <MenuItem to="/about-us">
          <Us />
          <LeftItem>Về chúng tôi</LeftItem>
        </MenuItem>
        <MenuItem to="/about-pj">
          <Prj />
          <LeftItem>Về Project</LeftItem>
        </MenuItem>
      </>
    );
  }

  return (
    <>
      <AllContainer>
        <ToTopButton visible={visible} to={`/postlist`} onClick={toggleHome}>
          <img src={ToTopBtn} alt="to-top-btn" />
        </ToTopButton>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/postlist">
              <Img src={WebLogo} alt="weblogo" />
            </NavLogo>
            <SearchBarContainer>
              <SearchBarIcon />
              <SearchBar
                type="text"
                placeholder="Nhập tên waifu muốn tìm"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                autoComplete="off"
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSearch();
                  }
                }}
              />
            </SearchBarContainer>
            <NavRightPart>
              <PostIconNavContainer>
                <PostIconNavWrap onClick={() => setIsDialogOpen(!isDialogOpen)}>
                  <PostIconNav />
                </PostIconNavWrap>
                <NavPostDialog isTurnOn={isDialogOpen}>
                  <div>
                    <NavPostNew>
                      <NavPostNewContent>
                        <NavPostNewItem>
                          <DialogPostButton
                            onClick={() => navigate("/createpost")}
                          >
                            <NewPostIconWrap>
                              <NewPostIcon />
                            </NewPostIconWrap>
                            <DialogSpan>Đăng bài viết</DialogSpan>
                            <PostNewArrow />
                          </DialogPostButton>
                        </NavPostNewItem>
                        <NavPostNewItem>
                          <DialogPostButton
                            onClick={() => navigate("/createpost")}
                          >
                            <NewPostIconWrap>
                              <NewPostIcon />
                            </NewPostIconWrap>
                            <DialogSpan>Đăng bài viết</DialogSpan>
                            <PostNewArrow />
                          </DialogPostButton>
                        </NavPostNewItem>
                        <NavPostNewItem>
                          <DialogPostButton
                            onClick={() => navigate("/createpost")}
                          >
                            <NewPostIconWrap>
                              <NewPostIcon />
                            </NewPostIconWrap>
                            <DialogSpan>Đăng bài viết</DialogSpan>
                            <PostNewArrow />
                          </DialogPostButton>
                        </NavPostNewItem>
                      </NavPostNewContent>
                    </NavPostNew>
                  </div>
                </NavPostDialog>
              </PostIconNavContainer>
              <User onClick={handleOpen}>
                <UserAva src={userAva} alt="user-ava" />
                <UserName>{user.name}</UserName>
                <IoIosArrowDown />
              </User>
            </NavRightPart>
            {open && (
              <div className="dropdown">
                <div className="my-info">Thông tin của tôi</div>
                <LinkRouter to={`/user/${user.userid}`} className="menu-item">
                  <span className="icon-left">
                    <GrUserSettings />
                  </span>
                  Thiết lập hồ sơ
                  <span className="icon-right">
                    <MdKeyboardArrowRight />
                  </span>
                </LinkRouter>
                <div onClick={handleLogout} className="menu-item">
                  <span className="icon-left">
                    <RiLogoutBoxLine />
                  </span>
                  Đăng xuất
                  <span className="icon-right">
                    <MdKeyboardArrowRight />
                  </span>
                </div>
              </div>
            )}
          </NavbarContainer>
        </Nav>
        <StickyNavLeft>
          <StickyNavLeftHolder>
            <StickyNavFixed>
              <StickyNavScroll>
                <SideMenu>{left}</SideMenu>
              </StickyNavScroll>
            </StickyNavFixed>
          </StickyNavLeftHolder>
        </StickyNavLeft>
        <RootPageContainer>
          <RootPageLayout>
            <MainPage>
              <div>
                <PostNew>
                  <PostNewTitle>Mau đăng bài nào :3</PostNewTitle>
                  <PostNewContent>
                    <LinkRouter to="/createpost">
                      <PostNewButtonDiv>
                        <PostNewButton>
                          <PostNewSymbolIcon />
                          <PostNewBtnSpan>Đăng bài</PostNewBtnSpan>
                          <PostNewArrow />
                        </PostNewButton>
                      </PostNewButtonDiv>
                    </LinkRouter>
                    <LinkRouter to="/createpost">
                      <PostNewButtonDivAfter>
                        <PostNewButton>
                          <PostNewSymbolIcon />
                          <PostNewBtnSpan>Đăng bài</PostNewBtnSpan>
                          <PostNewArrow />
                        </PostNewButton>
                      </PostNewButtonDivAfter>
                    </LinkRouter>
                    <LinkRouter to="/createpost">
                      <PostNewButtonDivAfter>
                        <PostNewButton>
                          <PostNewSymbolIcon />
                          <PostNewBtnSpan>Đăng bài</PostNewBtnSpan>
                          <PostNewArrow />
                        </PostNewButton>
                      </PostNewButtonDivAfter>
                    </LinkRouter>
                  </PostNewContent>
                </PostNew>
              </div>
              <PostDetailHeader>
                <PostHeaderMask>
                  <PostHeaderWrap>
                    <PostHeaderContent>
                      <PostHeaderMain>
                        <PostHeaderLeft>
                          <PostHeaderLeftH1>Trang chủ</PostHeaderLeftH1>
                        </PostHeaderLeft>
                        <PostHeaderRight>
                          <PostHeaderRightList>
                            <PHRSelect>
                              <PHRSelectContainer
                                onClick={() => setIsPHRMenuOn(!isPHRMenuOn)}
                              >
                                <PHRSpan>
                                  {newestPost
                                    ? "Bài viết mới nhất"
                                    : myPost
                                    ? "Bài viết của tôi"
                                    : "Theo dõi"}
                                </PHRSpan>
                                <PHRArrowIcon isSelected={isPHRMenuOn} />
                              </PHRSelectContainer>
                              <PHRSelectMenu isSelected={isPHRMenuOn}>
                                <PHRUl>
                                  <PHRLi
                                    isSelected={newestPost}
                                    onClick={handleNewestPost}
                                  >
                                    <PHRLiSpan>Bài viết mới nhất</PHRLiSpan>
                                  </PHRLi>
                                  <PHRLi
                                    isSelected={myPost}
                                    onClick={handleMyPost}
                                  >
                                    <PHRLiSpan>Bài viết của tôi</PHRLiSpan>
                                  </PHRLi>
                                  <PHRLi
                                    isSelected={follow}
                                    onClick={handleFollow}
                                  >
                                    <PHRLiSpan>Theo dõi</PHRLiSpan>
                                  </PHRLi>
                                </PHRUl>
                              </PHRSelectMenu>
                            </PHRSelect>
                          </PostHeaderRightList>
                        </PostHeaderRight>
                      </PostHeaderMain>
                    </PostHeaderContent>
                  </PostHeaderWrap>
                </PostHeaderMask>
              </PostDetailHeader>
              {body}
            </MainPage>
            <RightPart>
              <ContactHeader>
                <ContactTitle>Liên lạc với chúng tôi</ContactTitle>
              </ContactHeader>
              <MailWrap>
                <MailTitle>Liên hệ</MailTitle>
              </MailWrap>
              <MailCard>
                <EmailAdd>abc@gmail.com</EmailAdd>
                <EmailOwner>Ramu</EmailOwner>
              </MailCard>
              <ContactFooter>
                <PaiFace src={Paimoe} alt="pai-logo" />
                <CopyRight>All Rights Reserved.</CopyRight>
              </ContactFooter>
            </RightPart>
          </RootPageLayout>
        </RootPageContainer>
      </AllContainer>

      <div id="snackbar">
        <Toast>
          {type === "success" ? (
            <AiOutlineCheckCircle className="alert-icon-success" />
          ) : (
            <MdErrorOutline className="alert-icon-error" />
          )}
          {message}
        </Toast>
        <ToastMsg>{desc}</ToastMsg>
      </div>
    </>
  );
};

function myFunction() {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}

export default CreatePost;
