"use client";

import { getAppList } from "@/service/clientService";

export default function Dashboard() {

  const testReq = async () => {
    const res = await getAppList()
    console.log('click', res.data)
  }

  return (
    <div>
        <button onClick={testReq}>aaaa</button>
      </div>
  )
}