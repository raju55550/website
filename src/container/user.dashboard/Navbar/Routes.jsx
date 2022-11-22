import DashboardLogo from '../../../assets/images/dashboard.svg';
import recordLogo from '../../../assets/images/records.svg';
import TransactionsLogo from '../../../assets/images/transactions.svg';
import FilesLogo from '../../../assets/images/files.svg';
import SettingsLogo from '../../../assets/images/settings.svg';

// Dashboard Pages
import Dashboard from '../Pages/dashboard.content/dashboard.content'
import Records from '../Pages/Records/Records';
import Transactions from '../Pages/Transactions/Transactions';
import Files from '../Pages/Files/Files';
import Settings from '../Pages/Settings/Settings';

import Uploadfile from '../../../components/common/file.upload.box/file.upload.box';
// Employee Routes
import Dubbing from '../Pages/Dubbing/Dubbing';
import Subscriptions from '../../../container/user.dashboard/Pages/Subscriptions/Subscriptions';
import Pricing from '../../../container/user.dashboard/Pages/pricing/Pricing';

export const dashboardRoutes = [
    {
        path: "/dashboard",
        component: <Dashboard />,
    },
    {
        path: "/dashboard/Uploadfile",
        component: <Files />,
    },
    {
        path: "/dashboard/transactions",
        component: <Transactions />,
    },
    {
        path: "/dashboard/Dubbing",
        component: <Dubbing />,
    },
    {
        path: "/dashboard/files",
        component: <Files />,
    },
    {
        path: "/dashboard/Subscriptions",
        component: <Subscriptions />,
    },

    {
        path: "/dashboard/settings",
        component: <Settings />,
    },
]

export const SideBarItems = [
    {
        path: "/dashboard",
        icon: <img src={DashboardLogo} alt='logo' />,
        title: "Dashboard",
        isSubNav: false,
    },

    {
        path: "/dashboard/Uploadfile",
        icon: <img src={recordLogo} alt='logo' />,
        title: "Dubbing",
        isSubNav: false,
    },

    {
        path: "/dashboard/transactions",
        icon: <img src={TransactionsLogo} alt='logo' />,
        title: "Transactions",
        label: 2,
        isSubNav: false,
    },

    {
        path: "/dashboard/Dubbing",
        icon: <img src={FilesLogo} alt='logo' />,
        title: "Dubbed Files",
        isSubNav: false,
    },
    {
        path: "/dashboard/Subscriptions",
        icon: <img src={FilesLogo} alt='logo' />,
        title: "Subscriptions",
        isSubNav: false,
    },
   
    
    {
        path: "/dashboard/settings",
        icon: <img src={SettingsLogo} alt='logo' />,
        title: "Settings",
        isSubNav: false,
    },
];
