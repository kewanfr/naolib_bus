import {
  HomeTwoTone,
  EditTwoTone,
  CheckCircleTwoTone,
  SettingFilled,
  SettingOutlined,
  SettingTwoTone,
} from "@ant-design/icons";
import { Menu } from "antd";
import { useState } from "react";
import { Outlet, Link } from "react-router-dom";

const Header = () => {
  const [current, setCurrent] = useState("h");
  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };
  return (
    <>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal">
        <Menu.Item key="h" icon={<HomeTwoTone />}>
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="r" icon={<SettingTwoTone />}>
          <Link to="/settings">Paramètres</Link>
        </Menu.Item>
      </Menu>
      <Outlet />
    </>
  );
};
export default Header;
