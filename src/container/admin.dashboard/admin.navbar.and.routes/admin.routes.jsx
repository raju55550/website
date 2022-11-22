import HomeLogo from '../../../assets/images/home.svg';
import EditLogo from '../../../assets/images/edit.svg';
import CreateLogo from '../../../assets/images/create.svg';
import SettingsLogo from '../../../assets/images/settings.svg';
import Dashboardlogo from '../../../assets/images/dashboard.svg';
import recordLogo from '../../../assets/images/records.svg';

import files from '../../../assets/images/files.svg';

// Dashboard Pages
import Home from '../Pages/home/home';
import Create from '../Pages/create/create';
import Project from '../Pages/project/project';

import Settings from '../Pages/settings/settings';
import CreatePlan from '../Pages/createplan/createplan';
import UserPlan from '../Pages/user.plan/user.plan';
import PaymentHistory from '../Pages/payment.history/payment.history';
import AppKey from '../Pages/app.key/app.key';

// Employee Routes

export const adminDashboardRoutes = [
  {
    path: '/admin-dashboard',
    component: <Home />,
  },
  {
    path: '/admin-dashboard/create',
    component: <Create />,
  },
  {
    path: '/admin-dashboard/project',
    component: <Project />,
  },
  {
    path: '/admin-dashboard/settings',
    component: <Settings />,
  },
  {
    path: '/admin-dashboard/create-plan',
    component: <CreatePlan />,
  },
  {
    path: '/admin-dashboard/edit-plan/:id',
    component: <CreatePlan />,
  },
  {
    path: '/admin-dashboard/user-plan',
    component: <UserPlan />,
  },
  {
    path: '/admin-dashboard/payment-history',
    component: <PaymentHistory />,
  },
  {
    path: '/admin-dashboard/app-key',
    component: <AppKey />,
  },
];

export const AdminSideBarItems = [
  {
    path: '/admin-dashboard',
    icon: <img src={Dashboardlogo} alt='logo' width='24px' />,
    title: 'Dashboard',
    isSubNav: false,
  },

  {
    path: '/admin-dashboard/create',
    icon: <img src={recordLogo} alt='logo' width='24px' />,
    title: 'Dub',
    isSubNav: false,
  },
  {
    path: '/admin-dashboard/project',
    icon: <img src={files} alt='logo' width='24px' />,
    title: 'Dubbed Files',
    isSubNav: false,
  },
  {
    path: '/admin-dashboard/settings',
    icon: <img src={SettingsLogo} alt='logo' width='24px' />,
    title: 'Settings',
    isSubNav: false,
  },
  {
    path: '/admin-dashboard/create-plan',
    icon: <img src={SettingsLogo} alt='logo' width='24px' />,
    title: 'CreatePlan',
    isSubNav: false,
  },
  {
    path: '/admin-dashboard/user-plan',
    icon: <img src={EditLogo} alt='logo' width='24px' />,
    title: 'UserPlan',
    isSubNav: false,
  },
  {
    path: '/admin-dashboard/payment-history',
    icon: <img src={SettingsLogo} alt='logo' width='24px' />,
    title: 'PaymentHistory',
    isSubNav: false,
  },
  {
    path: '/admin-dashboard/app-key',
    icon: <img src={SettingsLogo} alt='logo' width='24px' />,
    title: 'App Key',
    isSubNav: false,
  },
];
