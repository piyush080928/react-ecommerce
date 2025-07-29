import { BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import Cart from './Cart/Cart';
import Like from './Liked/Liked'
import { useState } from 'react';
import Search from './Search/Search';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './pages/ProductDetails';
import products from './Data/data';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';



function App() {
  const [showModal, setShowModal] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [showLike, setShowLike] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

  const handleProtectedAction = (callback) => {
     if (!isAuthenticated) {
      setShowModal(true)
      toast.error("Please Login to Continue")
     } else {
      callback();
     }
  }

  // ADD TO CART 

  const addToCart = (product) => {
  const exists = cartItems.find((item) => item.id === product.id);
  const parsedPrice = parseFloat(product.price) || 0;

  if (exists) {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
    toast.success(`${product.name} quantity increased`);
  } else {
    setCartItems((prev) => [
      ...prev,
      {
        ...product,
        quantity: 1,
        price: parsedPrice,
      },
    ]);
    toast.success(`${product.name} added to cart`);
  }
};





  const incrementQty = (id) => {
    setCartItems(prev => prev.map(item => item.id === id ? {...item, quantity: item.quantity + 1} : item))
  };

  const decrementQty = (id) => {
    setCartItems(prev => prev.map(item => item.id === id && item.quantity > 1 ? {...item, quantity: item.quantity - 1} : item))
  }

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  };

  const placeOrder = () => {
    setCartItems([])
    toast.success("Order Placed SuccedFully")
  };

  // LIKED

 const toggleLike = (product) => {
  const exists = likedItems.find(item => item.id === product.id);
  if (exists) {
    setLikedItems(prev => prev.filter(item => item.id !== product.id));
    toast.info(`${product.name} removed from liked`);
  } else {
    setLikedItems(prev => [...prev, product]);
    toast.success(`${product.name} added to liked`);
  }
};


  // LOGIN/SIGNUP

  const[isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("user")
  );

  const [username, setUsername] = useState(
    localStorage.getItem("user") || ""
  );

  const handleLogin = (name) => {
    localStorage.setItem("user", name)
    setUsername(name)
    setIsAuthenticated(true)
    setShowModal(false)
  };

  const handleLogout = () => {
    localStorage.removeItem("user")
    setIsAuthenticated(false)
    setUsername("");
  }
  

  

  return (
   <BrowserRouter>
   <ToastContainer position="top-center" className=" text-black"
        autoClose={3000}        
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
         />
    <Navbar  cartCount={cartItems.length}
  likedCount={likedItems.length} isAuthenticated={isAuthenticated} userName={username} onLogout={handleLogout} onSearchClick={() => setShowSearch(true)} onLikeClick={() => setShowLike(true)} onCartClick={() => setShowCart(true)} onUserClick={() => setShowModal(true)}></Navbar>
    {showModal && <AuthModal onClose={() => setShowModal(false)} onLogin={handleLogin}></AuthModal>}
    {showCart && <Cart placeOrder={placeOrder} cartItems={cartItems} incrementQty={incrementQty} decrementQty={decrementQty} removeFromCart={removeFromCart} cartClose={() => setShowCart(false)}></Cart>}
    {showLike && <Like toggleLike={toggleLike} likedItems={likedItems} likeClose={() => setShowLike(false)}></Like>}
    {showSearch && <Search products={products} searchQuery={searchQuery} setSearchQuery={setSearchQuery} searchClose={() => setShowSearch(false)}></Search>}
    <Routes>
      <Route path='/' element={<Home addToCart={addToCart}
      toggleLike={toggleLike}
      handleProtectedAction={handleProtectedAction} searchTerm={searchQuery} />} />

      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
       <Route path="/category/:categoryName" element={<CategoryPage />} />
       <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  )
   
}

export default App
 