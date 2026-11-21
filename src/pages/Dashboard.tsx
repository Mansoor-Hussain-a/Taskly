import DashboardLeft from "../components/DashboardLeft";
import DashboardRight from "../components/DashboardRight";

function Dashboard() {
  return (
    <div
      className="bg-bg-app min-h-[90vh] max-w-375 my-0 mx-auto"
      id="dashboardWrapper"
    >
      <div className="grid grid-cols-1  lg:grid-cols-[3fr_1fr] gap-10">
        <DashboardLeft />
        <DashboardRight />
      </div>
    </div>
  );
}
export default Dashboard;
