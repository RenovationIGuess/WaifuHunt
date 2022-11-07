if (waifuLoading) {
    body = (
      <LoadingWrap>
        <Loading src={Chilling} alt="loading-chilling" />
      </LoadingWrap>
    );
    ratingSection = (
      <>
        <RatingSection>
          <RatingHeader>
            <RatingTitle>Rating của nhân vật</RatingTitle>
            <AverageRating>
              <AverageTop>
                <StarIcon />
                <AverageTitle>0</AverageTitle>
              </AverageTop>
              <AverageContent>Rating trung bình</AverageContent>
            </AverageRating>
          </RatingHeader>
          <ReviewText>Ratings</ReviewText>
          <RatingGuide>
            <i>
              Bạn chỉ có thể vote 1 lần bằng cách click vào rating tương ứng
              (Chưa rate)
            </i>
          </RatingGuide>
          <RatingRowContainer>
            <RatingRowItem>
              <RatingType>5</RatingType>
              <RowStarIcon />
              <RatingRange percent={"-100%"}></RatingRange>
              <RatingType style={{ marginLeft: "12px" }}>0</RatingType>
            </RatingRowItem>
            <RatingRowItem>
              <RatingType>4</RatingType>
              <RowStarIcon />
              <RatingRange percent={"-100%"}></RatingRange>
              <RatingType style={{ marginLeft: "12px" }}>0</RatingType>
            </RatingRowItem>
            <RatingRowItem>
              <RatingType>3</RatingType>
              <RowStarIcon />
              <RatingRange percent={"-100%"}></RatingRange>
              <RatingType style={{ marginLeft: "12px" }}>0</RatingType>
            </RatingRowItem>
            <RatingRowItem>
              <RatingType>2</RatingType>
              <RowStarIcon />
              <RatingRange percent={"-100%"}></RatingRange>
              <RatingType style={{ marginLeft: "12px" }}>0</RatingType>
            </RatingRowItem>
            <RatingRowItem>
              <RatingType>1</RatingType>
              <RowStarIcon />
              <RatingRange percent={"-100%"}></RatingRange>
              <RatingType style={{ marginLeft: "12px" }}>0</RatingType>
            </RatingRowItem>
          </RatingRowContainer>
        </RatingSection>
      </>
    );
  } else {
    if (commentsLoading) {
      commentSection = (
        <WaifuReplyContainer>
          <UserReplySection>
            <UserReplyLabel>Comment</UserReplyLabel>
            <UserReplyBody borderChange={isCommentFocused}>
              <UserReplyTextArea
                type="text"
                maxLength="1000"
                placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                value={userComment}
                onChange={(e) => setUserComment(e.target.value)}
                onBlur={() => setIsCommentFocused(false)}
                onFocus={() => setIsCommentFocused(true)}
              />
              <UserReplyMaxCount>{userComment.length}/1000</UserReplyMaxCount>
            </UserReplyBody>
            <ReplyBoxFooter>
              <SendButton>Gửi</SendButton>
            </ReplyBoxFooter>
          </UserReplySection>
          <PostReplyList>
            <ReplyListHeader>
              <ReplyListItem>Tất cả comments</ReplyListItem>
            </ReplyListHeader>
            <div>
              <div style={{ backgroundColor: "#fff" }}>
                <NoCommentsImgContainer>
                  <NoCommentsImg
                    src={LoadingComments}
                    alt="comments-is-being-fetch"
                  />
                </NoCommentsImgContainer>
              </div>
            </div>
            <EndOfCommentSection>
              <Nomore>Không còn bình luận nào nữa ~.~</Nomore>
            </EndOfCommentSection>
          </PostReplyList>
        </WaifuReplyContainer>
      );
    } else {
      if (usersLoading) {
        commentSection = (
          <WaifuReplyContainer>
            <UserReplySection>
              <UserReplyLabel>Comment</UserReplyLabel>
              <UserReplyBody borderChange={isCommentFocused}>
                <UserReplyTextArea
                  type="text"
                  maxLength="1000"
                  placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                  value={userComment}
                  onChange={(e) => setUserComment(e.target.value)}
                  onBlur={() => setIsCommentFocused(false)}
                  onFocus={() => setIsCommentFocused(true)}
                />
                <UserReplyMaxCount>{userComment.length}/1000</UserReplyMaxCount>
              </UserReplyBody>
              <ReplyBoxFooter>
                <SendButton>Gửi</SendButton>
              </ReplyBoxFooter>
            </UserReplySection>
            <PostReplyList>
              <ReplyListHeader>
                <ReplyListItem>Tất cả comments</ReplyListItem>
              </ReplyListHeader>
              <div>
                <div style={{ backgroundColor: "#fff" }}>
                  <NoCommentsImgContainer>
                    <NoCommentsImg
                      src={LoadingComments}
                      alt="comments-is-being-fetch"
                    />
                  </NoCommentsImgContainer>
                </div>
              </div>
              <EndOfCommentSection>
                <Nomore>Không còn bình luận nào nữa ~.~</Nomore>
              </EndOfCommentSection>
            </PostReplyList>
          </WaifuReplyContainer>
        );
      } else {
        if (!repliesLoading) {
          const waifuComments = comments.filter(
            (c) => c.waifuid === currentWaifuId
          );

          if (controlReplyBox.length === 0) {
            waifuComments.forEach((c) => {
              const currentCommentReplies = replies.filter(
                (r) => r.commentid === c.commentid
              );
              let replyControlArr = [];
              let replyMenuControlArr = [];
              currentCommentReplies.forEach((r) => {
                replyControlArr.push({
                  replyid: r.replyid,
                  isOn: false,
                  value: "",
                  isFocused: false,
                });

                replyMenuControlArr.push({
                  replyid: r.replyid,
                  /* replyState: false, */
                  state: false,
                });
              });

              controlReplyBox.push({
                commentid: c.commentid,
                isOn: false,
                value: "",
                isFocused: false,
                replyBox: [...replyControlArr],
              });

              commentMenuState.push({
                commentid: c.commentid,
                state: false,
                replyPopupState: false,
                replyMenuState: [...replyMenuControlArr],
              });

              editContent.push({
                commentid: c.commentid,
                isOn: false,
                value: "",
                isFocused: false,
                replyBox: [...replyControlArr],
              });
            });
          }

          commentSection = (
            <WaifuReplyContainer>
              <UserReplySection>
                <UserReplyLabel>Comment</UserReplyLabel>
                <UserReplyBody borderChange={isCommentFocused}>
                  <UserReplyTextArea
                    type="text"
                    maxLength="1000"
                    placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                    value={userComment}
                    onChange={(e) => setUserComment(e.target.value)}
                    onBlur={() => setIsCommentFocused(false)}
                    onFocus={() => setIsCommentFocused(true)}
                  />
                  <UserReplyMaxCount>
                    {userComment.length}/1000
                  </UserReplyMaxCount>
                </UserReplyBody>
                <ReplyBoxFooter>
                  <SendButton onClick={() => handleSendComment(waifu.waifuid)}>
                    Gửi
                  </SendButton>
                </ReplyBoxFooter>
              </UserReplySection>
              <PostReplyList>
                <ReplyListHeader>
                  <ReplyListItem>Tất cả comments</ReplyListItem>
                </ReplyListHeader>
                <div>
                  <div style={{ backgroundColor: "#fff" }}>
                    {waifuComments.length === 0 ? (
                      <NoCommentsImgContainer>
                        <NoCommentsImg src={NoComments} alt="no-comment-img" />
                      </NoCommentsImgContainer>
                    ) : (
                      waifuComments.map((c, i) => {
                        const currentCommentReplies = replies.filter(
                          (r) => r.commentid === c.commentid
                        );
                        const findIndex = users.findIndex(
                          (u) => u.userid === c.userid
                        );
                        const commentHostInfo = users[findIndex];
                        let hostAva = RaidenAva;
                        switch (commentHostInfo.avatar) {
                          case "RaidenAva":
                            hostAva = RaidenAva;
                            break;
                          case "DoggoAva":
                            hostAva = DoggoAva;
                            break;
                          case "HutaoAva":
                            hostAva = HutaoAva;
                            break;
                          default:
                            hostAva = RaidenAva;
                            break;
                        }
                        const commentContent = c.value;
                        const hasLikeThisComment = c.likeCount.includes(
                          user.userid
                        );
                        const postUploadedDate = new Date(
                          c.createdAt
                        ).getTime();
                        let seconds = Math.round(
                          Math.abs(currentTime - postUploadedDate) / 1000
                        ); // round away miliseconds
                        const days = Math.floor(seconds / 86400);
                        seconds -= days * 86400;
                        const hours = Math.floor(seconds / 3600);
                        seconds -= hours * 3600;
                        const minutes = Math.floor(seconds / 60);
                        seconds -= minutes * 60;
                        let displayPostedDate;
                        if (days === 0) {
                          if (hours === 0) {
                            if (minutes === 0) {
                              displayPostedDate = `${seconds} giây trước`;
                            } else {
                              displayPostedDate = `${minutes} phút trước`;
                            }
                          } else {
                            displayPostedDate = `${hours} giờ trước`;
                          }
                        } else {
                          if (days >= 365) {
                            const years = Math.floor(days / 365);
                            displayPostedDate = `${years} năm trước`;
                          } else {
                            displayPostedDate = `${days} ngày trước`;
                          }
                        }
                        return (
                          <>
                            <CommendCard key={i}>
                              <div className="comment-card_left">
                                <CommentCardAvatar>
                                  <CommentAvatar
                                    src={hostAva}
                                    alt="comment-ava"
                                  />
                                </CommentCardAvatar>
                              </div>
                              <CommentCardContainer>
                                <CCHeader>
                                  <ReplyCardAccount>
                                    <ReplyCardRouter
                                      to={
                                        commentHostInfo.userid === user.userid
                                          ? `/user/${commentHostInfo.userid}`
                                          : `/otheruser/${commentHostInfo.userid}`
                                      }
                                    >
                                      <RCRouterSpan>
                                        {commentHostInfo.name}
                                      </RCRouterSpan>
                                      {/* {commentHostInfo.userid === user.userid && (
                                        <CommentHostSpan>Tác giả</CommentHostSpan>
                                      )} */}
                                    </ReplyCardRouter>
                                    <RCFloor>
                                      <span>
                                        ID của người dùng&nbsp;:&nbsp;
                                        {commentHostInfo.userid}
                                      </span>
                                      <RCFloorTags></RCFloorTags>
                                    </RCFloor>
                                  </ReplyCardAccount>
                                  <CCOperation>
                                    <CCAction>
                                      <CCActionIcon
                                        isSelected={commentMenuState[i].state}
                                        isUnClickable={editContent[i].isOn}
                                        onClick={() => handleCommentMenu(i)}
                                      />
                                      <CCSelectMenu
                                        isOn={commentMenuState[i].state}
                                      >
                                        <CCSelectMenuTitle>
                                          Khác
                                        </CCSelectMenuTitle>
                                        <CCUl>
                                          {commentHostInfo.userid ===
                                          user.userid ? (
                                            <>
                                              <CCLi
                                                onClick={() =>
                                                  handleOpenEditCmtContent(i)
                                                }
                                              >
                                                <EditComment />
                                                <CCLiSpan>Chỉnh sửa</CCLiSpan>
                                              </CCLi>
                                              <CCLi
                                                onClick={() =>
                                                  handleDeleteWaifuComment(
                                                    i,
                                                    c.commentid
                                                  )
                                                }
                                              >
                                                <NotVisible />
                                                <CCLiSpan>
                                                  Xóa bình luận
                                                </CCLiSpan>
                                              </CCLi>
                                            </>
                                          ) : (
                                            <CCLi>
                                              <BlockUser />
                                              <CCLiSpan>
                                                Chặn người dùng
                                              </CCLiSpan>
                                            </CCLi>
                                          )}
                                        </CCUl>
                                      </CCSelectMenu>
                                    </CCAction>
                                  </CCOperation>
                                </CCHeader>
                                {editContent[i].isOn ? (
                                  <CommentReplyWrap
                                    isAppear={editContent[i].isOn}
                                  >
                                    <UserReplyBody
                                      borderChange={editContent[i].isFocused}
                                    >
                                      <UserReplyTextArea
                                        type="text"
                                        maxLength="1000"
                                        placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                        value={editContent[i].value}
                                        onChange={(e) =>
                                          handleEditCmtValue(i, e.target.value)
                                        }
                                        onBlur={() => handleIsEditCmtBlur(i)}
                                        onFocus={() =>
                                          handleIsEditCmtFocused(i)
                                        }
                                      />
                                      <UserReplyMaxCount>
                                        {editContent[i].value.length}/1000
                                      </UserReplyMaxCount>
                                    </UserReplyBody>
                                    <ReplyBoxFooter
                                      style={{ marginBottom: "12px" }}
                                    >
                                      <CancelEditCmtButton
                                        onClick={() => handleCancelEditCmt(i)}
                                      >
                                        Hủy
                                      </CancelEditCmtButton>
                                      <SendButton
                                        onClick={() =>
                                          handleSendEditCmt(i, c.commentid)
                                        }
                                      >
                                        Gửi
                                      </SendButton>
                                    </ReplyBoxFooter>
                                  </CommentReplyWrap>
                                ) : (
                                  <CCContent>{commentContent}</CCContent>
                                )}
                                <RCOpBottom>
                                  <RCTime>{displayPostedDate}</RCTime>
                                  <RCBottomRight>
                                    <RCItem onClick={() => handleReplyBoxOn(i)}>
                                      <RCItemIconComment />
                                      <RCItemSpan>Trả lời</RCItemSpan>
                                    </RCItem>
                                    <RCItem>
                                      {hasLikeThisComment ? (
                                        <RCItemIconLiked
                                          onClick={() =>
                                            handleUnlikeComment(c.commentid)
                                          }
                                        />
                                      ) : (
                                        <RCItemIconLike
                                          onClick={() =>
                                            handleLikeComment(c.commentid)
                                          }
                                        />
                                      )}
                                      <RCItemSpan>
                                        {c.likeCount.length}
                                      </RCItemSpan>
                                    </RCItem>
                                  </RCBottomRight>
                                </RCOpBottom>
                                <CommentReplyWrap
                                  isAppear={controlReplyBox[i].isOn}
                                >
                                  <UserReplyBody
                                    borderChange={controlReplyBox[i].isFocused}
                                  >
                                    <UserReplyTextArea
                                      type="text"
                                      maxLength="200"
                                      placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                      value={controlReplyBox[i].value}
                                      onChange={(e) =>
                                        handleReplyBoxValue(i, e.target.value)
                                      }
                                      onBlur={() => handleIsReplyBlur(i)}
                                      onFocus={() => handleIsReplyFocused(i)}
                                    />
                                    <UserReplyMaxCount>
                                      {controlReplyBox[i].value.length}/200
                                    </UserReplyMaxCount>
                                  </UserReplyBody>
                                  <ReplyBoxFooter>
                                    <SendButton
                                      onClick={() =>
                                        handleSendReply(
                                          i,
                                          c.commentid,
                                          controlReplyBox[i].value
                                        )
                                      }
                                    >
                                      Gửi
                                    </SendButton>
                                  </ReplyBoxFooter>
                                </CommentReplyWrap>
                                <ReplyCardReplies>
                                  {currentCommentReplies.length > 0 &&
                                  currentCommentReplies.length <= 2
                                    ? currentCommentReplies.map((r, iter) => {
                                        const findReplyUserIndex =
                                          users.findIndex(
                                            (u) => u.userid === r.userid
                                          );
                                        const replyHostInfo =
                                          users[findReplyUserIndex];
                                        let replyHostAva = RaidenAva;
                                        switch (replyHostInfo.avatar) {
                                          case "RaidenAva":
                                            replyHostAva = RaidenAva;
                                            break;
                                          case "DoggoAva":
                                            replyHostAva = DoggoAva;
                                            break;
                                          case "HutaoAva":
                                            replyHostAva = HutaoAva;
                                            break;
                                          default:
                                            replyHostAva = RaidenAva;
                                            break;
                                        }
                                        let replyToUser;
                                        if (r.replyhostid !== -1) {
                                          replyToUser =
                                            users[
                                              users.findIndex(
                                                (u) =>
                                                  u.userid === r.replyhostid
                                              )
                                            ];
                                        }
                                        const hasLikeThisReply =
                                          r.likeCount.includes(user.userid);
                                        const replyUploadedDate = new Date(
                                          r.createdAt
                                        ).getTime();
                                        let secondsR = Math.round(
                                          Math.abs(
                                            currentTime - replyUploadedDate
                                          ) / 1000
                                        ); // round away miliseconds
                                        const daysR = Math.floor(
                                          secondsR / 86400
                                        );
                                        secondsR -= daysR * 86400;
                                        const hoursR = Math.floor(
                                          secondsR / 3600
                                        );
                                        secondsR -= hoursR * 3600;
                                        const minutesR = Math.floor(
                                          secondsR / 60
                                        );
                                        secondsR -= minutesR * 60;
                                        let displayReplyPostedDate;
                                        if (daysR === 0) {
                                          if (hoursR === 0) {
                                            if (minutesR === 0) {
                                              displayReplyPostedDate = `${secondsR} giây trước`;
                                            } else {
                                              displayReplyPostedDate = `${minutesR} phút trước`;
                                            }
                                          } else {
                                            displayReplyPostedDate = `${hoursR} giờ trước`;
                                          }
                                        } else {
                                          if (daysR >= 365) {
                                            const yearsR = Math.floor(
                                              daysR / 365
                                            );
                                            displayReplyPostedDate = `${yearsR} năm trước`;
                                          } else {
                                            displayReplyPostedDate = `${daysR} ngày trước`;
                                          }
                                        }
                                        return (
                                          <RCInnerReply isBottom={iter >= 1}>
                                            <div className="comment-card_left">
                                              <LinkRouter
                                                to={
                                                  replyHostInfo.userid ===
                                                  user.userid
                                                    ? `/user/${replyHostInfo.userid}`
                                                    : `/otheruser/${replyHostInfo.userid}`
                                                }
                                              >
                                                <RepliesAvatar>
                                                  <CommentAvatar
                                                    src={replyHostAva}
                                                    alt="comment-ava"
                                                  />
                                                </RepliesAvatar>
                                              </LinkRouter>
                                            </div>
                                            <RepliesContainer>
                                              <CCHeader>
                                                <ReplyCardAccount>
                                                  <ReplyCardRouter
                                                    to={
                                                      replyHostInfo.userid ===
                                                      user.userid
                                                        ? `/user/${replyHostInfo.userid}`
                                                        : `/otheruser/${replyHostInfo.userid}`
                                                    }
                                                  >
                                                    <RCReplyRouterSpan>
                                                      {replyHostInfo.name}
                                                    </RCReplyRouterSpan>
                                                    {replyHostInfo.userid ===
                                                      commentHostInfo.userid && (
                                                      <CommentHostSpan>
                                                        Tác giả
                                                      </CommentHostSpan>
                                                    )}
                                                  </ReplyCardRouter>
                                                  <RCFloor>
                                                    <span>
                                                      ID của người
                                                      dùng&nbsp;:&nbsp;
                                                      {replyHostInfo.userid}
                                                    </span>
                                                    <RCFloorTags></RCFloorTags>
                                                  </RCFloor>
                                                </ReplyCardAccount>
                                                <CCOperation>
                                                  <CCAction>
                                                    <CCActionIcon
                                                      isSelected={
                                                        commentMenuState[i]
                                                          .replyMenuState[iter]
                                                          .state
                                                      }
                                                      isUnClickable={
                                                        editContent[i].replyBox[
                                                          iter
                                                        ].isOn
                                                      }
                                                      onClick={() =>
                                                        handleCommentReplyMenu(
                                                          i,
                                                          iter
                                                        )
                                                      }
                                                    />
                                                    <CCSelectMenu
                                                      isOn={
                                                        commentMenuState[i]
                                                          .replyMenuState[iter]
                                                          .state
                                                      }
                                                    >
                                                      <CCSelectMenuTitle>
                                                        Khác
                                                      </CCSelectMenuTitle>
                                                      <CCUl>
                                                        {replyHostInfo.userid ===
                                                        user.userid ? (
                                                          <>
                                                            <CCLi
                                                              onClick={() =>
                                                                handleOpenEditReply(
                                                                  i,
                                                                  iter
                                                                )
                                                              }
                                                            >
                                                              <EditComment />
                                                              <CCLiSpan>
                                                                Chỉnh sửa
                                                              </CCLiSpan>
                                                            </CCLi>
                                                            <CCLi
                                                              onClick={() =>
                                                                handleDeleteWaifuReply(
                                                                  i,
                                                                  iter,
                                                                  r.replyid
                                                                )
                                                              }
                                                            >
                                                              <NotVisible />
                                                              <CCLiSpan>
                                                                Xóa bình luận
                                                              </CCLiSpan>
                                                            </CCLi>
                                                          </>
                                                        ) : (
                                                          <CCLi>
                                                            <BlockUser />
                                                            <CCLiSpan>
                                                              Chặn người dùng
                                                            </CCLiSpan>
                                                          </CCLi>
                                                        )}
                                                      </CCUl>
                                                    </CCSelectMenu>
                                                  </CCAction>
                                                </CCOperation>
                                              </CCHeader>
                                              {editContent[i].replyBox[iter]
                                                .isOn ? (
                                                <CommentReplyWrap
                                                  isAppear={
                                                    editContent[i].replyBox[
                                                      iter
                                                    ].isOn
                                                  }
                                                >
                                                  <UserReplyBody
                                                    borderChange={
                                                      editContent[i].replyBox[
                                                        iter
                                                      ].isFocused
                                                    }
                                                  >
                                                    <UserReplyTextArea
                                                      type="text"
                                                      maxLength="200"
                                                      placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                      value={
                                                        editContent[i].replyBox[
                                                          iter
                                                        ].value
                                                      }
                                                      onChange={(e) =>
                                                        handleEditCmtRepValue(
                                                          i,
                                                          iter,
                                                          e.target.value
                                                        )
                                                      }
                                                      onBlur={() =>
                                                        handleIsEditCmtRepBlur(
                                                          i,
                                                          iter
                                                        )
                                                      }
                                                      onFocus={() =>
                                                        handleIsEditCmtRepFocused(
                                                          i,
                                                          iter
                                                        )
                                                      }
                                                    />
                                                    <UserReplyMaxCount>
                                                      {
                                                        editContent[i].replyBox[
                                                          iter
                                                        ].value.length
                                                      }
                                                      /200
                                                    </UserReplyMaxCount>
                                                  </UserReplyBody>
                                                  <ReplyBoxFooter
                                                    style={{
                                                      marginBottom: "12px",
                                                    }}
                                                  >
                                                    <CancelEditCmtButton
                                                      onClick={() =>
                                                        handleCancelEditCmtRep(
                                                          i,
                                                          iter
                                                        )
                                                      }
                                                    >
                                                      Hủy
                                                    </CancelEditCmtButton>
                                                    <SendButton
                                                      onClick={() =>
                                                        handleSendEditCmtRep(
                                                          i,
                                                          iter,
                                                          r.replyid
                                                        )
                                                      }
                                                    >
                                                      Gửi
                                                    </SendButton>
                                                  </ReplyBoxFooter>
                                                </CommentReplyWrap>
                                              ) : (
                                                <ReplyCardContent>
                                                  {r.replyhostid !== -1 && (
                                                    <>
                                                      <ReplyCardReplyTo>
                                                        Trả lời
                                                      </ReplyCardReplyTo>
                                                      <RouterLinkAccount
                                                        to={
                                                          replyToUser.userid ===
                                                          user.userid
                                                            ? `/user/${user.userid}`
                                                            : `/otheruser/${replyToUser.userid}`
                                                        }
                                                      >
                                                        <LinkAccountTitleName>
                                                          {replyToUser.name}
                                                        </LinkAccountTitleName>
                                                      </RouterLinkAccount>
                                                      <ReplyColon>
                                                        &nbsp;:&nbsp;
                                                      </ReplyColon>
                                                    </>
                                                  )}
                                                  <ReplyContentWrap>
                                                    <p>{r.content}</p>
                                                  </ReplyContentWrap>
                                                </ReplyCardContent>
                                              )}
                                              <RCOpBottom>
                                                <RCTime>
                                                  {displayReplyPostedDate}
                                                </RCTime>
                                                <RCBottomRight>
                                                  <RCItem
                                                    onClick={() =>
                                                      handleCommentReplyBoxOn(
                                                        i,
                                                        iter
                                                      )
                                                    }
                                                  >
                                                    <RCItemIconComment />
                                                    <RCItemSpan>
                                                      Trả lời
                                                    </RCItemSpan>
                                                  </RCItem>
                                                  <RCItem>
                                                    {hasLikeThisReply ? (
                                                      <RCItemIconLiked
                                                        onClick={() =>
                                                          handleUnlikeReply(
                                                            r.replyid
                                                          )
                                                        }
                                                      />
                                                    ) : (
                                                      <RCItemIconLike
                                                        onClick={() =>
                                                          handleLikeReply(
                                                            r.replyid
                                                          )
                                                        }
                                                      />
                                                    )}
                                                    <RCItemSpan>
                                                      {r.likeCount.length}
                                                    </RCItemSpan>
                                                  </RCItem>
                                                </RCBottomRight>
                                              </RCOpBottom>
                                              <CommentReplyWrap
                                                isAppear={
                                                  controlReplyBox[i].replyBox[
                                                    iter
                                                  ].isOn
                                                }
                                              >
                                                <UserReplyBody
                                                  borderChange={
                                                    controlReplyBox[i].replyBox[
                                                      iter
                                                    ].isFocused
                                                  }
                                                >
                                                  <UserReplyTextArea
                                                    type="text"
                                                    maxLength="200"
                                                    placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                    value={
                                                      controlReplyBox[i]
                                                        .replyBox[iter].value
                                                    }
                                                    onChange={(e) =>
                                                      handleCmtReplyBoxValue(
                                                        i,
                                                        iter,
                                                        e.target.value
                                                      )
                                                    }
                                                    onBlur={() =>
                                                      handleIsCmtReplyBlur(
                                                        i,
                                                        iter
                                                      )
                                                    }
                                                    onFocus={() =>
                                                      handleIsCmtReplyFocused(
                                                        i,
                                                        iter
                                                      )
                                                    }
                                                  />
                                                  <UserReplyMaxCount>
                                                    {
                                                      controlReplyBox[i]
                                                        .replyBox[iter].value
                                                        .length
                                                    }
                                                    /200
                                                  </UserReplyMaxCount>
                                                </UserReplyBody>
                                                <ReplyBoxFooter>
                                                  <SendButton
                                                    onClick={() =>
                                                      handleSendReply(
                                                        i,
                                                        c.commentid,
                                                        controlReplyBox[i]
                                                          .replyBox[iter].value,
                                                        iter,
                                                        replyHostInfo.userid
                                                      )
                                                    }
                                                  >
                                                    Gửi
                                                  </SendButton>
                                                </ReplyBoxFooter>
                                              </CommentReplyWrap>
                                            </RepliesContainer>
                                          </RCInnerReply>
                                        );
                                      })
                                    : currentCommentReplies.length > 2 &&
                                      currentCommentReplies.map((r, iter) => {
                                        if (iter <= 1) {
                                          const findReplyUserIndex =
                                            users.findIndex(
                                              (u) => u.userid === r.userid
                                            );
                                          const replyHostInfo =
                                            users[findReplyUserIndex];
                                          let replyHostAva = RaidenAva;
                                          switch (replyHostInfo.avatar) {
                                            case "RaidenAva":
                                              replyHostAva = RaidenAva;
                                              break;
                                            case "DoggoAva":
                                              replyHostAva = DoggoAva;
                                              break;
                                            case "HutaoAva":
                                              replyHostAva = HutaoAva;
                                              break;
                                            default:
                                              replyHostAva = RaidenAva;
                                              break;
                                          }
                                          let replyToUser;
                                          if (r.replyhostid !== -1) {
                                            replyToUser =
                                              users[
                                                users.findIndex(
                                                  (u) =>
                                                    u.userid === r.replyhostid
                                                )
                                              ];
                                          }
                                          const hasLikeThisReply =
                                            r.likeCount.includes(user.userid);
                                          const replyUploadedDate = new Date(
                                            r.createdAt
                                          ).getTime();
                                          let secondsR = Math.round(
                                            Math.abs(
                                              currentTime - replyUploadedDate
                                            ) / 1000
                                          ); // round away miliseconds
                                          const daysR = Math.floor(
                                            secondsR / 86400
                                          );
                                          secondsR -= daysR * 86400;
                                          const hoursR = Math.floor(
                                            secondsR / 3600
                                          );
                                          secondsR -= hoursR * 3600;
                                          const minutesR = Math.floor(
                                            secondsR / 60
                                          );
                                          secondsR -= minutesR * 60;
                                          let displayReplyPostedDate;
                                          if (daysR === 0) {
                                            if (hoursR === 0) {
                                              if (minutesR === 0) {
                                                displayReplyPostedDate = `${secondsR} giây trước`;
                                              } else {
                                                displayReplyPostedDate = `${minutesR} phút trước`;
                                              }
                                            } else {
                                              displayReplyPostedDate = `${hoursR} giờ trước`;
                                            }
                                          } else {
                                            if (daysR >= 365) {
                                              const yearsR = Math.floor(
                                                daysR / 365
                                              );
                                              displayReplyPostedDate = `${yearsR} năm trước`;
                                            } else {
                                              displayReplyPostedDate = `${daysR} ngày trước`;
                                            }
                                          }
                                          return (
                                            <RCInnerReply isBottom={iter >= 1}>
                                              <div className="comment-card_left">
                                                <LinkRouter
                                                  to={
                                                    replyHostInfo.userid ===
                                                    user.userid
                                                      ? `/user/${replyHostInfo.userid}`
                                                      : `/otheruser/${replyHostInfo.userid}`
                                                  }
                                                >
                                                  <RepliesAvatar>
                                                    <CommentAvatar
                                                      src={replyHostAva}
                                                      alt="comment-ava"
                                                    />
                                                  </RepliesAvatar>
                                                </LinkRouter>
                                              </div>
                                              <RepliesContainer>
                                                <CCHeader>
                                                  <ReplyCardAccount>
                                                    <ReplyCardRouter
                                                      to={
                                                        replyHostInfo.userid ===
                                                        user.userid
                                                          ? `/user/${replyHostInfo.userid}`
                                                          : `/otheruser/${replyHostInfo.userid}`
                                                      }
                                                    >
                                                      <RCReplyRouterSpan>
                                                        {replyHostInfo.name}
                                                      </RCReplyRouterSpan>
                                                      {replyHostInfo.userid ===
                                                        commentHostInfo.userid && (
                                                        <CommentHostSpan>
                                                          Tác giả
                                                        </CommentHostSpan>
                                                      )}
                                                    </ReplyCardRouter>
                                                    <RCFloor>
                                                      <span>
                                                        ID của người
                                                        dùng&nbsp;:&nbsp;
                                                        {replyHostInfo.userid}
                                                      </span>
                                                      <RCFloorTags></RCFloorTags>
                                                    </RCFloor>
                                                  </ReplyCardAccount>
                                                  <CCOperation>
                                                    <CCAction>
                                                      <CCActionIcon
                                                        isSelected={
                                                          commentMenuState[i]
                                                            .replyMenuState[
                                                            iter
                                                          ].state
                                                        }
                                                        isUnClickable={
                                                          editContent[i]
                                                            .replyBox[iter].isOn
                                                        }
                                                        onClick={() =>
                                                          handleCommentReplyMenu(
                                                            i,
                                                            iter
                                                          )
                                                        }
                                                      />
                                                      <CCSelectMenu
                                                        isOn={
                                                          commentMenuState[i]
                                                            .replyMenuState[
                                                            iter
                                                          ].state
                                                        }
                                                      >
                                                        <CCSelectMenuTitle>
                                                          Khác
                                                        </CCSelectMenuTitle>
                                                        <CCUl>
                                                          {replyHostInfo.userid ===
                                                          user.userid ? (
                                                            <>
                                                              <CCLi
                                                                onClick={() =>
                                                                  handleOpenEditReply(
                                                                    i,
                                                                    iter
                                                                  )
                                                                }
                                                              >
                                                                <EditComment />
                                                                <CCLiSpan>
                                                                  Chỉnh sửa
                                                                </CCLiSpan>
                                                              </CCLi>
                                                              <CCLi
                                                                onClick={() =>
                                                                  handleDeleteWaifuReply(
                                                                    i,
                                                                    iter,
                                                                    r.replyid
                                                                  )
                                                                }
                                                              >
                                                                <NotVisible />
                                                                <CCLiSpan>
                                                                  Xóa bình luận
                                                                </CCLiSpan>
                                                              </CCLi>
                                                            </>
                                                          ) : (
                                                            <CCLi>
                                                              <BlockUser />
                                                              <CCLiSpan>
                                                                Chặn người dùng
                                                              </CCLiSpan>
                                                            </CCLi>
                                                          )}
                                                        </CCUl>
                                                      </CCSelectMenu>
                                                    </CCAction>
                                                  </CCOperation>
                                                </CCHeader>
                                                {editContent[i].replyBox[iter]
                                                  .isOn ? (
                                                  <CommentReplyWrap
                                                    isAppear={
                                                      editContent[i].replyBox[
                                                        iter
                                                      ].isOn
                                                    }
                                                  >
                                                    <UserReplyBody
                                                      borderChange={
                                                        editContent[i].replyBox[
                                                          iter
                                                        ].isFocused
                                                      }
                                                    >
                                                      <UserReplyTextArea
                                                        type="text"
                                                        maxLength="200"
                                                        placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                        value={
                                                          editContent[i]
                                                            .replyBox[iter]
                                                            .value
                                                        }
                                                        onChange={(e) =>
                                                          handleEditCmtRepValue(
                                                            i,
                                                            iter,
                                                            e.target.value
                                                          )
                                                        }
                                                        onBlur={() =>
                                                          handleIsEditCmtRepBlur(
                                                            i,
                                                            iter
                                                          )
                                                        }
                                                        onFocus={() =>
                                                          handleIsEditCmtRepFocused(
                                                            i,
                                                            iter
                                                          )
                                                        }
                                                      />
                                                      <UserReplyMaxCount>
                                                        {
                                                          editContent[i]
                                                            .replyBox[iter]
                                                            .value.length
                                                        }
                                                        /200
                                                      </UserReplyMaxCount>
                                                    </UserReplyBody>
                                                    <ReplyBoxFooter
                                                      style={{
                                                        marginBottom: "12px",
                                                      }}
                                                    >
                                                      <CancelEditCmtButton
                                                        onClick={() =>
                                                          handleCancelEditCmtRep(
                                                            i,
                                                            iter
                                                          )
                                                        }
                                                      >
                                                        Hủy
                                                      </CancelEditCmtButton>
                                                      <SendButton
                                                        onClick={() =>
                                                          handleSendEditCmtRep(
                                                            i,
                                                            iter,
                                                            r.replyid
                                                          )
                                                        }
                                                      >
                                                        Gửi
                                                      </SendButton>
                                                    </ReplyBoxFooter>
                                                  </CommentReplyWrap>
                                                ) : (
                                                  <ReplyCardContent>
                                                    {r.replyhostid !== -1 && (
                                                      <>
                                                        <ReplyCardReplyTo>
                                                          Trả lời
                                                        </ReplyCardReplyTo>
                                                        <RouterLinkAccount
                                                          to={
                                                            replyToUser.userid ===
                                                            user.userid
                                                              ? `/user/${user.userid}`
                                                              : `/otheruser/${replyToUser.userid}`
                                                          }
                                                        >
                                                          <LinkAccountTitleName>
                                                            {replyToUser.name}
                                                          </LinkAccountTitleName>
                                                        </RouterLinkAccount>
                                                        <ReplyColon>
                                                          &nbsp;:&nbsp;
                                                        </ReplyColon>
                                                      </>
                                                    )}
                                                    <ReplyContentWrap>
                                                      <p>{r.content}</p>
                                                    </ReplyContentWrap>
                                                  </ReplyCardContent>
                                                )}
                                                <RCOpBottom>
                                                  <RCTime>
                                                    {displayReplyPostedDate}
                                                  </RCTime>
                                                  <RCBottomRight>
                                                    <RCItem
                                                      onClick={() =>
                                                        handleCommentReplyBoxOn(
                                                          i,
                                                          iter
                                                        )
                                                      }
                                                    >
                                                      <RCItemIconComment />
                                                      <RCItemSpan>
                                                        Trả lời
                                                      </RCItemSpan>
                                                    </RCItem>
                                                    <RCItem>
                                                      {hasLikeThisReply ? (
                                                        <RCItemIconLiked
                                                          onClick={() =>
                                                            handleUnlikeReply(
                                                              r.replyid
                                                            )
                                                          }
                                                        />
                                                      ) : (
                                                        <RCItemIconLike
                                                          onClick={() =>
                                                            handleLikeReply(
                                                              r.replyid
                                                            )
                                                          }
                                                        />
                                                      )}
                                                      <RCItemSpan>
                                                        {r.likeCount.length}
                                                      </RCItemSpan>
                                                    </RCItem>
                                                  </RCBottomRight>
                                                </RCOpBottom>
                                                <CommentReplyWrap
                                                  isAppear={
                                                    controlReplyBox[i].replyBox[
                                                      iter
                                                    ].isOn
                                                  }
                                                >
                                                  <UserReplyBody
                                                    borderChange={
                                                      controlReplyBox[i]
                                                        .replyBox[iter]
                                                        .isFocused
                                                    }
                                                  >
                                                    <UserReplyTextArea
                                                      type="text"
                                                      maxLength="200"
                                                      placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                      value={
                                                        controlReplyBox[i]
                                                          .replyBox[iter].value
                                                      }
                                                      onChange={(e) =>
                                                        handleCmtReplyBoxValue(
                                                          i,
                                                          iter,
                                                          e.target.value
                                                        )
                                                      }
                                                      onBlur={() =>
                                                        handleIsCmtReplyBlur(
                                                          i,
                                                          iter
                                                        )
                                                      }
                                                      onFocus={() =>
                                                        handleIsCmtReplyFocused(
                                                          i,
                                                          iter
                                                        )
                                                      }
                                                    />
                                                    <UserReplyMaxCount>
                                                      {
                                                        controlReplyBox[i]
                                                          .replyBox[iter].value
                                                          .length
                                                      }
                                                      /200
                                                    </UserReplyMaxCount>
                                                  </UserReplyBody>
                                                  <ReplyBoxFooter>
                                                    <SendButton
                                                      onClick={() =>
                                                        handleSendReply(
                                                          i,
                                                          c.commentid,
                                                          controlReplyBox[i]
                                                            .replyBox[iter]
                                                            .value,
                                                          iter,
                                                          replyHostInfo.userid
                                                        )
                                                      }
                                                    >
                                                      Gửi
                                                    </SendButton>
                                                  </ReplyBoxFooter>
                                                </CommentReplyWrap>
                                              </RepliesContainer>
                                            </RCInnerReply>
                                          );
                                        } else if (iter === 2) {
                                          return (
                                            <ReplyCardInnerDetail
                                              onClick={() =>
                                                handleReplyPopup(i)
                                              }
                                            >
                                              <span>
                                                Tổng cộng có{" "}
                                                {currentCommentReplies.length}{" "}
                                                câu trả lời
                                              </span>
                                              <ReplyCardInnerDetailIcon />
                                            </ReplyCardInnerDetail>
                                          );
                                        }
                                      })}
                                </ReplyCardReplies>
                              </CommentCardContainer>
                            </CommendCard>
                            <DialogReply
                              isShown={commentMenuState[i].replyPopupState}
                            >
                              <DialogReplyWrap>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Xem bình luận</DialogTitle>
                                    <DialogClose
                                      onClick={() => handleReplyPopup(i)}
                                    >
                                      <DialogButton>
                                        <DialogCloseIcon />
                                      </DialogButton>
                                    </DialogClose>
                                  </DialogHeader>
                                  <DialogBody>
                                    <div className="reply-detail-container">
                                      <ReplyDetailList>
                                        <CommentPart>
                                          <div className="comment-card_left">
                                            <CommentCardAvatar>
                                              <CommentAvatar
                                                src={hostAva}
                                                alt="comment-ava"
                                              />
                                            </CommentCardAvatar>
                                          </div>
                                          <CommentCardContainer>
                                            <CCHeader>
                                              <ReplyCardAccount>
                                                <ReplyCardRouter
                                                  to={
                                                    commentHostInfo.userid ===
                                                    user.userid
                                                      ? `/user/${commentHostInfo.userid}`
                                                      : `/otheruser/${commentHostInfo.userid}`
                                                  }
                                                >
                                                  <RCRouterSpan>
                                                    {commentHostInfo.name}
                                                  </RCRouterSpan>
                                                  {/* {commentHostInfo.userid ===
                                                    user.userid && (
                                                    <CommentHostSpan>
                                                      Tác giả
                                                    </CommentHostSpan>
                                                  )} */}
                                                </ReplyCardRouter>
                                                <RCFloor>
                                                  <span>
                                                    ID của người
                                                    dùng&nbsp;:&nbsp;
                                                    {commentHostInfo.userid}
                                                  </span>
                                                  <RCFloorTags></RCFloorTags>
                                                </RCFloor>
                                              </ReplyCardAccount>
                                              <CCOperation>
                                                <CCAction>
                                                  <CCActionIcon
                                                    onClick={() =>
                                                      handleCommentMenu(i)
                                                    }
                                                  />
                                                  <CCSelectMenu
                                                    isOn={
                                                      commentMenuState[i].state
                                                    }
                                                  >
                                                    <CCSelectMenuTitle>
                                                      Khác
                                                    </CCSelectMenuTitle>
                                                    <CCUl>
                                                      {commentHostInfo.userid ===
                                                      user.userid ? (
                                                        <>
                                                          <CCLi
                                                            onClick={() =>
                                                              handleOpenEditCmtContent(
                                                                i
                                                              )
                                                            }
                                                          >
                                                            <EditComment />
                                                            <CCLiSpan>
                                                              Chỉnh sửa
                                                            </CCLiSpan>
                                                          </CCLi>
                                                          <CCLi
                                                            onClick={() =>
                                                              handleDeleteWaifuComment(
                                                                i,
                                                                c.commentid
                                                              )
                                                            }
                                                          >
                                                            <NotVisible />
                                                            <CCLiSpan>
                                                              Xóa bình luận
                                                            </CCLiSpan>
                                                          </CCLi>
                                                        </>
                                                      ) : (
                                                        <CCLi>
                                                          <BlockUser />
                                                          <CCLiSpan>
                                                            Chặn người dùng
                                                          </CCLiSpan>
                                                        </CCLi>
                                                      )}
                                                    </CCUl>
                                                  </CCSelectMenu>
                                                </CCAction>
                                              </CCOperation>
                                            </CCHeader>
                                            {editContent[i].isOn ? (
                                              <CommentReplyWrap
                                                isAppear={editContent[i].isOn}
                                              >
                                                <UserReplyBody
                                                  borderChange={
                                                    editContent[i].isFocused
                                                  }
                                                >
                                                  <UserReplyTextArea
                                                    type="text"
                                                    maxLength="1000"
                                                    placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                    value={editContent[i].value}
                                                    onChange={(e) =>
                                                      handleEditCmtValue(
                                                        i,
                                                        e.target.value
                                                      )
                                                    }
                                                    onBlur={() =>
                                                      handleIsEditCmtBlur(i)
                                                    }
                                                    onFocus={() =>
                                                      handleIsEditCmtFocused(i)
                                                    }
                                                  />
                                                  <UserReplyMaxCount>
                                                    {
                                                      editContent[i].value
                                                        .length
                                                    }
                                                    /1000
                                                  </UserReplyMaxCount>
                                                </UserReplyBody>
                                                <ReplyBoxFooter
                                                  style={{
                                                    marginBottom: "12px",
                                                  }}
                                                >
                                                  <CancelEditCmtButton
                                                    onClick={() =>
                                                      handleCancelEditCmt(i)
                                                    }
                                                  >
                                                    Hủy
                                                  </CancelEditCmtButton>
                                                  <SendButton
                                                    onClick={() =>
                                                      handleSendEditCmt(
                                                        i,
                                                        c.commentid
                                                      )
                                                    }
                                                  >
                                                    Gửi
                                                  </SendButton>
                                                </ReplyBoxFooter>
                                              </CommentReplyWrap>
                                            ) : (
                                              <CCContent>{c.value}</CCContent>
                                            )}
                                            <RCOpBottom>
                                              <RCTime>
                                                {displayPostedDate}
                                              </RCTime>
                                              <RCBottomRight>
                                                <RCItem
                                                  onClick={() =>
                                                    handleReplyBoxOn(i)
                                                  }
                                                >
                                                  <RCItemIconComment />
                                                  <RCItemSpan>
                                                    Trả lời
                                                  </RCItemSpan>
                                                </RCItem>
                                                <RCItem>
                                                  {hasLikeThisComment ? (
                                                    <RCItemIconLiked
                                                      onClick={() =>
                                                        handleUnlikeComment(
                                                          c.commentid
                                                        )
                                                      }
                                                    />
                                                  ) : (
                                                    <RCItemIconLike
                                                      onClick={() =>
                                                        handleLikeComment(
                                                          c.commentid
                                                        )
                                                      }
                                                    />
                                                  )}
                                                  <RCItemSpan>
                                                    {c.likeCount.length}
                                                  </RCItemSpan>
                                                </RCItem>
                                              </RCBottomRight>
                                            </RCOpBottom>
                                            <CommentReplyWrap
                                              isAppear={controlReplyBox[i].isOn}
                                            >
                                              <UserReplyBody
                                                borderChange={
                                                  controlReplyBox[i].isFocused
                                                }
                                              >
                                                <UserReplyTextArea
                                                  type="text"
                                                  maxLength="200"
                                                  placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                  value={
                                                    controlReplyBox[i].value
                                                  }
                                                  onChange={(e) =>
                                                    handleReplyBoxValue(
                                                      i,
                                                      e.target.value
                                                    )
                                                  }
                                                  onBlur={() =>
                                                    handleIsReplyBlur(i)
                                                  }
                                                  onFocus={() =>
                                                    handleIsReplyFocused(i)
                                                  }
                                                />
                                                <UserReplyMaxCount>
                                                  {
                                                    controlReplyBox[i].value
                                                      .length
                                                  }
                                                  /200
                                                </UserReplyMaxCount>
                                              </UserReplyBody>
                                              <ReplyBoxFooter>
                                                <SendButton
                                                  onClick={() =>
                                                    handleSendReply(
                                                      i,
                                                      c.commentid,
                                                      controlReplyBox[i].value
                                                    )
                                                  }
                                                >
                                                  Gửi
                                                </SendButton>
                                              </ReplyBoxFooter>
                                            </CommentReplyWrap>
                                          </CommentCardContainer>
                                        </CommentPart>
                                        <ReplyListTitle>
                                          Toàn bộ trả lời
                                        </ReplyListTitle>
                                        <div className="reply-list">
                                          {currentCommentReplies.map(
                                            (r, iter) => {
                                              const findReplyUserIndex =
                                                users.findIndex(
                                                  (u) => u.userid === r.userid
                                                );
                                              const replyHostInfo =
                                                users[findReplyUserIndex];
                                              let replyHostAva = RaidenAva;
                                              switch (replyHostInfo.avatar) {
                                                case "RaidenAva":
                                                  replyHostAva = RaidenAva;
                                                  break;
                                                case "DoggoAva":
                                                  replyHostAva = DoggoAva;
                                                  break;
                                                case "HutaoAva":
                                                  replyHostAva = HutaoAva;
                                                  break;
                                                default:
                                                  replyHostAva = RaidenAva;
                                                  break;
                                              }
                                              let replyToUser;
                                              if (r.replyhostid !== -1) {
                                                replyToUser =
                                                  users[
                                                    users.findIndex(
                                                      (u) =>
                                                        u.userid ===
                                                        r.replyhostid
                                                    )
                                                  ];
                                              }
                                              const hasLikeThisReply =
                                                r.likeCount.includes(
                                                  user.userid
                                                );
                                              const replyUploadedDate =
                                                new Date(r.createdAt).getTime();
                                              let secondsR = Math.round(
                                                Math.abs(
                                                  currentTime -
                                                    replyUploadedDate
                                                ) / 1000
                                              ); // round away miliseconds
                                              const daysR = Math.floor(
                                                secondsR / 86400
                                              );
                                              secondsR -= daysR * 86400;
                                              const hoursR = Math.floor(
                                                secondsR / 3600
                                              );
                                              secondsR -= hoursR * 3600;
                                              const minutesR = Math.floor(
                                                secondsR / 60
                                              );
                                              secondsR -= minutesR * 60;
                                              let displayReplyPostedDate;
                                              if (daysR === 0) {
                                                if (hoursR === 0) {
                                                  if (minutesR === 0) {
                                                    displayReplyPostedDate = `${secondsR} giây trước`;
                                                  } else {
                                                    displayReplyPostedDate = `${minutesR} phút trước`;
                                                  }
                                                } else {
                                                  displayReplyPostedDate = `${hoursR} giờ trước`;
                                                }
                                              } else {
                                                if (daysR >= 365) {
                                                  const yearsR = Math.floor(
                                                    daysR / 365
                                                  );
                                                  displayReplyPostedDate = `${yearsR} năm trước`;
                                                } else {
                                                  displayReplyPostedDate = `${daysR} ngày trước`;
                                                }
                                              }
                                              return (
                                                <div data-id={iter}>
                                                  <CommentPart>
                                                    <LinkRouter
                                                      to={
                                                        replyHostInfo.userid ===
                                                        user.userid
                                                          ? `/user/${replyHostInfo.userid}`
                                                          : `/otheruser/${replyHostInfo.userid}`
                                                      }
                                                    >
                                                      <div className="comment-card_left">
                                                        <CommentCardAvatar>
                                                          <CommentAvatar
                                                            src={replyHostAva}
                                                            alt="comment-ava"
                                                          />
                                                        </CommentCardAvatar>
                                                      </div>
                                                    </LinkRouter>
                                                    <CommentCardContainer>
                                                      <CCHeader>
                                                        <ReplyCardAccount>
                                                          <ReplyCardRouter
                                                            to={
                                                              replyHostInfo.userid ===
                                                              user.userid
                                                                ? `/user/${replyHostInfo.userid}`
                                                                : `/otheruser/${replyHostInfo.userid}`
                                                            }
                                                          >
                                                            <RCRouterSpan>
                                                              {
                                                                replyHostInfo.name
                                                              }
                                                            </RCRouterSpan>
                                                            {replyHostInfo.userid ===
                                                              commentHostInfo.userid && (
                                                              <CommentHostSpan>
                                                                Tác giả
                                                              </CommentHostSpan>
                                                            )}
                                                          </ReplyCardRouter>
                                                          <RCFloor>
                                                            <span>
                                                              ID của người
                                                              dùng&nbsp;:&nbsp;
                                                              {
                                                                replyHostInfo.userid
                                                              }
                                                            </span>
                                                            <RCFloorTags></RCFloorTags>
                                                          </RCFloor>
                                                        </ReplyCardAccount>
                                                        <CCOperation>
                                                          <CCAction>
                                                            <CCActionIcon
                                                              isSelected={
                                                                commentMenuState[
                                                                  i
                                                                ]
                                                                  .replyMenuState[
                                                                  iter
                                                                ].state
                                                              }
                                                              isUnClickable={
                                                                editContent[i]
                                                                  .replyBox[
                                                                  iter
                                                                ].isOn
                                                              }
                                                              onClick={() =>
                                                                handleCommentReplyMenu(
                                                                  i,
                                                                  iter
                                                                )
                                                              }
                                                            />
                                                            <CCSelectMenu
                                                              isOn={
                                                                commentMenuState[
                                                                  i
                                                                ]
                                                                  .replyMenuState[
                                                                  iter
                                                                ].state
                                                              }
                                                            >
                                                              <CCSelectMenuTitle>
                                                                Khác
                                                              </CCSelectMenuTitle>
                                                              <CCUl>
                                                                {replyHostInfo.userid ===
                                                                user.userid ? (
                                                                  <>
                                                                    <CCLi
                                                                      onClick={() =>
                                                                        handleOpenEditReply(
                                                                          i,
                                                                          iter
                                                                        )
                                                                      }
                                                                    >
                                                                      <EditComment />
                                                                      <CCLiSpan>
                                                                        Chỉnh
                                                                        sửa
                                                                      </CCLiSpan>
                                                                    </CCLi>
                                                                    <CCLi
                                                                      onClick={() =>
                                                                        handleDeleteWaifuReply(
                                                                          i,
                                                                          iter,
                                                                          r.replyid
                                                                        )
                                                                      }
                                                                    >
                                                                      <NotVisible />
                                                                      <CCLiSpan>
                                                                        Xóa bình
                                                                        luận
                                                                      </CCLiSpan>
                                                                    </CCLi>
                                                                  </>
                                                                ) : (
                                                                  <CCLi>
                                                                    <BlockUser />
                                                                    <CCLiSpan>
                                                                      Chặn người
                                                                      dùng
                                                                    </CCLiSpan>
                                                                  </CCLi>
                                                                )}
                                                              </CCUl>
                                                            </CCSelectMenu>
                                                          </CCAction>
                                                        </CCOperation>
                                                      </CCHeader>
                                                      {editContent[i].replyBox[
                                                        iter
                                                      ].isOn ? (
                                                        <CommentReplyWrap
                                                          isAppear={
                                                            editContent[i]
                                                              .replyBox[iter]
                                                              .isOn
                                                          }
                                                        >
                                                          <UserReplyBody
                                                            borderChange={
                                                              editContent[i]
                                                                .replyBox[iter]
                                                                .isFocused
                                                            }
                                                          >
                                                            <UserReplyTextArea
                                                              type="text"
                                                              maxLength="200"
                                                              placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                              value={
                                                                editContent[i]
                                                                  .replyBox[
                                                                  iter
                                                                ].value
                                                              }
                                                              onChange={(e) =>
                                                                handleEditCmtRepValue(
                                                                  i,
                                                                  iter,
                                                                  e.target.value
                                                                )
                                                              }
                                                              onBlur={() =>
                                                                handleIsEditCmtRepBlur(
                                                                  i,
                                                                  iter
                                                                )
                                                              }
                                                              onFocus={() =>
                                                                handleIsEditCmtRepFocused(
                                                                  i,
                                                                  iter
                                                                )
                                                              }
                                                            />
                                                            <UserReplyMaxCount>
                                                              {
                                                                editContent[i]
                                                                  .replyBox[
                                                                  iter
                                                                ].value.length
                                                              }
                                                              /200
                                                            </UserReplyMaxCount>
                                                          </UserReplyBody>
                                                          <ReplyBoxFooter
                                                            style={{
                                                              marginBottom:
                                                                "12px",
                                                            }}
                                                          >
                                                            <CancelEditCmtButton
                                                              onClick={() =>
                                                                handleCancelEditCmtRep(
                                                                  i,
                                                                  iter
                                                                )
                                                              }
                                                            >
                                                              Hủy
                                                            </CancelEditCmtButton>
                                                            <SendButton
                                                              onClick={() =>
                                                                handleSendEditCmtRep(
                                                                  i,
                                                                  iter,
                                                                  r.replyid
                                                                )
                                                              }
                                                            >
                                                              Gửi
                                                            </SendButton>
                                                          </ReplyBoxFooter>
                                                        </CommentReplyWrap>
                                                      ) : (
                                                        <ReplyCardContent>
                                                          {r.replyhostid !==
                                                            -1 && (
                                                            <>
                                                              <ReplyCardReplyTo>
                                                                Trả lời
                                                              </ReplyCardReplyTo>
                                                              <RouterLinkAccount
                                                                to={
                                                                  replyToUser.userid ===
                                                                  user.userid
                                                                    ? `/user/${user.userid}`
                                                                    : `/otheruser/${replyToUser.userid}`
                                                                }
                                                              >
                                                                <LinkAccountTitleName>
                                                                  {
                                                                    replyToUser.name
                                                                  }
                                                                </LinkAccountTitleName>
                                                              </RouterLinkAccount>
                                                              <ReplyColon>
                                                                &nbsp;:&nbsp;
                                                              </ReplyColon>
                                                            </>
                                                          )}
                                                          <ReplyContentWrap>
                                                            <p>{r.content}</p>
                                                          </ReplyContentWrap>
                                                        </ReplyCardContent>
                                                      )}
                                                      <RCOpBottom>
                                                        <RCTime>
                                                          {
                                                            displayReplyPostedDate
                                                          }
                                                        </RCTime>
                                                        <RCBottomRight>
                                                          <RCItem
                                                            onClick={() =>
                                                              handleCommentReplyBoxOn(
                                                                i,
                                                                iter
                                                              )
                                                            }
                                                          >
                                                            <RCItemIconComment />
                                                            <RCItemSpan>
                                                              Trả lời
                                                            </RCItemSpan>
                                                          </RCItem>
                                                          <RCItem>
                                                            {hasLikeThisReply ? (
                                                              <RCItemIconLiked
                                                                onClick={() =>
                                                                  handleUnlikeReply(
                                                                    r.replyid
                                                                  )
                                                                }
                                                              />
                                                            ) : (
                                                              <RCItemIconLike
                                                                onClick={() =>
                                                                  handleLikeReply(
                                                                    r.replyid
                                                                  )
                                                                }
                                                              />
                                                            )}
                                                            <RCItemSpan>
                                                              {
                                                                r.likeCount
                                                                  .length
                                                              }
                                                            </RCItemSpan>
                                                          </RCItem>
                                                        </RCBottomRight>
                                                      </RCOpBottom>
                                                      <CommentReplyWrap
                                                        isAppear={
                                                          controlReplyBox[i]
                                                            .replyBox[iter].isOn
                                                        }
                                                      >
                                                        <UserReplyBody
                                                          borderChange={
                                                            controlReplyBox[i]
                                                              .replyBox[iter]
                                                              .isFocused
                                                          }
                                                        >
                                                          <UserReplyTextArea
                                                            type="text"
                                                            maxLength="200"
                                                            placeholder="Ex: Bài viết rất hay rất cảm xúc..."
                                                            value={
                                                              controlReplyBox[i]
                                                                .replyBox[iter]
                                                                .value
                                                            }
                                                            onChange={(e) =>
                                                              handleCmtReplyBoxValue(
                                                                i,
                                                                iter,
                                                                e.target.value
                                                              )
                                                            }
                                                            onBlur={() =>
                                                              handleIsCmtReplyBlur(
                                                                i,
                                                                iter
                                                              )
                                                            }
                                                            onFocus={() =>
                                                              handleIsCmtReplyFocused(
                                                                i,
                                                                iter
                                                              )
                                                            }
                                                          />
                                                          <UserReplyMaxCount>
                                                            {
                                                              controlReplyBox[i]
                                                                .replyBox[iter]
                                                                .value.length
                                                            }
                                                            /200
                                                          </UserReplyMaxCount>
                                                        </UserReplyBody>
                                                        <ReplyBoxFooter>
                                                          <SendButton
                                                            onClick={() =>
                                                              handleSendReply(
                                                                i,
                                                                c.commentid,
                                                                controlReplyBox[
                                                                  i
                                                                ].replyBox[iter]
                                                                  .value,
                                                                iter,
                                                                replyHostInfo.userid
                                                              )
                                                            }
                                                          >
                                                            Gửi
                                                          </SendButton>
                                                        </ReplyBoxFooter>
                                                      </CommentReplyWrap>
                                                    </CommentCardContainer>
                                                  </CommentPart>
                                                </div>
                                              );
                                            }
                                          )}
                                        </div>
                                        <ReplyListLoadmore>
                                          <LoadmoreNomore>
                                            Đã đến cuối
                                          </LoadmoreNomore>
                                        </ReplyListLoadmore>
                                      </ReplyDetailList>
                                    </div>
                                  </DialogBody>
                                </DialogContent>
                              </DialogReplyWrap>
                            </DialogReply>
                          </>
                        );
                      })
                    )}
                  </div>
                </div>
                <EndOfCommentSection>
                  <Nomore>Không còn bình luận nào nữa ~.~</Nomore>
                </EndOfCommentSection>
              </PostReplyList>
            </WaifuReplyContainer>
          );
        }
      }
    }
    // total number of people who rate
    let totalOfRates = 0;
    let averageRating = 0;
    for (let key in waifu.rating) {
      switch (key) {
        case "five":
          totalOfRates += waifu.rating[key].length;
          averageRating += waifu.rating[key].length * 5;
          break;
        case "four":
          totalOfRates += waifu.rating[key].length;
          averageRating += waifu.rating[key].length * 4;
          break;
        case "three":
          totalOfRates += waifu.rating[key].length;
          averageRating += waifu.rating[key].length * 3;
          break;
        case "two":
          totalOfRates += waifu.rating[key].length;
          averageRating += waifu.rating[key].length * 2;
          break;
        case "one":
          totalOfRates += waifu.rating[key].length;
          averageRating += waifu.rating[key].length * 1;
          break;
      }
    }
    if (totalOfRates !== 0) {
      /* console.log(averageRating) */
      averageRating /= totalOfRates;
      averageRating = parseFloat(averageRating.toFixed(2));
      /* console.log(totalOfRates) */
    }
    ratingSection = (
      <>
        <RatingSection>
          <RatingHeader>
            <RatingTitle>Rating của nhân vật</RatingTitle>
            <AverageRating>
              <AverageTop>
                <StarIcon />
                <AverageTitle>{averageRating}</AverageTitle>
              </AverageTop>
              <AverageContent>Rating trung bình</AverageContent>
            </AverageRating>
          </RatingHeader>
          <ReviewText>Ratings</ReviewText>
          <RatingGuide>
            <i>
              Bạn chỉ có thể vote bằng cách click vào rating tương ứng ( review
              hãy viết ở phần comment nhé :3)
            </i>
          </RatingGuide>
          <RatingRowContainer>
            <RatingRowItem
              /* isRated={hasRated} */
              onClick={() => handleRatingWaifu(5, waifu.waifuid)}
            >
              <RatingType>5</RatingType>
              <RowStarIcon />
              <RatingRange
                percent={
                  totalOfRates !== 0
                    ? `${
                        (waifu.rating.five.length / totalOfRates) * 100 - 100
                      }%`
                    : "-100%"
                }
              ></RatingRange>
              <RatingType style={{ marginLeft: "12px" }}>
                {waifu.rating.five.length}
              </RatingType>
            </RatingRowItem>
            <RatingRowItem
              /* isRated={hasRated} */
              onClick={() => handleRatingWaifu(4, waifu.waifuid)}
            >
              <RatingType>4</RatingType>
              <RowStarIcon />
              <RatingRange
                percent={
                  totalOfRates !== 0
                    ? `${
                        (waifu.rating.four.length / totalOfRates) * 100 - 100
                      }%`
                    : "-100%"
                }
              ></RatingRange>
              <RatingType style={{ marginLeft: "12px" }}>
                {waifu.rating.four.length}
              </RatingType>
            </RatingRowItem>
            <RatingRowItem
              /* isRated={hasRated} */
              onClick={() => handleRatingWaifu(3, waifu.waifuid)}
            >
              <RatingType>3</RatingType>
              <RowStarIcon />
              <RatingRange
                percent={
                  totalOfRates !== 0
                    ? `${
                        (waifu.rating.three.length / totalOfRates) * 100 - 100
                      }%`
                    : "-100%"
                }
              ></RatingRange>
              <RatingType style={{ marginLeft: "12px" }}>
                {waifu.rating.three.length}
              </RatingType>
            </RatingRowItem>
            <RatingRowItem
              /* isRated={hasRated} */
              onClick={() => handleRatingWaifu(2, waifu.waifuid)}
            >
              <RatingType>2</RatingType>
              <RowStarIcon />
              <RatingRange
                percent={
                  totalOfRates !== 0
                    ? `${(waifu.rating.two.length / totalOfRates) * 100 - 100}%`
                    : "-100%"
                }
              ></RatingRange>
              <RatingType style={{ marginLeft: "12px" }}>
                {waifu.rating.two.length}
              </RatingType>
            </RatingRowItem>
            <RatingRowItem
              /* isRated={hasRated} */
              onClick={() => handleRatingWaifu(1, waifu.waifuid)}
            >
              <RatingType>1</RatingType>
              <RowStarIcon />
              <RatingRange
                percent={
                  totalOfRates !== 0
                    ? `${(waifu.rating.one.length / totalOfRates) * 100 - 100}%`
                    : "-100%"
                }
              ></RatingRange>
              <RatingType style={{ marginLeft: "12px" }}>
                {waifu.rating.one.length}
              </RatingType>
            </RatingRowItem>
          </RatingRowContainer>
        </RatingSection>
      </>
    );
    body = (
      <GridDisplay>
        <ImageHolder>
          <AddTitle>Ảnh nhân vật</AddTitle>
          <div className="image-label">
            <label htmlFor="select-image">
              {/* If has type === true => character image */}
              <ImgColumn
                type={true}
                src={!imageUrl ? waifu.image : imageUrl}
                alt="char-pic"
              />
              {editActive && (
                <input
                  accept="image/*"
                  type="file"
                  id="select-image"
                  style={{ display: "none" }}
                  onChange={imageHandler}
                />
              )}
              <OwnedLabel>{isOwned ? "Owned" : "Not owned"}</OwnedLabel>
            </label>
          </div>
          <AddTitle>Ảnh nguồn</AddTitle>
          <div>
            <label htmlFor="select-source-image">
              <ImgColumn
                type={false}
                src={!imageSrcUrl ? waifu.sourceimg : imageSrcUrl}
                alt="char-src"
              />
              {editActive && (
                <input
                  accept="image/*"
                  type="file"
                  id="select-source-image"
                  style={{ display: "none" }}
                  onChange={imageSrcHandler}
                />
              )}
            </label>
          </div>
        </ImageHolder>
        <GridInfo editActive={editActive}>
          <GridInfoItem>
            <GridInfoTitle>Tên nhân vật: </GridInfoTitle>
            {editActive ? (
              <InputName
                type="text"
                placeholder="Ex: Yae Miko,..."
                onChange={(e) => setCharName(e.target.value)}
              />
            ) : (
              waifu.name
            )}
          </GridInfoItem>

          {!editActive && (
            <GridInfoItem>
              <GridInfoTitle>Rank (most-owned): </GridInfoTitle>#
              {waifus.findIndex((item) => item.waifuid === waifu.waifuid) + 1}
            </GridInfoItem>
          )}

          {!editActive && (
            <GridInfoItem>
              <GridInfoTitle>Số người sở hữu: </GridInfoTitle>
              {waifu.user.length}
            </GridInfoItem>
          )}

          <GridInfoItem>
            <GridInfoTitle>Nguồn: </GridInfoTitle>
            {editActive ? (
              <InputName
                type="text"
                placeholder="Ex: Yae Miko,..."
                onChange={(e) => setCharSrc(e.target.value)}
              />
            ) : (
              waifu.source
            )}
          </GridInfoItem>

          <GridInfoItem>
            <GridInfoTitle>Link nguồn: </GridInfoTitle>
            {editActive ? (
              <InputName
                type="text"
                placeholder="Ex: Yae Miko,..."
                onChange={(e) => setSrcLink(e.target.value)}
              />
            ) : (
              waifu.sourcelink
            )}
          </GridInfoItem>

          <GridInfoItem>
            <GridInfoTitle>Link ảnh tham khảo của nhân vật: </GridInfoTitle>
            {editActive ? (
              <InputName
                type="text"
                placeholder="Ex: Yae Miko,..."
                onChange={(e) => setImgSrc(e.target.value)}
              />
            ) : (
              waifu.imagesrc
            )}
          </GridInfoItem>

          <GridDescItem>
            <GridInfoTitle>Mô tả: </GridInfoTitle>
            {editActive ? (
              <DescArea
                type="text"
                placeholder="Ex: Yae Miko,..."
                onChange={(e) => setCharDesc(e.target.value)}
              />
            ) : (
              waifu.desc
            )}
          </GridDescItem>
        </GridInfo>
      </GridDisplay>
    );
  }