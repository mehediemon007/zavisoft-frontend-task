# Kicks — Premium Footwear Store

A high-performance, responsive e-commerce frontend built with **Next.js 16.1.6**. This project focuses on modular architecture, efficient state management, and a custom UI library built from the ground up.

[Live Demo URL](https://kicks-store-pi.vercel.app/)

---

## 🚀 Tech Stack

* **Framework:** Next.js 16.1.6 (App Router)
* **Language:** TypeScript
* **State Management:** Redux Toolkit (Client State)
* **Data Fetching:** TanStack Query (React Query) & Axios (Server State)
* **Styling:** Tailwind CSS
* **Icons:** Custom SVG Icon System
* **Deployment:** Vercel

---

## ✨ Key Features

* **Product View in Modal:** Quick-view functionality using a **Compound Component Pattern** to maintain context while browsing.
* **Cart Integration:** Core "Add to Cart" functionality powered by Redux Toolkit, with a dedicated **Cart Page** to view all selected products.
* **Async State Management:** Server-side data fetching with React Query for optimized caching and background revalidation.
* **Reliable Asset Loading:** Custom `ImageWithFallback` component that gracefully handles broken image URLs by displaying a branded placeholder, preventing broken layouts.

---

## 🛠️ Local Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/mehediemon007/zavisoft-frontend-task.git](https://github.com/mehediemon007/zavisoft-frontend-task.git)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Configure Environment Variables:**
    Create a `.env.local` file in the root directory and add your API endpoint:
    ```bash
    NEXT_PUBLIC_API_URL=https://api.escuelajs.co/api/v1
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🏗️ Project Architecture

To ensure the codebase remains clean and scalable, the following patterns were implemented:

### 1. Hybrid State Management
We explicitly separate **Client State** from **Server State** to reduce complexity:
* **Redux Toolkit:** Handles local interactions like Cart data and UI toggles.
* **React Query:** Manages all asynchronous data (Products, Categories) including loading and error states.



### 2. Compound Components
The Modal and Header systems use the Compound Component pattern. This provides a declarative and highly readable API:

```tsx
<Modal isOpen={isOpen} onClose={close}>
  <Modal.Content>
    <Modal.Header>Product Details</Modal.Header>
    <Modal.Body>Custom content here...</Modal.Body>
    <Modal.Footer>
       <Button onClick={close}>Close</Button>
    </Modal.Footer>
  </Modal.Content>
</Modal>
```

### 3. SSR + React Query Hydration
Server Components prefetch data at request time and pass it to the client via `HydrationBoundary`. This means the user receives fully rendered HTML instantly, and React Query takes over on the client for background revalidation — zero loading spinners on first paint.

```tsx
// Server Component (page.tsx)
const queryClient = new QueryClient();
await Promise.all([
  queryClient.prefetchQuery({ queryKey: productKeys.lists(), queryFn: getProducts }),
  queryClient.prefetchQuery({ queryKey: categoryKeys.lists(), queryFn: getCategories }),
]);

return (
   <HydrationBoundary state={dehydrate(queryClient)}>
      <NewDrops/>
      <Categories/>
   </HydrationBoundary>
);
```

---

## 💌 Contact

For any queries, feedback, or collaboration opportunities, feel free to reach out:

* **Email:** [mehediemon7@gmail.com](mailto:mehediemon7@gmail.com)
* **WhatsApp:** [+8801629795421](https://wa.me/8801629795421)

---

<p align="center">Made with ❤️ by Mehedi</p>