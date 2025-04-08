import { Menu, Avatar } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
// import axiosClient from '../axiosClient';
import React from 'react';

const UserDropdown = () => {
    const navigate =  useNavigate()

    const logout = async() => {
      try {
        // await axiosClient.post('/logout')
        console.log(sessionStorage.getItem("isLogged"));
        sessionStorage.setItem("isLogged", "false");
        navigate("/home");
      } catch (error) {
        console.error("Logout failed:", error);
      }
    };

    return (
        <Menu trigger="click-hover" openDelay={100} closeDelay={500} shadow="md" width={200} zIndex={1600} withArrow >
          <Menu.Target>
            <Avatar src={null} radius="xl" ml="lg" color="thistle" />
          </Menu.Target>
          <Menu.Dropdown >
            <Menu.Item onClick={() => {navigate('/profile')}}>My Account</Menu.Item>
            <Menu.Divider />
            <Menu.Item onClick={logout} >Logout</Menu.Item>
          </Menu.Dropdown>
        </Menu>
      );
    }

export default UserDropdown