import {
    UploadOutlined,
    FundOutlined,
    UserOutlined,
    VideoCameraOutlined,
  } from '@ant-design/icons';
  import {  Menu } from 'antd';
import { useState } from 'react'; 
import { Link } from 'react-router-dom';

const { SubMenu } = Menu

const MenuItems = () =>{

    const [openKeys, setOpenKeys] = useState([]);

    const rootSubmenuKeys = ["10", "21", "31", "41", "51", "61"];
  
  
    const onOpenChange = (openKeysList) => {
      const latestOpenKey = openKeysList.find(
        (key) => openKeys.indexOf(key) === -1
      );
      if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        setOpenKeys(openKeysList);
      } else {
        const opens = latestOpenKey ? [latestOpenKey] : [];
        setOpenKeys(opens);
      }
    };
  

    return (
        <>
            <div className="logo">Domain Finder</div>
            <Menu
                openKeys={openKeys}
                mode="inline"
                theme="dark"
                onOpenChange={onOpenChange}
                className="menu-ul"
                >
                    <SubMenu
                        key="10"
                        title={
                            <span>
                            <UserOutlined />
                            <span>Admin</span>
                            </span>
                        }
                    >
                        <Menu.Item key="11">
                            <Link  className='text-decoration-none' to={`/categories`}>
                                <span> Categories </span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>


                    <SubMenu
                        key="20"
                        title={
                            <span>
                            <FundOutlined />
                            <span>Content</span>
                            </span>
                        }
                    >
                        <Menu.Item key="21">
                            <Link className='text-decoration-none' to={`/products`}>
                                <span> Products </span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="22">
                            <Link className='text-decoration-none' to={`/about`}>
                                <span> About </span>
                            </Link>
                        </Menu.Item>
                    </SubMenu>
            </Menu>
        </>
    )
}

export default MenuItems