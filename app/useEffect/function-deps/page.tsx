"use client";

import { useState, useEffect } from "react";

export default function FunctionDeps() {
  const [count, setCount] = useState(0);

  // 普通の関数
  const normalFunction = () => {
    // count の値をコンソールに出力する普通の関数
    console.log(`普通の関数が実行されました${count}`);
  };

  // 普通の関数を依存配列に入れると、useEffect が毎回実行される
  useEffect(() => {
    console.log("普通の関数の useEffect 実行");
    normalFunction();
  }, [normalFunction]);

  return (
    <div>
      <h1>useEffect の依存配列に関数を入れる実験</h1>
      <p>Count: {count}</p>
      <input
        type="button"
        value="Count +1"
        onClick={() => setCount((prev) => prev + 1)}
      />
    </div>
  );
}
