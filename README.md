# Multi-API Data Display Project

This project demonstrates how to fetch and display data from **three different APIs** using both **Promise chaining** and **async/await** in JavaScript. Each API request is simulated with a delay using `setTimeout`, and the results are displayed dynamically on the webpage inside HTML tables.

---

## 🚀 Features

### ✔ Three API Calls  
Fetches data from the following dummy API endpoints:
- https://dummyjson.com/posts  
- https://dummyjson.com/products  
- https://dummyjson.com/todos  

### ✔ Promise-Based API Functions  
Each API request is wrapped inside a Promise and executed after a simulated delay:
- `PromiseAPI1()` → delay 1s  
- `PromiseAPI2()` → delay 2s  
- `PromiseAPI3()` → delay 3s  

### ✔ Sequential Execution  
Each API runs **only when the previous one resolves** using:
- Promise chaining (`.then()`)
- or `async/await` with condition checks

### ✔ Dynamic Data Display  
Data from each API is converted into a clean, structured **HTML table**.

### ✔ Fully Commented Source Code  
The code is written with proper comments to explain:
- Promise usage  
- async/await  
- setTimeout  
- DOM updates  

---


---

## 🛠 How It Works

1. Click the **“Load Data”** button on the webpage.
2. `startProcess()` begins execution of three API functions in order.
3. Each function:
   - waits using `setTimeout`
   - fetches data from an API
   - displays the results in a formatted HTML table
   - resolves with `true`
4. Only if the previous function returns `true`, the next API executes.

---

## 📘 Technologies Used

- **HTML5** – UI layout  
- **CSS3** – Basic styling  
- **JavaScript (ES6+)**  
  - Promises  
  - async/await  
  - setTimeout  
  - DOM manipulation  
- **Fetch API**

---

## ▶️ How to Run the Project

### 1. Download or Clone the Repository
```bash
git clone https://github.com/your-username/multi-api-data-display.git


