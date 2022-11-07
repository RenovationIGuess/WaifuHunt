if (waifuLoading) {
    body = (
      <LoadingWrap>
        <Loading src={Chilling} alt="loading-chilling" />
      </LoadingWrap>
    );
  } else {
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