import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { History } from "./pages/History"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { TablePhase } from "./pages/Products"
import { TabsComponent } from "./components/Tabs"
import { Table } from "./components/Table"

export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<Home />}  />
                {/* <Route path="/history" element={<Table />}  /> */}
                <Route path="/products" element={<TablePhase />}  />
                <Route path="/products" element={<TabsComponent />}  />

            </Route>
            
        </Routes>
    )
}