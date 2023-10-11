import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";
import {Link} from "react-router-dom";
import { useEffect, useState } from "react";

const NavBottonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: calc(100% - 34px);
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1200px) {
    max-width: 90%;
  }
`;

const Logo = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: red;

  @media (max-width: 1200px) {
    font-size: 32px;
  }
`;

const SearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  background-color: rgb(34, 35, 38);
  width: 200px;
  height: 40px;
  border: none;
  border-radius: 4px;
  padding: 0 12px;
  margin: ${(props) => props.margin};
  font-size: 14px;
  color: #ffffff;

  &::placeholder{
    color: #ffffff;
  }

  @media (max-width: 480px) {
    width: 100px;
  }
`;

const NavBotton = (props) => {
  const [inputValue, setInputValue] = useState("");
  
  const SearchInputChangeHandler = (e) => {
    setInputValue(e.target.value)
    props.inputSearchValue(e.target.value)
  };

  useEffect(() => {
    props.inputSearchValue(inputValue);
  }, [inputValue]);

  return (
    <NavBottonContainer>
      <Link to="/">
        <Logo className="logo">Doomflix</Logo>
      </Link>

      <SearchButton>
        <SearchInput
          margin="0 10px"
          type="text"
          placeholder="검색"
          onChange={SearchInputChangeHandler}
        />
        <IoMdSearch size="32" color="white" />
      </SearchButton>
    </NavBottonContainer>
  );
};

export default NavBotton;
