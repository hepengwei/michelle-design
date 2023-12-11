import React from "react";
import { useRoutes } from "react-router-dom";
import routesConfig from "routes/routes";
import { ConfigProvider } from "antd";
import "./app.scss";

const App = () => {
  const routes = useRoutes(routesConfig);
  return (
    <div className="app_container" translate="no">
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#4B805A",
          },
          components: {
            Input: {
              activeShadow: "0 0 0 2px rgba(75, 128, 90, 0.2)",
            },
          },
        }}
      >
        {routes}
      </ConfigProvider>
    </div>
  );
};

export default App;
