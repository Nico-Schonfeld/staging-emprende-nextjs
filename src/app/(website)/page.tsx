import { redirect } from "next/navigation";
import AppComponent from "./page.client";

const AppContainer = () => {
  // TODO crear homePage
  redirect("/auth/signin");
  /* return <AppComponent />; */
};

export default AppContainer;
