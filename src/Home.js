import logo from './logo.svg';
import './App.css';

import WeaveDB from "weavedb-sdk"

export default function Home() {
  const start = async () => {
    try {
      const db = new WeaveDB({
        contractTxId: "NkYdataKkg9KYtjbopSyjqeFTfBGEa6h66zHSdB33W8",
        nocache: true,
        remoteStateSyncEnabled: true,
        remoteStateSyncSource: "https://dre-1.warp.cc/contract",
      })
      await db.init()
      const { identity } = await db.createTempAddress()
      console.log("identity", identity)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <button onClick={start}>Start</button>
    </>
  )
}