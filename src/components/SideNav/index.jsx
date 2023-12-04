// Sidebar.js
import {
  AttachMoney,
  DashboardSharp,
  Lan,
  LocalOffer,
  Logout,
  ManageAccounts,
  PeopleAlt,
} from '@mui/icons-material';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ModifiedButton from 'components/ModifiedButton';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Assuming you are using React Router

const Sidebar = ({ selectedIndex }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const routeList = [
    {
      name: 'Dashboard',
      link: '/app',
      icon: <DashboardSharp />,
      activeIndex: 0,
      requiredRoles: ['admin'],
    },
    {
      name: 'Appointments',
      link: '/appointments',
      icon: <ManageAccounts />,
      activeIndex: 1,
      requiredRoles: ['admin'],
    },
    {
      name: 'Billing',
      link: '/billing',
      icon: <AttachMoney />,
      activeIndex: 2,
      requiredRoles: ['admin'],
    },
    {
      name: 'Services',
      link: '/services',
      icon: <Lan />,
      activeIndex: 3,
      requiredRoles: ['admin'],
    },
    {
      name: 'Offers',
      link: '/offers',
      icon: <LocalOffer />,
      activeIndex: 4,
      requiredRoles: ['admin'],
    },
    {
      name: 'Customers',
      link: '/customers',
      icon: <PeopleAlt />,
      activeIndex: 5,
      requiredRoles: ['admin'],
    },
  ];

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleLogOut = () => {
    navigate('/');
    localStorage.removeItem('token');
  };

  const [selectedRoute, setSelectedRoute] = useState(0);
  const handleListItemClick = (index) => {
    setSelectedRoute(index);
  };

  const handleMakeAppointment = () => {
    navigate('appointments/create');
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div
          className="pt-8 w-64 h-full bg-blue-500"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <div className="flex justify-center pb-8 pt-4">
            <ModifiedButton
              label="Make An Appoitnment"
              onClick={handleMakeAppointment}
            />
          </div>
          <List>
            {routeList.map((route, index) => (
              <ListItem
                key={index}
                component={Link}
                to={route.link}
                onClick={() => handleListItemClick(index)}
                className={`${index === selectedRoute ? 'border-l-4' : ''}`}
              >
                <ListItemIcon style={{ color: 'white' }}>
                  {route.icon}
                </ListItemIcon>
                <ListItemText className="text-white" primary={route.name} />
              </ListItem>
            ))}
          </List>
          <div className="mt-auto ">
            <List>
              <ListItem button onClick={handleLogOut}>
                <ListItemIcon style={{ color: 'white' }}>
                  <Logout />
                </ListItemIcon>
                <ListItemText className="text-white" primary="Logout" />
              </ListItem>
            </List>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default Sidebar;
