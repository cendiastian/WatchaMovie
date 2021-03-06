import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: "#212121",
  border: "1px solid #808080",
  boxSizing: "border-box",
  borderRadius: 30,
  //   marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "100%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  //   width: "fit-content",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "20ch",
    // },
  },
}));

export default function PrimarySearchAppBar(props) {
  const navigate = useNavigate();
  const [params, setParams] = useState("");
  const searchHandler = () => {
    navigate(`/search/${(params)}`,
    );
  };
  const onChange = (e) => {
    console.log("masuk ga" + params);
    setParams(e.target.value);
  };
  return (
    <Search>
      <form onSubmit={searchHandler}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          onChange={onChange}
          value={params}
          onSubmit={searchHandler}
        />
      </form>
    </Search>
  );
}
