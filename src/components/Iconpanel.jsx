import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { usersData } from "../assets/data";

const Iconpanel = () => {
  return (
    <Box>
      <Stack gap="12px" marginTop="10rem">
        {usersData.map((user, index) => {
          return (
            <Box key={index}>
              {user.image && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: user.active == true && "2px solid #3B82F6",
                    borderRadius: "50%",
                    position: "relative",
                  }}
                >
                  {user.notification && (
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
                  )}
                  <img src={user.image} alt="users" />
                  {user.active === false && (
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
                  )}

                  {user.active === true && (
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
                          background: "#22C55E",
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
                  )}
                </Box>
              )}
              {user.title && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "10px",
                      textAlign: "center",
                      fontWeight: 800,
                      background: user.isBackground,
                      color: user.isColor,
                    }}
                    variant=""
                  >
                    {user.title}
                  </Typography>
                </Box>
              )}
            </Box>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Iconpanel;
