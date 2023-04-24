// assets
import { IconEdit, IconLockOpen, IconBuildingBank } from '@tabler/icons';

// constant
const icons = { IconEdit, IconLockOpen, IconBuildingBank };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const settings = {
    id: 'settings',
    title: 'Settings',
    type: 'group',
    children: [
        {
            id: 'editProfile',
            title: 'Edit Profile',
            type: 'item',
            url: '/editprofile',
            icon: icons.IconEdit,
            breadcrumbs: false
        },
        {
            id : 'password',
            title : "Password & Security",
            type : "item",
            url : "/password&security",
            icon : icons.IconLockOpen,
            breadcrumbs : false
        },
        {
            id : 'withdraw',
            title : "Withdraw Details",
            type : "item",
            url : "/withdrawdetails",
            icon : icons.IconBuildingBank,
            breadcrumbs : false
        },
    ]
};

export default settings;
