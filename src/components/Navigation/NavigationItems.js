import React from "react";
import NavigationItem from './NavigationItem'
const navigationItems = () => (
  <ul>
    <NavigationItem link="/" exact>
      Home
    </NavigationItem>
    <NavigationItem link="/records">Records</NavigationItem>
    <NavigationItem link="/users">Users</NavigationItem>
    <NavigationItem link="/permissions">Permissions</NavigationItem>
    <NavigationItem link="/admin">Admin</NavigationItem>
  </ul>
);

export default navigationItems;
