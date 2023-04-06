import { Box, Divider, Stack, Typography } from "@mui/material";
import React from "react";
import user1 from "../assets/images/user1.svg";
import arrowImage from "../assets/images/arrow.svg";
import { sidelinks } from "../assets/data";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useStateContext } from "../context/ContextProvider";

const Leftpanel = () => {
  const { activeMenu } = useStateContext();
  return (
    <>
      {activeMenu && (
        <Box sx={{ padding: "20px 20px 80px", background: "#F7F8FA", }}>
          {/* user  */}
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ margin: "10px 0 20px" }}
          >
            <Stack direction="row" gap="14px">
              <Box
                sx={{
                  border: "2px solid #3B82F6",
                  borderRadius: "50%",
                  width: "46px",
                  height: "46px",
                }}
              >
                <img src={user1} alt="user-logo" className="user-image" />
              </Box>

              <Box>
                <Typography
                  fontWeight="700"
                  fontSize="12px"
                  sx={{ lineHeight: "20px", color: "#1f2633" }}
                >
                  Nancy Martino
                </Typography>
                <Typography
                  fontWeight={700}
                  fontSize="11px"
                  sx={{ lineHeight: "16px", color: "#B8BFCC" }}
                >
                  Designer
                </Typography>
              </Box>
            </Stack>

            <img src={arrowImage} alt="arrow" />
          </Stack>

          <Divider />

          {/* side links */}
        
            <Box sx={{ margin: "20px 0" }}>
              {sidelinks.map((links, index) => (
                <Box key={index}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    sx={{ margin: "20px 0" }}
                  >
                    <Typography
                      fontWeight={700}
                      fontSize="12px"
                      sx={{ lineHeight: "20px" }}
                    >
                      {links.title}
                    </Typography>
                    <MdKeyboardArrowUp
                      color="#3B82F6"
                      size={20}
                      sx={{ color: "#3B82F6" }}
                    />
                  </Stack>

                  {links.sideMenus.map((menu, index) => (
                    <Box key={index} margin="14px 0">
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <Stack direction="row" gap="14px" marginTop="10px">
                          <Box sx={{ width: "18px", height: "18px" }}>
                            <img
                              src={menu.image}
                              alt={menu.title}
                              alignItems="center"
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </Box>
                          <Typography
                            fontSize="12px"
                            fontWeight="600"
                            lineHeight="20px"
                            color="#1f2633"
                          >
                            {menu.title}
                          </Typography>
                        </Stack>
                        {menu.notification && (
                          <Typography
                            variant="p"
                            sx={{
                              background: "#DBEAFE",
                              color: "#3B82F6",
                              // padding: "0px 0px",
                              width: "26px",
                              height: "26px",
                              borderRadius: "50%",
                              fontSize: "10px",
                              fontWeight: 800,
                              textAlign: "center",
                              lineHeight: "16px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {menu.notification}
                          </Typography>
                        )}
                      </Box>
                    </Box>
                  ))}
                  <Divider sx={{ margin: "40px 0" }} />
                </Box>
              ))}
            </Box>
        </Box>
      )}
    </>
  );
};

export default Leftpanel;
