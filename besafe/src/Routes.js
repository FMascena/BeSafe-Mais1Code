import {
    Routes as WrapperRoutes,
    Route,
    BrowserRouter,
  } from "react-router-dom";
  
  
  export default function Routes() {
    return (
      <BrowserRouter>
      <ScrollToTop />
        <WrapperRoutes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/carrinho" element={<Cart />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/personalize" element={<Custom />} />
          <Route path="/produto" element={<Product />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/suporte" element={<Support />} />
          <Route path="/*" element={<NotFoundPage />} />
        </WrapperRoutes>
      </BrowserRouter>
    );
  }