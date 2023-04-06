import { Box, Stack, Typography } from "@mui/material";
import saveIcon from "../assets/images/save.svg";
import shareIcon from "../assets/images/share.svg";
import messageIcon from "../assets/images/message1.svg";
import { tasks } from "../assets/data";
import addIcon from "../assets/images/add-icon.svg";
const Task = ({ task }) => {

  return (
    <Box
      sx={{
        background: "white",
        borderRadius: "8px",
        padding: "20px",
        boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
        margin: "20px 0",
        // width: "300px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography
            sx={{
              color: "#1F2633",
              fontWeight: 600,
              fontSize: "12px",
              lineHeight: "20px",
            }}
          >
            {task.title}
          </Typography>
          {task.save && (
            <Stack direction="row" alignItems="center" gap="10px">
              <img src={saveIcon} alt="save" />
              <Typography
                sx={{
                  color: "#17A5E6",
                  fontSize: "10px",
                  lineHeight: "16px",
                  fontWeight: 800,
                }}
              >
                {task.save}
              </Typography>
            </Stack>
          )}
        </Stack>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
        }}
      >
        {task.badges.length > 0 &&
          task.badges.map((item, index) => (
            <Typography
              key={index}
              sx={{
                padding: "6px 9px",
                textAlign: "center",
                borderRadius: "16px",
                border: item.isBorder && "1px solid #EBEEF2",
                lineHeight: "12px",
                fontSize: "10px",
                fontWeight: 800,
                background: item.bgColor,
                color: item.textColor,
              }}
            >
              {item.title}
            </Typography>
          ))}
      </Box>

      <Box>
        {task?.users?.length > 0 && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box className="flex-row" gap="14px">
              <Stack direction="row" alignItems="center">
                {task.users.map((user, index) => (
                  <Box
                    key={index}
                    sx={{
                      marginLeft: index === 0 ? "0" : "-10px",
                    }}
                  >
                    <img src={user.image} alt="user" className="user-image" />
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
              <Box
                sx={{
                  border: "2px dotted #EBEEF2",
                  padding: "8px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <img src={addIcon} alt="add-more" />
              </Box>
            </Box>

            <Box className="flex-row" gap="14px">
              <Stack direction="row" alignItems="center" gap="10px">
                <img src={shareIcon} alt="share" />
                <Typography
                  sx={{
                    color: "#98A2B2",
                    lineHeight: "16px",
                    fontWeight: 800,
                    fontSize: "10px",
                  }}
                >
                  {task.share}
                </Typography>
              </Stack>

              <Stack direction="row" alignItems="center" gap="10px">
                <img src={messageIcon} alt="message" />
                <Typography
                  sx={{
                    color: "#98A2B2",
                    lineHeight: "16px",
                    fontWeight: 800,
                    fontSize: "10px",
                  }}
                >
                  {task.messages}
                </Typography>
              </Stack>
            </Box>
          </Stack>
        )}
      </Box>
    </Box>
  );
};

export default Task;
