import Sidebar from "../components/sidebar/sidebar";
import Header from "../components/header/header";
import AdminpProfile from "../components/adminprofile/Adminprofile";
import Chart from "../components/chart/chart";
import Card from "../components/Card/Card";

const DashBoard = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        height: "100%",
        width: "100%",
        position: "absolute",
      }}
    >
      <Sidebar />
      <div style={{ width: "100%", backgroundColor: "#eee" }}>
        <Header />
        <div style={{ display: "flex", width: "100%" }}>
          <div style={{ flex: "1", padding: "1rem" }}>
            <Chart />
            <div style={{ display: "flex", marginTop: "1rem", gap: "1rem" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "1",
                  gap: "1rem",
                }}
              >
                <Card>1</Card>
                <Card>2</Card>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flex: "1",
                  gap: "1rem",
                }}
              >
                <Card>3</Card>
                <Card>4</Card>
              </div>
            </div>
          </div>
          <div style={{ "flex-basis": "280px" }}>
            <AdminpProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
