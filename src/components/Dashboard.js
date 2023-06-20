"use client";

import { getAppList } from "@/service/clientService";
import { enqueueSnackbar } from '@/components/Snackbar'

export default function Dashboard() {

  const testReq = async () => {
    enqueueSnackbar('That was easy!', {
      variant: 'error',
    })
    const res = await getAppList()
    console.log('click', res.data)
  }

  return (
    <div>
        <button onClick={testReq}>aaaa</button>
      </div>
  )
}