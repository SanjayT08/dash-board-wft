import { Box, Divider, Stack, Typography } from "@mui/material";
import gridViewIcon from "../../assets/images/grid-view.svg";
import listViewIcon from "../../assets/images/list-view.svg";
import lockIcon from "../../assets/images/lock.svg";
import twitterIcon from "../../assets/images/twitter.svg";
import Searchbar from "../Searhbar";
import menu1 from "../../assets/images/save1.svg";
import menu2 from "../../assets/images/menu4.svg";
import menu3 from "../../assets/images/menu3.svg";
import menu4 from "../../assets/images/menu5.svg";
import menu5 from "../../assets/images/menu2.svg";
import chevronDown from "../../assets/images/chevron-down.svg";

const icons = [menu1, menu2, menu3, menu4, menu5];

const Filter = () => {
  return (
    <Stack
      sx={{
        flexDirection: { lg: "row", xs: "column" },
        flexWrap: "wrap",
        alignItems: { lg: "center", xs: "start" },
        gap: "14px",
        justifyContent: { lg: "space-between" },
        margin: "20px 0",
      }}
    >
      {/* Left */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: { lg: "start", xs: "space-between" },
          width: { lg: "auto", xs: "100%" },
        }}
      >
        <Stack direction="row">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #EBEEF2",
              padding: "15px 16px",
              background: "#FAFBFC",
              borderRadius: "8px 0px 0px 8px",
            }}
          >
            <img src={gridViewIcon} alt="grid-view" />
            <Typography
              lineHeight="20px"
              fontWeight="700"
              fontSize="12px"
              textAlign="center"
              color="#606C80"
            >
              Board View
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              border: "1px solid #EBEEF2",
              padding: "15px 16px",
              borderLeft: "none",
              background: "#FAFBFC",
              borderRadius: "0px 8px 8px 0px",
            }}
          >
            <img src={listViewIcon} alt="list-view" />
            <Typography
              lineHeight="20px"
              fontWeight="700"
              fontSize="12px"
              textAlign="center"
              color="#606C80"
            >
              List View
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            borderLeft: { lg: "1px solid #EBEEF2" },
            borderRight: { lg: "1px solid #EBEEF2" },
            padding: "15px 16px",
            color: "#98A2B2",
          }}
        >
          <img src={lockIcon} alt="lock" />
          <Typography
            lineHeight="16px"
            fontWeight="700"
            fontSize="11px"
            color="#98A2B2"
          >
            Limited Access
          </Typography>
          <img src={chevronDown} alt="down" style={{ marginLeft: "16px" }} />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "15px 16px",
            color: "#98A2B2",
          }}
        >
          <Typography
            lineHeight="16px"
            fontWeight="700"
            fontSize="11px"
            color="#98A2B2"
          >
            Owners
          </Typography>
          <Box
            className="flex-row"
            sx={{
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: "#ffffff",
              padding: "1px 0px",
            }}
          >
            <img src={twitterIcon} alt="twitter" />
          </Box>
          <Typography
            lineHeight="16px"
            fontWeight="700"
            fontSize="11px"
            color="#606C80"
          >
            Twitter Team
          </Typography>
        </Box>
      </Box>

      {/* center */}
      <Box>
        <Searchbar />
      </Box>

      {/* Right */}
      <Box className="flex-row" gap="10px">
        {icons.map((icon, index) => (
          <Box
            key={index}
            sx={{
              width: "40px",
              height: "40px",
              borderRadius: "8px",
              padding: "8px",
              background: "#fff",
              border: "1px solid #EBEEF2",
              cursor: "pointer",
            }}
          >
            <img src={icon} alt="icon" />
          </Box>
        ))}
      </Box>
    </Stack>
  );
};

export default Filter;
