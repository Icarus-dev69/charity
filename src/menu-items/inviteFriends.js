// assets
import { IconUserPlus, IconNetwork, IconHeadset } from '@tabler/icons';

// constant
const icons = { IconUserPlus, IconNetwork, IconHeadset };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const inviteFriends = {
    id: 'inviteFriends',
    title: 'Invite Friends',
    type: 'group',
    children: [
        {
            id: 'invite',
            title: 'Invite Friends',
            type: 'item',
            url: '/invitefriends',
            icon: icons.IconUserPlus,
            breadcrumbs: false
        },
        {
            id : 'community',
            title : "Community",
            type : "item",
            url : "/community",
            icon : icons.IconNetwork,
            breadcrumbs : false
        },
        {
            id : 'contact',
            title : "Contact Us",
            type : "item",
            url : "/contact",
            icon : icons.IconHeadset,
            breadcrumbs : false
        },
    ]
};

export default inviteFriends;
