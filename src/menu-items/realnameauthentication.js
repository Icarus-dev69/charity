// assets
import { IconIdBadge2 } from '@tabler/icons';

// constant
const icons = { IconIdBadge2 };

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const authentication = {
    id: 'authentication',
    title: 'Real-name Authentication',
    type: 'group',
    children: [
        {
            id: 'authentication',
            title: 'Authentication',
            type: 'item',
            url: '/authentication',
            icon: icons.IconIdBadge2,
            breadcrumbs: false
        },
       
    ]
};

export default authentication;
