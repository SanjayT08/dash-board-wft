import { Box, Stack, Typography } from "@mui/material";
import dotIcons from "../assets/images/dot.svg";
import Task from "./Task";
import plusIcon from "../assets/images/plus.svg";

const Tasks = ({ tasks, title, backlogTask, backgroundColor, color }) => {
  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <Typography
            sx={{
              color: "#1F2633",
              lineHeight: "20px",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            {title}
          </Typography>
          <Box
            sx={{
              background: backgroundColor,
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              padding: "5px 9px",
            }}
            className="flex-row"
          >
            <Typography
              sx={{
                color: color,
                textAlign: "center",
                fontWeight: 800,
                lineHeight: "16px",
                fontSize: "10px",
              }}
            >
              {backlogTask}
            </Typography>
          </Box>
        </Box>
        <img src={dotIcons} alt="dotIcon" />
      </Stack>

      <Box>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}

        <Box
          sx={{
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "6px",
            textAlign: "center",
            boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
          }}
        >
          <img src={plusIcon} alt="plus" />
        </Box>
      </Box>
    </Box>
  );
};

export default Tasks;
