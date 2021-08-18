import Admin from "./pages/Admin";
import Main from "./pages/Main";
import PeoplePage from "./pages/PeoplePage";
import { ADMIN_ROUTE, MAIN_ROUTE, PEOPLE_ROUTE } from "./utils/consts";



export const public2Routes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: PEOPLE_ROUTE + '/:id',
        Component: PeoplePage
    },
]

