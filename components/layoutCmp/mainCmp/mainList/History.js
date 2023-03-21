//HistoryPageに表示するコンポーネント

import HistoryList from '@/components/layoutCmp/mainCmp/itemComponens/HistoryItems'
import { useEffect, useState } from 'react'

export default function History(props) {
  //Webページ上からJsonデータを取得
  const url = 'http://localhost:3000/jsonList/History.json'
  //データの初期化
  const [history,setHistory] = useState({myHistory:[]})


  useEffect (() => {
  fetch(url)
  .then( res => res.json())
  .then( res => setHistory(res))
})

  return (
    <section className='historyWrap dWrap'>
      <h2>History</h2>
      <div className='historyItems'>
        {/* mySkills.Jasonからのデータをループ処理して自動代入 */}
      {history.myHistory.map((value,index) => (
      <HistoryList key={index} title={value.title} content={value.content} date={value.date} />
        ))}
      </div>
    </section>
  )
}