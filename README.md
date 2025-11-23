# ShopStream

ShopStream is a modern, responsive web application built with **Angular 20**, designed to facilitate food ordering and restaurant management. It features a comprehensive customer interface for browsing restaurants and placing orders, as well as a robust admin dashboard for managing users, restaurants, and orders.

## 🚀 Features

### Customer Portal
*   **Browse Restaurants:** View a list of available restaurants with their ratings and details.
*   **Restaurant Details:** Explore detailed menus and information for each restaurant.
*   **Order Management:** Place orders and view order history.
*   **User Authentication:** Secure login and registration functionality.
*   **Responsive Design:** Fully responsive UI optimized for mobile and desktop using Tailwind CSS and Flowbite.

### Admin Dashboard
*   **Restaurant Management:** Add, update, and remove restaurant listings.
*   **Order Management:** Track and manage incoming orders in real-time.
*   **User Management:** View and manage registered users.
*   **Analytics:** Get an overview of platform activity and performance.

## 🛠️ Tech Stack

*   **Frontend Framework:** [Angular v20](https://angular.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [Flowbite](https://flowbite.com/)
*   **State Management:** Angular Services & Signals (inferred)
*   **Icons:** [Ng-Icons](https://ng-icons.github.io/ng-icons/)
*   **Carousel:** [ngx-owl-carousel-o](https://www.npmjs.com/package/ngx-owl-carousel-o)
*   **Server-Side Rendering (SSR):** Enabled for improved performance and SEO.

## 📂 Project Structure

The project follows a modular architecture:

*   `src/app/core`: Contains singleton services, guards, and global configuration (e.g., Auth, Global State).
*   `src/app/features`: Feature modules split by business domain:
    *   `Auth`: Authentication components (Login, Register).
    *   `admin`: Admin dashboard pages (Home, Restaurants, Orders, Users).
    *   `customer`: Customer-facing pages (Home, Restaurant Details, My Orders).
*   `src/app/layout`: Main layout components (Header, Footer, Sidebar).
*   `src/app/shared`: Shared reusable components and pipes.

## ⚙️ Installation & Setup

### Prerequisites
*   [Node.js](https://nodejs.org/) (Latest LTS version recommended)
*   [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

### Steps

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd shop-stream
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    ng serve
    ```
    Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

4.  **Build for production:**
    ```bash
    ng build
    ```
    The build artifacts will be stored in the `dist/` directory.

## 🔑 Configuration

The application connects to a backend server for data persistence. The base URL is configured in `src/app/core/Services/configuration/config.ts`.

```typescript
export class Config {
  static BaseUrl: string = 'https://shopstream-backend.onrender.com';
}
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the MIT License.
