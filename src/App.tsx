import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import AdminPage from "./pages/AdminPage";
import User from "./pages/User";
import Management from "./pages/Management";
import InventoryMetric from "./components/InventoryMetric";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/admin/users/add" element={<User />} />
            <Route path="dashboard" element={<Management />}>
                <Route index element={<InventoryMetric />} />
                <Route path="products" element={<ProductList />} />
                <Route path="products/add" element={<ProductForm />} />
                <Route path="products/:id" element={<ProductForm />}/>
            </Route>
        </>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
