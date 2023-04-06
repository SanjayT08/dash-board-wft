import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { AiOutlineMenuFold, AiOutlineClose } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { navlinks } from "../assets/data";
import Searchbar from "./Searhbar";
import user1 from "../assets/images/user1.svg";
import messageIcon from "../assets/images/message.svg";
import notificationIcon from "../assets/images/notification.svg";
import { useStateContext } from "../context/ContextProvider";

const NavLinks = () => {
  const loaction = useLocation();
  return (
    <Stack direction="row" alignItems="center" gap="20px">
      {navlinks.map((link, index) => {
        return (
          <Link key={index}>
            <Typography
              to={`${link.path}`}
              sx={{
                cursor: "ponter",
                color: loaction.pathname === link.path ? "#323C4D" : "#7A8699",
                fontSize: "11px",
                lineHeight: "16px",
                fontWeight: 700,
              }}
            >
              {link.title}
            </Typography>
          </Link>
        );
      })}
    </Stack>
  );
};

const Navbar = () => {
  const { setActiveMenu, setActiveUserMenu } = useStateContext();
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#F7F8FA",
        borderBottom: "1px solid #EBEEF2",
      }}
    >
      <Box
        sx={{
          width: { lg: "18rem", xs: "100%" },
          display: "flex",
          alignItems: "center",
          padding: { lg: "0 20px", xs: "20px" },
          justifyContent: "space-between",
          position: {lg: "static", xs: "fixed"},
          top: 0,
          left: 0,
          zIndex: 1000,
          background: "#F7F8FA"
          
        }}
      >
        <Typography
          fontSize="20px"
          lineHeight="28px"
          fontWeight="700"
          color="#1f2633"
        >
          Dashboard
        </Typography>

        <IconButton onClick={() => setActiveMenu((prev) => !prev)}>
          <AiOutlineMenuFold color="#bbfcc" />
        </IconButton>
      </Box>

      <Box
        sx={{
          flex: "2",
          display: { lg: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #EBEEF2",
          padding: "20px 24px",
          borderTop: "none",
          borderBottom: "none",
        }}
      >
        <Stack direction="row" alignItems="center" gap="20px">
          <Searchbar isSubmitButton={true} />
          <IconButton>
            <MdKeyboardVoice />
          </IconButton>
        </Stack>

        <Box>
          <NavLinks />
        </Box>

        <Box>
          <Stack direction="row" alignItems="center" gap="20px">
            <img src={messageIcon} alt="messageIcon" className="icon-image" />
            <img
              src={notificationIcon}
              alt="notificationIcon"
              className="icon-image"
            />

            <Box
              sx={{
                border: "2px solid #3B82F6",
                borderRadius: "50%",
                width: "46px",
                height: "46px",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  color: "#ffff",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  position: "absolute",
                  right: "-4px",
                  top: "0%",
                  padding: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#EF4444",
                }}
              >
                <Typography fontSize="10px" fontWeight="700">
                  2
                </Typography>
              </Box>
              <img src={user1} alt="user-logo" className="user-image" />
              <Box
                sx={{
                  background: "#ffff",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  position: "absolute",
                  right: "10%",
                  top: "60%",
                  padding: "7px",
                }}
              >
                <Box
                  sx={{
                    background: "#EF4444",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    position: "absolute",
                    top: 0,
                    right: 0,
                    margin: "3px",
                  }}
                ></Box>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          width: "5rem",
          display: { lg: "flex", xs: "none" },
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <IconButton onClick={() => setActiveUserMenu((prev) => !prev)}>
          <AiOutlineClose size={22} color="#bbfcc" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Navbar;
