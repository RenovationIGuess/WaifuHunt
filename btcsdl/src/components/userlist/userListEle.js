import styled from "styled-components";

export const UserListLayout = styled.div`
  width: 1056px;
  display: flex;
  justify-content: space-between;
`;

export const UserListMain = styled.div`
  width: 768px;
  border-radius: 16px;
  padding-bottom: 60px;
`;

export const UserListTable = styled.div`
  width: 768px;
  background-color: #fff;
  border-radius: 16px;
  padding: 16px;
`;

export const ListOfUsers = styled.div``;

export const AdminTag = styled.div`
  font-size: 14px;
  background: #f1496b;
  /* text-weight: bold; */
  color: #fff;
  padding: 1px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
	cursor: pointer;
`;

export const UserTag = styled.div`
  font-size: 14px;
  background: #4cc2ff;
  /* text-weight: bold; */
  color: #fff;
  padding: 1px 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;
`;

export const UserActionWrap = styled.div`
	display: flex;
	align-items: center;
	gap: 10px 10px;
	flex-wrap: wrap;
	justify-content: space-evenly;
`

export const UserListHeader = styled.div`
	display: flex;
	align-items: center;
  justify-content: space-between;
	font-weight: bold;
	padding: 8px 0 20px;
	font-size: 16px;
	line-height: 20px;
	border-bottom: 1px solid #f1f4f9;
`

export const UserListHeaderTitle = styled.div`
  
`

export const UserListTableWrap = styled.div`
	padding: 16px 0;
	min-height: 524px;
`

export const PaginateFooter = styled.div`
	width: 100%;
	padding: 8px 0;
	border-top: 1px solid #f1f4f9;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const UserSearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 240px;
`