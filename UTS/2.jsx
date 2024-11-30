import React, { useState } from "react";

function Counter({ title }) {
  // Menggunakan useState untuk membuat state 'count' yang diinisialisasi dengan nilai 0
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Menampilkan judul yang diterima dari props */}
      <h1>{title}</h1>

      {/* Menampilkan jumlah klik yang tersimpan dalam state */}
      <p>You clicked {count} times</p>

      {/* Tombol untuk mengubah state ketika diklik */}
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

function App() {
  return (
    <div>
      {/* Mengirimkan props "title" ke komponen Counter */}
      <Counter title="Counter Example with Props and State" />
    </div>
  );
}

export default App;
