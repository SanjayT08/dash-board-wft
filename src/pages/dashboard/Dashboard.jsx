import { Box } from "@mui/material";
import React from "react";
import { tasks } from "../../assets/data";
import DashboardHeader from "../../components/dashboard/Header";
import Filter from "../../components/dashboard/Filter";
import Tasks from "../../components/Tasks";

const Dashboard = () => {
  const backlogTasks = [...tasks].filter((task) => task.isBacklog === true);
  const todoTasks = [...tasks].filter((task) => task.isTodo === true);
  const proesssingTasks = [...tasks].filter(
    (task) => task.isProcessing === true
  );
  const completedTasks = [...tasks].filter((task) => task.isCompleted === true);
  return (
    <Box>
      {/* dashboard header*/}
      <DashboardHeader />

      {/* Dashboard Filter */}
      <Filter />

      {/* dashbard tasks */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            lg: "repeat(4, 1fr)",
            md: "repeat(3, 1fr)",
            sm: "1fr 1fr",
          },
          gap: "20px",
        }}
      >
        <Tasks
          title="Backlog Tasks"
          backlogTask={5}
          tasks={backlogTasks}
          backgroundColor="rgba(234, 179, 8, 0.1)"
          color="#CA8A04"
        />

        <Tasks
          title="To Do Tasks"
          backlogTask={3}
          tasks={todoTasks}
          backgroundColor="rgba(236, 72, 153, 0.1)"
          color="#DB2777"
        />

        <Tasks
          title="In Process Tasks"
          backlogTask={2}
          tasks={proesssingTasks}
          backgroundColor="rgba(168, 85, 247, 0.1)"
          color="#9333EA"
        />

        <Tasks
          title="Done"
          backlogTask={5}
          tasks={completedTasks}
          backgroundColor="rgba(34, 197, 94, 0.1)"
          color="#16A34A"
        />
      </Box>
    </Box>
  );
};

export default Dashboard;
