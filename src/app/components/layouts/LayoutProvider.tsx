import { ReactNode } from "react";
import { Provider } from "@/app/components/ui/provider";
import  NavigationLayout  from "./navigationLayout";
import { PlannerViewProvider } from "@/context/PlannerViewContext";

const LayoutProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider forcedTheme="light">
      <PlannerViewProvider>
        <NavigationLayout>
          {children}
        </NavigationLayout>
      </PlannerViewProvider>
    </Provider>
  );
};

export default LayoutProvider;
