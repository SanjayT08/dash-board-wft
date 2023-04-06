import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import editIcon from "../../assets/images/edit.svg";
import addIcon from "../../assets/images/add-icon.svg";
import user1 from "../../assets/images/user1.svg";
import user2 from "../../assets/images/user5.svg";
import user3 from "../../assets/images/user4.svg";
import user4 from "../../assets/images/user3.svg";

export const navLinks = [
  "Timeline",
  "Calender",
  "Dashboard",
  "Progress",
  "Forms",
  "More",
];

export const users = [user1, user2, user3, user4];
const DashboardHeader = () => {
  const [activeLink, setActiveLink] = useState(0);

  const handleNavLinks = (index) => {
    setActiveLink(index);
  };

  return (
    <Stack sx={{
        flexDirection: {lg: "row", xs: "col"},
        alignItems: "center",
        gap: {lg: 0, xs: "14px"},
        justifyContent: {lg: "space-between"}
    }}>
      {/* Left */}
      <Box display="flex" alignItems="center" gap="40px">
        <Typography
          fontSize="30px"
          lineHeight="48px"
          fontWeight="700"
          color="#1f2633"
        >
          Task Boards
        </Typography>
        <img src={editIcon} alt="task-board-image" />
      </Box>

      {/* Middle */}
      <Box>
        <Stack direction="row" sx={{ alignItems: "center"}} gap="20px">
          {navLinks.map((item, index) => (
            <Typography
           onClick={() => handleNavLinks(index)}
              key={index}
              sx={{
                cursor: "pointer",
                color: activeLink === index ? "#3B82F6" : "#98A2B2",
                fontWeight: 700,
                fontSize: "12px",
                textAlign: "center",
                lineHeight: "20px",
                padding: "10px 0",
                borderBottom: activeLink === index && "1px solid #3B82F6",
              }}
            >
              {item}
            </Typography>
          ))}
        </Stack>
      </Box>

      {/* right */}

      <Box className="flex-row" gap="24px">
        <Stack direction="row" alignItems="center">
          {users.map((user, index) => (
            <Box
              key={index}
              sx={{
                marginLeft: index === 0 ? "0" : "-10px",
              }}
            >
              <img src={user} alt="user" className="user-image" />
            </Box>
          ))}
          <Box
            sx={{
              background: "#F2F4F7",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              marginLeft: "-10px",
            }}
            className="flex-row"
          >
            <Typography
              sx={{
                color: "#606C80",
                textAlign: "center",
                fontWeight: 800,
                lineHeight: "20px",
                fontSize: "12px",
              }}
            >
              +5
            </Typography>
          </Box>
        </Stack>
        <Box sx={{
            border: "2px dotted #EBEEF2",
            padding: "8px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            cursor: "pointer"
        }}>
          <img src={addIcon} alt="add-more" />
        </Box>
      </Box>
    </Stack>
  );
};

export default DashboardHeader;
