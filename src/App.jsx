import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Iconpanel from "./components/Iconpanel";
import Leftpanel from "./components/Leftpanel";
import { useStateContext } from "./context/ContextProvider";
import Dashboard from "./pages/dashboard/Dashboard"

const App = () => {
  const { activeMenu } = useStateContext();
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          background: "#F7F8FA",
        }}
      >
        {activeMenu ? (
          <Box
            sx={{
              minWidth: { lg: "18rem", xs: "100%" },
              position: { lg: "static", xs: "fixed" },
              overflowY: { lg: "hidden", xs: "scroll" },
              borderRight: "1px solid #EBEEF2",
              zIndex: { lg: 1, xs: 900 },
              height: "100vh",
           
              top: "80px"
            }}
          >
            <Leftpanel />
          </Box>
        ) : (
          <Box
            sx={{
              width: "0px",
              overflowY: "scroll",
              scrollBehavior: "smooth",
            }}
          >
            <Leftpanel />
          </Box>
        )}
        <main className="main">
          <Box sx={{ padding: "20px", width: "100%", flex: 2 }}>
  
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
  
          </Box>
        </main>

      
          <Box
            sx={{
              width: "5rem",
              right: 0,
              borderLeft: "1px solid #EBEEF2",
              minHeight: "100vh",
              display: { lg: "flex", xs: "none" },
              justifyContent: "center",
            }}
          >
            <Iconpanel />
          </Box>
        
      </Box>
    </BrowserRouter>
  );
};

export default App;
