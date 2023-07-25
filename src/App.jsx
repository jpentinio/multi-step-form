import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Info from "./Info";
import Plan from "./Plan";
import AddOns from "./AddOns";
import Summary from "./Summary";
import Layout from "./Layout";
import { FormProvider } from "./context";

function App() {
  return (
    <Layout>
      <FormProvider>
        <Routes>
          <Route path="/" element={<Info />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/addons" element={<AddOns />} />
          <Route path="/summary" element={<Summary />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </FormProvider>
    </Layout>
  );
}

export default App;
