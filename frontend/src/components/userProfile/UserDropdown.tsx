import { Menu, Avatar } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useLogout } from '../login-register/useLogout';
import { IconLogout } from '@tabler/icons-react';

const UserDropdown = () => {
  const { logout } = useLogout();
  const navigate = useNavigate();

    return (
        <Menu trigger="click-hover" openDelay={100} closeDelay={500} shadow="md" width={200} zIndex={1600} withArrow >
          <Menu.Target>
            <Avatar src={null} radius="xl" ml="lg" color="thistle" />
          </Menu.Target>
          <Menu.Dropdown >
            <Menu.Item onClick={() => {navigate('/profile')}}>My Account</Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={logout} style={{ flex: 'row', flexDirection: "row" }} leftSection={<IconLogout stroke={2} />} >
              Logout
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );
    }

export default UserDropdown