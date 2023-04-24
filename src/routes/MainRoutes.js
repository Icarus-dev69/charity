import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';
import RequireAuth from 'features/auth/RequireAuth';
import Authentication from 'views/realnameauthentication';
import EditProfile from 'views/settings/editProfile';
import PassWord from 'views/settings/password';
import WithdrawDetails from 'views/settings/withdrawDetails';
import InviteFriends from 'views/invite/inviteFriends';
import Contact from 'views/invite/contact';
import Community from 'views/invite/community';
import CampaignDetails from 'views/dashboard/CampaignDetails.js';
import Donate from 'views/dashboard/Donate';
import Deposit from 'views/dashboard/Deposit';
import WithDaw from 'views/dashboard/WithDraw';
import PurchaseToken from 'views/dashboard/PurchaseToken';
import CryptoDeposit from 'views/dashboard/CryptoDeposit';
import BankDeposit from 'views/dashboard/BankDeposit';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard/Default')));
const Wallet = Loadable(lazy(() => import('views/dashboard/Wallet/index')));
const Campaign = Loadable(lazy(() => import('views/dashboard/Campaign/index')));


// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    element : <RequireAuth/>,
    children : [
        {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: 'home',
                element: <DashboardDefault />
            },
            {
                path: 'wallet',
                element: <Wallet />
            },
            {
                path: 'campaign',
                element: <Campaign />,
                // children: [
                //     {
                //         path : '/campaignDetails/:id',
                //         element:<CampaignDetails/>
                //     }
                // ]
            },
            {
                path : 'campaignDetails/:id',
                element:<CampaignDetails/>
            },
            {
                path : 'donate/:id',
                element:<Donate/>
            },
            {
                path : 'deposit',
                element:<Deposit/>
            },
            {
                path : 'deposit/cryptocurrency',
                element:<CryptoDeposit/>
            },
            {
                path : 'deposit/bankTransfer',
                element:<BankDeposit/>
            },
            {
                path : 'withdraw',
                element:<WithDaw/>
            },
            {
                path : 'purchaseToken',
                element:<PurchaseToken/>
            },
            {
                path: 'authentication',
                element: <Authentication />
            },
            {
                path: 'editprofile',
                element: <EditProfile />
            },
            {
                path: 'password&security',
                element: <PassWord />
            },
            {
                path: 'withdrawdetails',
                element: <WithdrawDetails />
            },
            {
                path: 'invitefriends',
                element: <InviteFriends />
            },
            {
                path: 'community',
                element: <Community />
            },
            {
                path: 'contact',
                element: <Contact />
            },
        ]
    }
    ]
};

export default MainRoutes;
