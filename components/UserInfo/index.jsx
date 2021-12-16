import React from "react";
import Name from "../Name";
import styled from "styled-components";


function UserInfo(props) {
  const { userpic, nameProps } = props;

  return (
    <UserInfo1>
      <Userpic src={userpic} />
      <Name productOwner={nameProps.productOwner} emileeSimchenko={nameProps.emileeSimchenko} />
      <MoreIcon src="/img/more-icon-10@1x.png" />
    </UserInfo1>
  );
}

const UserInfo1 = styled.div`
  position: absolute;
  height: 80px;
  top: 53px;
  left: 0;
  display: flex;
  padding: 13px 20px;
  justify-content: flex-end;
  align-items: center;
  min-width: 270px;
  background-color: var(--eerie-black);
`;

const Userpic = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-end;
  border-radius: 24px;
  object-fit: cover;
`;

const MoreIcon = styled.img`
  width: 16px;
  height: 4px;
  margin-left: 61px;
  margin-top: 6px;
  object-fit: cover;
`;

const UserInfo2 = styled.div`
  position: absolute;
  height: 80px;
  top: 53px;
  left: 0;
  display: flex;
  padding: 13px 20px;
  justify-content: flex-end;
  align-items: center;
  min-width: 270px;
  background-color: var(--eerie-black);
`;

const Userpic1 = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-end;
  border-radius: 24px;
  object-fit: cover;
`;

const MoreIcon1 = styled.img`
  width: 16px;
  height: 4px;
  margin-left: 61px;
  margin-top: 6px;
  object-fit: cover;
`;

const UserInfo3 = styled.div`
  position: absolute;
  height: 80px;
  top: 53px;
  left: 0;
  display: flex;
  padding: 13px 20px;
  justify-content: flex-end;
  align-items: center;
  min-width: 270px;
  background-color: var(--eerie-black);
`;

const Userpic2 = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-end;
  border-radius: 24px;
  object-fit: cover;
`;

const MoreIcon2 = styled.img`
  width: 16px;
  height: 4px;
  margin-left: 61px;
  margin-top: 6px;
  object-fit: cover;
`;

const UserInfo4 = styled.div`
  position: absolute;
  height: 80px;
  top: 53px;
  left: 0;
  display: flex;
  padding: 13px 20px;
  justify-content: flex-end;
  align-items: center;
  min-width: 270px;
  background-color: var(--eerie-black);
`;

const Userpic3 = styled.img`
  width: 48px;
  height: 48px;
  align-self: flex-end;
  border-radius: 24px;
  object-fit: cover;
`;

const MoreIcon3 = styled.img`
  width: 16px;
  height: 4px;
  margin-left: 61px;
  margin-top: 6px;
  object-fit: cover;
`;

export default UserInfo;
