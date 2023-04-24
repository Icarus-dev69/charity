// assets
import { IconHome, IconWallet, IconHeartHandshake } from '@tabler/icons';

// constant
const icons = { IconHome, IconWallet,IconHeartHandshake };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
    id: 'dashboard',
    // title: 'Dashboard',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/home',
            icon: icons.IconHome,
            breadcrumbs: false
        },
        {
            id : 'wallet',
            title : "Wallet",
            type : "item",
            url : "/wallet",
            icon : icons.IconWallet,
            breadcrumbs : false
        },
        {
            id : 'campaign',
            title : "Campaign",
            type : "item",
            url : "/campaign",
            icon : icons.IconHeartHandshake,
            breadcrumbs : false
        },
    ]
};

export default dashboard;
