import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
// Metarilas Icons 
import SpeedIcon from '@mui/icons-material/Speed';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import BarChartIcon from '@mui/icons-material/BarChart';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateIcon from '@mui/icons-material/Create';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import UpgradeIcon from '@mui/icons-material/Upgrade';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import DryCleaningIcon from '@mui/icons-material/DryCleaning';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import BookIcon from '@mui/icons-material/Book';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import MailIcon from '@mui/icons-material/Mail';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';








import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
// import {

//   type Session,
//   type Navigation,
// } from '@toolpad/core/AppProvider';

// components 
import FirstComponen from './FirstComponen';
import SecondComponent from './SecondComponent';
import ThirtComponent from './ThirtComponent';


// css 
import '../css/DashBordHeroSection.css';


// Brand Image 
import BrandImage from '../images/letter-m-mountain-green-curves-shadow-logo-vector__1_-removebg-preview.png'




const NAVIGATION = [
  {
    kind: 'header',
    title: 'OVERVIEW',
  },
  {
    segment: 'App',
    title: 'App',
    icon: <SpeedIcon />,
  }
  ,
  {
    segment: 'E-commerce',
    title: 'E-commerce',
    icon: <BusinessCenterIcon />,
  },
  {
    segment: 'Analytics',
    title: 'Analytics',
    icon: <BarChartIcon />,
  },
  {
    segment: 'Banking',
    title: 'Banking',
    icon: <AccountBalanceIcon />,
  },
  {
    segment: 'Booking',
    title: 'Booking',
    icon: <AirplaneTicketIcon />,
  },
  {
    segment: 'File',
    title: 'File',
    icon: <InsertDriveFileIcon />,
  },

  {
    kind: 'header',
    title: 'MANAGEMENT',
  },
  {
    segment: 'User',
    title: 'User',
    icon: <AccountCircleIcon />,
    children: [
      {
        segment: 'Create User',
        title: 'Create User',
        icon: <CreateIcon />,
      },
      {
        segment: 'Read User',
        title: 'Read User',
        icon: <FormatListBulletedIcon />,
      },
      {
        segment: 'Update User',
        title: 'Update User',
        icon: <UpgradeIcon />,
      },
    ],
  },
  {
    segment: 'Product',
    title: 'Product',
    icon: <DryCleaningIcon />,
    children: [
      {
        segment: 'Create Product',
        title: 'Create Product',
        icon: <CreateIcon />,
      },
      {
        segment: 'Read Product',
        title: 'Read Product',
        icon: <FormatListBulletedIcon />,
      },
      {
        segment: 'Update Product',
        title: 'Update Product',
        icon: <UpgradeIcon />,
      },
    ],
  },
  {
    segment: 'Order',
    title: 'Order',
    icon: <ProductionQuantityLimitsIcon />,
    children: [
      {
        segment: 'Create Order',
        title: 'Create Order',
        icon: <CreateIcon />,
      },
      {
        segment: 'Read Order',
        title: 'Read Order',
        icon: <FormatListBulletedIcon />,
      },
      {
        segment: 'Update Order',
        title: 'Update Order',
        icon: <UpgradeIcon />,
      },
    ],
  },
  {
    segment: 'Invoice',
    title: 'Invoice',
    icon: <FileCopyIcon />,
    children: [
      {
        segment: 'Create Invoice',
        title: 'Create Invoice',
        icon: <CreateIcon />,
      },
      {
        segment: 'Read Invoice',
        title: 'Read Invoice',
        icon: <FormatListBulletedIcon />,
      },
      {
        segment: 'Update Invoice',
        title: 'Update Invoice',
        icon: <UpgradeIcon />,
      },
    ],
  },
  {
    segment: 'Blog',
    title: 'Blog',
    icon: <BookIcon />,
    children: [
      {
        segment: 'Create Blog',
        title: 'Create Blog',
        icon: <CreateIcon />,
      },
      {
        segment: 'Read Blog',
        title: 'Read Blog',
        icon: <FormatListBulletedIcon />,
      },
      {
        segment: 'Update Blog',
        title: 'Update Blog',
        icon: <UpgradeIcon />,
      },
    ],
  },
  {
    segment: 'Jobs',
    title: 'Jobs',
    icon: <WorkHistoryIcon />,
    children: [
      {
        segment: 'Create Jobs',
        title: 'Create Jobs',
        icon: <CreateIcon />,
      },
      {
        segment: 'Read Jobs',
        title: 'Read Jobs',
        icon: <FormatListBulletedIcon />,
      },
      {
        segment: 'Update Jobs',
        title: 'Update Jobs',
        icon: <UpgradeIcon />,
      },
    ],
  },
  
  {
    segment: 'File Manager',
    title: 'File Manager',
    icon: <FolderSharedIcon />,
  },
  // {
  //   segment: 'Mail',
  //   title: 'Mail',
  //   icon: <MailIcon />,
  // },
  // {
  //   segment: 'Chat',
  //   title: 'Chat',
  //   icon: <ChatIcon />
  // },
  // {
  //   segment: 'Calender',
  //   title: 'Calender',
  //   icon: <CalendarMonthIcon />
  // }
];



const demoTheme = extendTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}



function DashBordHeroSection(props) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  const demoWindow = window ? window() : undefined;





  return (

    <AppProvider
      navigation={NAVIGATION}
      router={router}
   
      window={demoWindow}
      branding={{
        logo: <img src={BrandImage} alt="BrandImage" />,
         title:''
    
      }}

      
    >
    
      
      <DashboardLayout  header >
       
        <PageContainer>
       <FirstComponen/>
       <SecondComponent/>
       <ThirtComponent/>
        </PageContainer>

      </DashboardLayout>
    </AppProvider>
  );
}

export default DashBordHeroSection;
