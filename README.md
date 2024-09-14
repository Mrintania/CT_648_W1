
---

# Dad Joke Fetcher

This is a simple React application that fetches random dad jokes from the API `https://icanhazdadjoke.com/` and displays them on the frontend. The application also provides a button to allow users to fetch a new joke on demand.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [How It Works](#how-it-works)
- [API](#api)
- [License](#license)
- [Developer](#developer)

## Installation

To get started with this project, you'll need to have [Node.js](https://nodejs.org/) installed.

1. Clone the repository:
    ```bash
    git clone https://github.com/Mrintania/Bun-React-Frontend-Web.git
    ```

2. Navigate to the project directory:
    ```bash
    cd dad-joke-fetcher
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```
    or if you're using Yarn:
    ```bash
    yarn install
    ```

## Usage

To run the project in development mode, use the following command:

```bash
npm start
```

or if you're using Yarn:

```bash
yarn start
```

Then open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

You will see a dad joke displayed, and there will be a button to fetch a new joke.

## Project Structure

```bash
my-react-app/
├── public/
│   └── index.html       # Main HTML file
├── src/
│   ├── App.js           # Main React component that contains the logic
│   ├── index.js         # Entry point of the React app
├── package.json         # Project dependencies and scripts
└── README.md            # Documentation file (this file)
```

### Key Files:

- **public/index.html**: The root HTML file. It contains a single `div` element with an ID of `root` where the React app is rendered.
  
- **src/index.js**: The entry point of the React app. It uses `ReactDOM.createRoot` to render the `App` component inside the `root` div in the HTML file.
  
- **src/App.js**: This is the main component of the app. It handles fetching jokes from the API and displaying them on the screen.

## How It Works

### 1. Fetching Data from API

The core functionality of this app is to fetch dad jokes from the API `https://icanhazdadjoke.com/`. This is done using the `fetch` API inside the `useEffect` hook. The API request is made with the header `Accept: application/json` to ensure the response is in JSON format.

When the app is loaded for the first time, the joke is fetched automatically. Additionally, users can click the "Get New Joke" button to fetch another joke.

### 2. Component Lifecycle

- **`useState`**: We use the `useState` hook to manage two states:
  - `joke`: Stores the joke text.
  - `loading`: Tracks whether the app is currently fetching data.

- **`useEffect`**: This hook is used to fetch a joke when the component is first rendered. It automatically calls the `fetchJoke` function on the initial load.

- **`fetchJoke` function**: This function makes an API request to `https://icanhazdadjoke.com/` and updates the state with the new joke. The button for fetching a new joke is also connected to this function.

### 3. FetchJoke Functionality

The `fetchJoke` function works as follows:
- It first sets `loading` to `true`, which disables the button and shows the "Loading..." message.
- It then fetches the joke from the API and stores the result in the `joke` state.
- Once the joke is fetched, `loading` is set to `false`, re-enabling the button.

Here's the full function:

```javascript
const fetchJoke = () => {
  setLoading(true);
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setJoke(data.joke);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      setLoading(false);
    });
};
```

### 4. Button for Fetching New Jokes

The button has an `onClick` event that calls the `fetchJoke` function to request a new joke from the API. While the joke is being fetched, the button is disabled to prevent multiple requests, and a loading message is shown instead.

```html
<button onClick={fetchJoke} disabled={loading}>
  {loading ? "Loading..." : "Get New Joke"}
</button>
```

## API

The app fetches jokes from the following public API:

- **API URL**: `https://icanhazdadjoke.com/`
- **Method**: GET
- **Headers**: `{ Accept: "application/json" }`
- **Response**: A JSON object containing the joke, e.g.:
  ```json
  {
    "id": "GlGBIY0wAAd",
    "joke": "How much does a hipster weigh? An instagram.",
    "status": 200
  }
  ```

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Developer
- Mr.Pornsupat Vutisuwan 66130463 [Github : Mrintania](https://github.com/Mrintania)

---


# แปลไทย

โปรแกรมนี้เป็นแอปพลิเคชันที่พัฒนาด้วย React ซึ่งทำหน้าที่ดึงข้อมูลคำพูดตลก (joke) จาก API `https://icanhazdadjoke.com/` และแสดงผลลัพธ์บนหน้าเว็บ นอกจากนี้ แอปพลิเคชันยังมีปุ่มที่ช่วยให้ผู้ใช้สามารถดึงข้อมูลคำพูดตลกใหม่ได้เมื่อมีการกดปุ่ม

## สารบัญ
- [การติดตั้ง](#การติดตั้ง)
- [วิธีการใช้งาน](#วิธีการใช้งาน)
- [โครงสร้างของโปรเจกต์](#โครงสร้างของโปรเจกต์)
- [การทำงานของโปรแกรม](#การทำงานของโปรแกรม)
- [API ที่ใช้](#api-ที่ใช้)
- [ผู้พัฒนา](#รายชื่อผู้พัฒนา)

## การติดตั้ง

เพื่อเริ่มต้นใช้งานโปรเจกต์นี้ จำเป็นต้องติดตั้ง [Node.js](https://nodejs.org/) ก่อน

1. คัดลอกโค้ดจาก GitHub repository:
    ```bash
    git clone https://github.com/your-username/dad-joke-fetcher.git
    ```

2. ไปยังโฟลเดอร์โปรเจกต์:
    ```bash
    cd dad-joke-fetcher
    ```

3. ติดตั้ง dependencies ที่จำเป็น:
    ```bash
    npm install
    ```
    หรือหากใช้ Yarn ให้ใช้คำสั่ง:
    ```bash
    yarn install
    ```

## วิธีการใช้งาน

เพื่อรันโปรแกรมในโหมดการพัฒนา (development mode) ใช้คำสั่งต่อไปนี้:

```bash
npm start
```

หรือหากใช้ Yarn ให้ใช้:

```bash
yarn start
```

เมื่อโปรแกรมเริ่มทำงานแล้ว สามารถเข้าถึงได้ที่ [http://localhost:3000](http://localhost:3000) ผ่านเว็บเบราว์เซอร์ จะมีคำพูดตลกแสดงอยู่และผู้ใช้สามารถกดปุ่มเพื่อดึงคำพูดตลกใหม่ได้

## โครงสร้างของโปรเจกต์

```bash
my-react-app/
├── public/
│   └── index.html       # ไฟล์ HTML หลัก
├── src/
│   ├── App.js           # ส่วนหลักของ React ที่มีการประมวลผลหลัก
│   ├── index.js         # จุดเริ่มต้นของแอปพลิเคชัน React
├── package.json         # การจัดการ dependencies และ scripts
└── README.md            # ไฟล์สำหรับคำอธิบายโปรเจกต์นี้
```

### ไฟล์หลัก:

- **public/index.html**: ไฟล์ HTML หลักที่ใช้แสดงเนื้อหาเว็บเพจ มีเพียง `div` หนึ่งตัวที่มี ID ว่า `root` ซึ่งจะเป็นตำแหน่งที่ React จะทำการแสดงผล
- **src/index.js**: จุดเริ่มต้นของแอปพลิเคชัน React ใช้ฟังก์ชัน `ReactDOM.createRoot` เพื่อแสดงผลคอมโพเนนต์ `App` ภายใน `div` ที่มี ID ว่า `root`
- **src/App.js**: คอมโพเนนต์หลักของแอปพลิเคชัน ซึ่งมีหน้าที่ดึงข้อมูลคำพูดตลกจาก API และแสดงผลบนหน้าจอ

## การทำงานของโปรแกรม

### 1. การดึงข้อมูลจาก API

ฟังก์ชันหลักของโปรแกรมคือการดึงข้อมูลคำพูดตลกจาก API `https://icanhazdadjoke.com/` โดยใช้ `fetch API` ภายในฟังก์ชัน `useEffect` โดยมีการส่งคำขอพร้อมกับ Header `Accept: application/json` เพื่อรับข้อมูลในรูปแบบ JSON

เมื่อหน้าเว็บโหลดขึ้นครั้งแรก คำพูดตลกจะถูกดึงมาแสดงโดยอัตโนมัติ นอกจากนี้ ผู้ใช้ยังสามารถกดปุ่มเพื่อดึงข้อมูลคำพูดตลกใหม่ได้

### 2. การจัดการวงจรชีวิตของคอมโพเนนต์

- **`useState`**: เราใช้ฮุค `useState` เพื่อจัดการกับ 2 สถานะหลักคือ:
  - `joke`: เก็บค่าคำพูดตลก
  - `loading`: ติดตามสถานะว่าขณะนี้กำลังดึงข้อมูลอยู่หรือไม่
- **`useEffect`**: ฮุคนี้ถูกใช้เพื่อดึงข้อมูลคำพูดตลกเมื่อคอมโพเนนต์ถูกแสดงผลครั้งแรก โดยทำการเรียกฟังก์ชัน `fetchJoke`
- **ฟังก์ชัน `fetchJoke`**: ทำหน้าที่ในการส่งคำขอ GET ไปยัง API เพื่อดึงข้อมูลคำพูดตลกใหม่และปรับปรุงสถานะให้กับ `joke` และ `loading`

### 3. ฟังก์ชัน FetchJoke

ฟังก์ชัน `fetchJoke` ทำงานดังนี้:
- เริ่มต้นด้วยการตั้งสถานะ `loading` เป็น `true` ซึ่งจะทำให้ปุ่มถูกปิดใช้งานชั่วคราวและแสดงข้อความ "Loading..."
- ส่งคำขอไปยัง API และรับค่าคำพูดตลก เมื่อคำพูดถูกดึงมาแล้ว สถานะ `joke` จะถูกอัปเดตพร้อมกับเปลี่ยนสถานะ `loading` เป็น `false` เพื่อเปิดใช้งานปุ่มอีกครั้ง

```javascript
const fetchJoke = () => {
  setLoading(true);
  fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setJoke(data.joke);
      setLoading(false);
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
      setLoading(false);
    });
};
```

### 4. ปุ่มสำหรับการดึงคำพูดตลกใหม่

ปุ่มนี้มี `onClick` event ซึ่งทำการเรียกฟังก์ชัน `fetchJoke` เพื่อทำการดึงคำพูดตลกใหม่จาก API ขณะที่มีการดึงข้อมูลใหม่ ปุ่มจะถูกปิดใช้งานชั่วคราวเพื่อป้องกันไม่ให้มีการส่งคำขอซ้ำ

```html
<button onClick={fetchJoke} disabled={loading}>
  {loading ? "Loading..." : "Get New Joke"}
</button>
```

## API ที่ใช้

โปรแกรมนี้ใช้ API ดังต่อไปนี้:

- **URL ของ API**: `https://icanhazdadjoke.com/`
- **วิธีการส่งคำขอ**: GET
- **Headers**: `{ Accept: "application/json" }`
- **รูปแบบของการตอบกลับ**: JSON ตัวอย่าง:
  ```json
  {
    "id": "GlGBIY0wAAd",
    "joke": "How much does a hipster weigh? An instagram.",
    "status": 200
  }
  ```

## รายชื่อผู้พัฒนา

- ส.อ. พรสุพพัต วุฒิสุวรรณ 66130463 [Github : Mrintania](https://github.com/Mrintania)