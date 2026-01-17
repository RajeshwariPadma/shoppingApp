import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { StoreContextProvider } from './components/Navigation_Pages/StoreContext.jsx'
import { AuthContextProvider } from './components/Navigation_Pages/AuthContext.jsx'
import { WishListContextProvide } from './components/Navigation_Pages/WishlistContext.jsx'

createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <StoreContextProvider>
      <WishListContextProvide>
        <App />
      </WishListContextProvide>

    </StoreContextProvider>
  </AuthContextProvider>


  // <StrictMode>
  //   <App />
  // </StrictMode>
)
