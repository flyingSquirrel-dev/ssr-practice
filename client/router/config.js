import Home from "../component/Home";
import Path1 from "../component/Path1";
import Path2 from "../component/Path2";
import Path3 from "../component/Path3";

const routers = [
  {
    path: "/",
    name: "Home",
    component: Home,
    exact: true,
  },
  {
    path: "/path1",
    name: "Path1",
    component: Path1,
  },
  {
    path: "/path2",
    name: "Path2",
    component: Path2,
  },
  {
    path: "/path3",
    name: "Path3",
    component: Path3,
  },
];

export default routers;
