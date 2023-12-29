import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";

const PrivateLayout = () => {
  const isAuthenticated = true;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate(-1);
    }
  }, [isAuthenticated, navigate]);
  return (
    <div className="flex">
      <Sidebar className="h-screen bg-purple-300 shadow-lg">
        <Menu
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              // only apply styles on first level elements of the tree
              if (level === 0)
                return {
                  color: disabled ? "#f5d9ff" : "#000000",
                  backgroundColor: active ? "#eecef9" : undefined,
                  transition: "background-color 0.3s, color 0.3s",
                };
            },
          }}
        >
          <MenuItem> Profile </MenuItem>
          <MenuItem> My-AI-tools </MenuItem>
          <SubMenu label="Home"> 
            <MenuItem> Submit tool</MenuItem>
          </SubMenu>
          <SubMenu label="Manager">
            <MenuItem> Manage tool </MenuItem>
            <MenuItem> My-ai-tools </MenuItem>
          </SubMenu> 
          <SubMenu label="Admin">
            <MenuItem> Manage User</MenuItem>
            <MenuItem> Manage Employee </MenuItem>
          </SubMenu> 
        </Menu>
      </Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default PrivateLayout;

// 01:03