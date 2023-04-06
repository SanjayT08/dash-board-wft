import { Box, IconButton, InputBase, Stack } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import searchIcon from "../assets/images/search.svg";
import exitImage from "../assets/images/exit.svg";
const Searchbar = ({ isSubmitButton }) => {
  const [searchTearm, setSearchTearm] = useState("");
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        color: "#ebeee2",
        background: "#ffffff",
        border: "1px solid #ebeef2",
        borderRadius: "8px",
        height: "48px",
      }}
    >
      <Stack direction="row" alignItems="center" gap="6px">
        <img src={searchIcon} alt="search-icon" />
        <InputBase
          id="search"
          name="search"
          value={searchTearm}
          onChange={(event) => setSearchTearm(event.target.value)}
          placeholder="Search Tasks"
          sx={{
            fontSize: "12px",
            fontWeight: 700,
            color: "#98A2B2",
            lineHeight: !isSubmitButton && "20px"
          }}
        />
      </Stack>

      {isSubmitButton && (
        <img src={exitImage} alt="search" style={{ cursor: "pointer" }} />
      )}
    </Box>
  );
};

export default Searchbar;
