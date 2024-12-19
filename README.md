📊 Stock Dashboard
A responsive and interactive stock dashboard built with React.js, Finnhub API, and Tailwind CSS. This application allows users to search for stocks, view stock details, and analyze historical data through charts.

🚀 Features
🔍 Search Stocks: Search for stocks and get instant results.
📈 Real-Time Stock Data: Fetch stock quotes and details using the Finnhub API.
🕒 Historical Data Visualization: Display historical stock data in a clean and interactive format.
🌙 Dark Mode Support: Switch between light and dark modes seamlessly.
⚡ Responsive Design: Fully responsive UI designed with Tailwind CSS.
🛠️ Technologies Used
Frontend Framework: React.js
API: Finnhub API
Styling: Tailwind CSS
⚙️ Installation and Setup
Clone the Repository:

git clone https://github.com/your-username/stock-dashboard.git
cd stock-dashboard
Install Dependencies:


npm install
Set up Environment Variables: Create a .env file in the root directory and add the following:

env
VITE_API_KEY=your_finnhub_api_key
Replace your_finnhub_api_key with your API key from Finnhub.

Run the Application:

npm run dev
Open the app in your browser:

arduino

http://localhost:5173
📂 Project Structure
less
src/
├── Components/
│   ├── DashBoard.jsx       // Main dashboard component
│   ├── Chart.jsx           // Chart for displaying historical data
│   ├── ChartFilter.jsx     // Filters for historical data visualization
│   ├── SearchBar.jsx       // Search input component
│   ├── StockApi.jsx        // API functions for fetching stock data
├── App.jsx                 // Root component
├── index.css               // Tailwind CSS import
├── main.jsx                // Application entry point

📑 API Reference
This project uses the Finnhub API to fetch stock data.
For more details, check the Finnhub API documentation.

Endpoints Used:

/search - Search for stock symbols.
/quote - Fetch current stock prices.
/stock/candle - Fetch historical stock data.
🎨 Styling with Tailwind CSS
The project is styled using Tailwind CSS, providing a modern and responsive UI.
To customize styling, edit the tailwind.config.js file or modify the CSS classes directly in the components.

📜 License
This project is licensed under the MIT License.

🤝 Contributing
Contributions, issues, and feature requests are welcome!
Feel free to check the issues page.

Fork the repository
Create a new branch (git checkout -b feature/my-feature)
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature/my-feature)
Create a pull request
✨ Acknowledgements
Thanks to Finnhub for providing the free API for stock market data.
Big shoutout to the React.js and Tailwind CSS communities.
📬 Contact
For any queries or suggestions, feel free to reach out:
📧 adityagoyal9720@gmail.com
🌐 https://github.com/hustlers9720







