import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons ,FontAwesome5, Feather, Octicons } from '@expo/vector-icons';
import DrawerItems from './DrawerItems.js';
import Download from './Download.js';
import ContactUs from './ContactUs.js';
import AboutATP from './AboutATP.js';
import TermsAndConditions from './TermsAndConditions.js';
import Header from './Header.js';
import { getHeaderTitle } from '@react-navigation/elements';
import RulesListNavigation from '../screens/RulesListNavigation.js';
import ATPRulesList from '../screens/ATPRulesList.js';

const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerType="front" initialRouteName="RulesListNavigation"
                screenOptions={{
                    activeTintColor: '#e91e63', itemStyle: { marginVertical: 10 },

                }} >
                {
                    DrawerItems.map(drawer =>

                        <Drawer.Screen
                            key={drawer.name}
                            name={drawer.name}
                            options={{
                                drawerIcon: ({ focused }) =>
                                    drawer.iconType === 'Material' ?
                                        <MaterialCommunityIcons name={drawer.iconName} size={24} color={focused ? "#e91e63" : "black"} />
                                        : drawer.iconType === 'Feather' ?
                                            <Feather name={drawer.iconName} size={24} color={focused ? "#e91e63" : "black"} />
                                            : drawer.iconType === 'Octicons' ?
                                                <Octicons name={drawer.iconName} size={24} color={focused ? "#e91e63" : "black"} />
                                                : <FontAwesome5 name={drawer.iconName} size={24} color={focused ? "#e91e63" : "black"} />
                                ,
                                headerShown: true,
                                header: ({ navigation, route, options }) => {
                                    const title = getHeaderTitle(options, route.name);
                                    return (<Header screen={title} />);
                                }
                            }}
                            component={
                                drawer.name === 'ATP Rules List' ? RulesListNavigation
                                    : drawer.name === 'About ATP' ? AboutATP
                                        : drawer.name === 'Terms And Conditions' ? TermsAndConditions
                                            : drawer.name === 'Download' ? Download
                                                : drawer.name === 'Contact Us' ? ContactUs
                                                    : RulesListNavigation}
                        />
                    )
                }

            </Drawer.Navigator>
        </NavigationContainer>
    );
}