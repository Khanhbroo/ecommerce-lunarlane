# 🛍️ LunarLane — Modern E-Commerce Storefront & Cart Engine

<div align="center">

**A high-performance modern fashion e-commerce storefront engineered with React 18, Redux Toolkit, Tailwind CSS, and Stripe Checkout.**

Featuring centralized state management, responsive slide-out cart drawers, dynamic product filtering, wishlisting, and seamless multi-step checkout.

[![GitHub Repo](https://img.shields.io/badge/GitHub-Khanhbroo%2Fecommerce--lunarlane-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Khanhbroo/ecommerce-lunarlane)
[![React 18](https://img.shields.io/badge/React-18.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.1-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Stripe](https://img.shields.io/badge/Stripe-Checkout_Integration-635BFF?style=for-the-badge&logo=stripe&logoColor=white)](https://stripe.com)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

---

## 🌟 Executive Overview

**LunarLane** is an enterprise-grade digital retail experience designed to simulate a high-conversion luxury streetwear and fashion brand. Built with modern React architectural patterns, it emphasizes **predictable global state flow**, **zero layout shift**, and an **intuitive consumer checkout funnel**.

The platform provides a complete shopping lifecycle: from hero carousel discovery and categorized product exploration to wishlisting, real-time cart manipulation, and payment gateway handoffs.

---

## 🚀 Key Highlights & Functional Capabilities

### 1. 🛒 Centralized Cart Architecture (`Redux Toolkit`)
- **Normalized State Model**: Cart items are tracked with immutable state operations via `createSlice`:
  - `addToCart`: Increments existing item quantities and recomputes line totals or pushes new items into the collection.
  - `removeFromCart`: Decrements quantity or cascades item removal when unit count drops to zero.
  - `removeAllFromCart`: Purges target SKUs from the cart payload with instantaneous aggregate count updates.
- **Dual Presentation Modes**:
  - **Slide-out Cart Drawer (`ModelCart.jsx`)**: Contextual slide-out overlay enabling quick bag modifications without leaving the product browse loop.
  - **Dedicated Cart Page (`CartPage.jsx`)**: Comprehensive tabular summary detailing unit pricing, subtotal tallies, shipping fee estimates, and order finalization.

### 2. 💳 Stripe Payment Gateway Integration
- Secure checkout pipeline utilizing `react-stripe-checkout`.
- Pre-populates customer billing details, verifies order amounts, and executes payment intent handshakes with test token simulation.

### 3. 🔍 Product Discovery & Rich Details
- **Responsive Hero Carousel**: Fluid multi-slide hero banners powered by Slick Carousel (`react-slick`).
- **Product Details Showcase (`ProductDetails.jsx`)**: Multi-angle image galleries, size/color variant selectors, live pricing, stock indicators, and customer reviews.
- **Faceted Wishlist System (`favouriteSlice.js`)**: Dedicated favorites store allowing shoppers to bookmark apparel items across sessions.

### 4. 🎨 Design System & Visual Polish
- Modular typography and layout tokens (`CustomComponents.jsx`) enforcing consistent spacing, line heights, and branding across screens (`Title`, `Caption`, `BodyOne`).
- Clean mobile-first responsive layout tailored with Tailwind CSS utility classes.

---

## 🛠️ Technology Stack

| Layer | Technologies | Role in System |
| :--- | :--- | :--- |
| **Frontend Framework** | React 18.2, Vite 5 | Core reactive component tree and rapid HMR bundling |
| **State Management** | Redux Toolkit (`@reduxjs/toolkit`), `react-redux` | Predictable global store for cart state and wishlists |
| **Routing** | React Router DOM v6.21 | Client-side page navigation and parameterized route handling |
| **Styling** | Tailwind CSS 3.4, PostCSS, Autoprefixer | Utility-first responsive design system and glassmorphism cards |
| **Carousels & Motion** | React Slick, Slick Carousel | High-performance touch-friendly hero banners and product sliders |
| **Payments** | React Stripe Checkout, Stripe API | Secure card checkout integration and payment token handshakes |
| **Iconography** | React Icons (Bootstrap Icons, Ionicons) | Lightweight vectorized SVG iconography |

---

## 🏗️ Project Directory Structure

```text
ecommerce-lunarlane/
├── public/                # Static public assets & favicons
├── src/
│   ├── assets/
│   │   ├── common/        # Brand assets, payment logos, and layout frames
│   │   └── data/          # Mock product catalog data, categories, and reviews
│   ├── components/
│   │   ├── cart/          # CheckoutForm and ModelCart drawer
│   │   ├── common/        # CustomComponents (Title, Caption, Layout primitives)
│   │   ├── hero/          # Hero slider banner & promotional banners
│   │   └── product/       # ProductCard, ProductSlide, ShippingInfo
│   ├── redux/
│   │   ├── slice/         # cartSlice.js, favouriteSlice.js
│   │   └── store.js       # Central Redux store configuration
│   ├── router/            # Route registry and barrel exports
│   ├── screen/
│   │   ├── home/          # Home landing page with curated product sections
│   │   ├── product/       # Product catalog & ProductDetails view
│   │   ├── shop/          # Filterable Shop grid
│   │   └── CartPage.jsx   # Dedicated checkout review page
│   ├── styles/            # Global Tailwind stylesheet (index.css)
│   ├── App.jsx            # Top-level routing layout & header/footer wrappers
│   └── main.jsx           # React DOM entry point wrapped with Redux Provider
├── package.json           # Dependencies and project scripts
├── tailwind.config.js     # Tailwind CSS theme configuration
└── vite.config.js         # Vite bundler configuration
```

---

## ⚡ Redux Store Architecture

The application state is managed by two dedicated slices connected to a single root store:

```text
               ┌───────────────────────┐
               │   Redux Root Store    │
               └───────────┬───────────┘
                           │
             ┌─────────────┴─────────────┐
             ▼                           ▼
  ┌─────────────────────┐     ┌─────────────────────┐
  │      cartSlice      │     │   favouriteSlice    │
  ├─────────────────────┤     ├─────────────────────┤
  │ - itemList: []      │     │ - favourites: []    │
  │ - totalQuantity: 0  │     │ - addToFav()        │
  │ - addToCart()       │     │ - removeFromFav()   │
  │ - removeFromCart()  │     └─────────────────────┘
  │ - removeAll()       │
  └─────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** >= 18.0.0
- **npm** >= 9.0.0

### Local Installation
```bash
# 1. Clone the repository
git clone https://github.com/Khanhbroo/ecommerce-lunarlane.git

# 2. Navigate to project root
cd ecommerce-lunarlane

# 3. Install dependencies
npm install

# 4. Launch Vite development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production
```bash
# Compile and optimize production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🔮 Future Enhancements

- [ ] **Backend Integration**: Connect to an Express + MongoDB REST API for dynamic inventory tracking.
- [ ] **Auth & Customer Profiles**: User registration, order history, and saved address books.
- [ ] **Stripe Elements Migration**: Transition from legacy checkout modal to custom Stripe Elements embed.

---

## 👨‍💻 Author

**Nguyen Quoc Khanh (KhanhBro)**  
*Senior Full-Stack Software Engineer & Creative UI Architect*  
- **GitHub**: [@Khanhbroo](https://github.com/Khanhbroo)  
- **Portfolio**: [Interactive macOS Web OS](https://macos-portfolio-khanhbroo.vercel.app)  
- **Email**: [khanhmathias532211@gmail.com](mailto:khanhmathias532211@gmail.com)  

---

## 📄 License

This project is open-source under the [MIT License](LICENSE).
