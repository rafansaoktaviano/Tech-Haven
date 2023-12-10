// import React, { useEffect, useState } from "react";
// import TabBar from "../../components/TabBar/TabBar";
// import PageInfo from "../../components/PageInfo/PageInfo";
// import SideBarDashboard from "../../components/SideBarDashboard/SideBarDashboard";
// import OrderHistory from "../../components/OrderHistory/OrderHistory";
// import CheckoutSuccessPage from "../CheckoutSuccessPage/CheckoutSuccessPage";
// import OrderViewDetails from "../../components/OrderViewDetails/OrderViewDetails";
// import { useLocation } from "react-router-dom";

// const UserDashboardPage = () => {
//   const [tabValue, setTabValue] = useState(1);
  
//   return (
//     <div className="max-w-[1280px] m-auto">
//       <TabBar />
//       <div className=" flex gap-[72px] h-full mb-[32px]">
//         <SideBarDashboard tabValue={tabValue} setTabValue={setTabValue} />
//         <div
//           className={`${
//             tabValue === 7 ? "h-auto" : "h-[718px]"
//           } right w-full  rounded-[4px] border-[1px] shadow-xl `}
//         >
//           {tabValue === 1 ? (
//             <div></div>
//           ) : tabValue === 2 ? (
//             <OrderHistory tabValue={tabValue} setTabValue={setTabValue} />
//           ) : tabValue === 3 ? (
//             <div>tesst</div>
//           ) : tabValue === 4 ? (
//             <div></div>
//           ) : tabValue === 5 ? (
//             <div></div>
//           ) : tabValue === 7 ? (
//             <OrderViewDetails setTabValue={setTabValue} />
//           ) : (
//             <div></div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboardPage;
