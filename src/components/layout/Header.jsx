import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/actions/authActions';
import { Layout, Menu, Button, Typography, Space, Drawer } from 'antd';
import { MenuOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import LanguageSwitcher from "../LanguageSwitcher"

const { Header: AntdHeader } = Layout;
const { Title } = Typography;

const Header = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const user = useSelector((state) => state.auth.user);
    const [drawerVisible, setDrawerVisible] = useState(false);

    const logoutHandler = () => {
        dispatch(logout());
    };

    const showDrawer = () => {
        setDrawerVisible(true);
    };

    const onCloseDrawer = () => {
        setDrawerVisible(false);
    };

    return (
        <AntdHeader style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0 24px',
            backgroundColor: '#fff',
            borderBottom: '1px solid #f0f0f0',
            height: '64px',
        }}>
            <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
                <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>Docnova</Link>
            </Title>
            <div className="hidden md:flex flex-grow justify-end items-center">
                <Space size="middle" style={{ marginLeft: 24 }}>
                    <LanguageSwitcher />
                    {isAuthenticated ? (
                        <>
                            {user && <span className="text-gray-600">Welcome, {user.username || user.email}!</span>}
                            <Button type="default" icon={<LogoutOutlined />} onClick={logoutHandler}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Button type="primary">
                            <Link to="/login">Login</Link>
                        </Button>
                    )}
                </Space>
            </div>
            <div className="md:hidden">
                <Button type="primary" icon={<MenuOutlined />} onClick={showDrawer} />
                <Drawer
                    title="Menu"
                    placement="right"
                    onClose={onCloseDrawer}
                    open={drawerVisible}
                    bodyStyle={{ padding: 0 }}
                >
                    <Menu
                        mode="vertical"
                        items={[
                            
                            {
                                key: 'lang-switcher-mobile',
                                label: <LanguageSwitcher />,
                                className: 'border-b border-solid border-gray-200 py-2 mb-2',
                            },
                            isAuthenticated ? (
                                {
                                    key: 'logout-mobile',
                                    label: (
                                        <Space>
                                            {user && <span className="text-gray-600">Welcome, {user.username || user.email}!</span>}
                                            <Button type="default" icon={<LogoutOutlined />} onClick={logoutHandler} block>
                                                Logout
                                            </Button>
                                        </Space>
                                    ),
                                    className: 'mt-2',
                                }
                            ) : (
                                {
                                    key: 'login-mobile',
                                    label: (
                                        <Button type="primary" block>
                                            <Link to="/login">Login</Link>
                                        </Button>
                                    ),
                                    className: 'mt-2',
                                }
                            ),
                        ]}
                        style={{ borderRight: 'none' }}
                        onClick={onCloseDrawer}
                    />
                </Drawer>
            </div>
        </AntdHeader>
    );
};

export default Header;