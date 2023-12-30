import { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import {
  Bars3Icon,
  BoltIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  HomeIcon,
  UserCircleIcon,
  UserIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";

const PrivateLayout = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const [loading, setLoading] = useState(true);
  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };
  const isAuthenticated = true;
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
    setLoading(false);
  }, [isAuthenticated, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div aria-label="Loading..." role="status">
          <svg
            className="animate-spin w-10 h-10 fill-slate-800"
            viewBox="3 3 18 18"
          >
            <path
              className="opacity-20"
              d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
            ></path>
            <path d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div className="sm:flex">
      <Sidebar
        collapsed={menuCollapse}
        collapsedWidth="80px"
        className="h-screen bg-purple-300 shadow-lg"
      >
        <div className="flex items-center justify-center  ">
          <div className="border-y text-center py-6">
            <Link to="/dashboard" className="cursor-pointer text-[#121245]">
              {menuCollapse ? "AI" : "Awesome AI Platform"}
            </Link>
          </div>
          <div onClick={menuIconClick} className="flex justify-end mx-2">
            {menuCollapse ? (
              <ChevronDoubleRightIcon className="h-6 w-6 text-gray-950 rounded-full hover:bg-gray-200" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-gray-900 rounded-full hover:bg-gray-200" />
            )}
          </div>
        </div>
        <Menu
          className="h-4/5"
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
          <MenuItem 
            component={<Link to="/dashboard/profile" />}
            icon={<UserCircleIcon width={35} />}
          > 
            Profile 
          </MenuItem>
          <MenuItem icon={<WrenchIcon width={35} />}> My-AI-tools </MenuItem>
          <SubMenu icon={<HomeIcon width={35} />} label="Home">
            <MenuItem> Submit tool</MenuItem>
          </SubMenu>
          <SubMenu icon={<UserIcon width={35} />} label="Manager">
            <MenuItem> Manage tool </MenuItem>
            <MenuItem> My-ai-tools </MenuItem>
          </SubMenu>
          <SubMenu icon={<BoltIcon width={35} />} label="Admin">
            <MenuItem component={<Link to='/dashboard/manage-user'/>}> Manage User</MenuItem>
            <MenuItem> Manage Employee </MenuItem>
          </SubMenu>
        </Menu>
        <div className="p-4 border- border-t border-blue-950 text-center ">
          <Link to="/" className="cursor-pointer text-black">
            {menuCollapse ? (
              <ChevronDoubleLeftIcon className="h-6 w-6 inline rounded-full" />
            ) : (
              <span>
                <ChevronDoubleLeftIcon className="h-6 w-6 inline rounded-full" />{" "}
                Logout
              </span>
            )}
          </Link>
        </div>
      </Sidebar>
      <Outlet></Outlet>
    </div>
  );
};

export default PrivateLayout;
