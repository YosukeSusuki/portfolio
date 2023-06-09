//ProfilePageに表示するコンポーネント
export default function Profile(props) {
  return (
    <section className="profileWrap dWrap flexAllCen">
      <h2>Profile</h2>
      <p>
        <span>広島の出身の未経験Webエンジニア。</span>
        <span>高等学校を卒業後、航空自衛隊に入隊し5年ほど職務に従事。自衛官を任期満了退職後</span>
        <span>ホテルで接客業務を行い接客技術やトラブル対処技術を身につけました。</span>
        <span>その後IT業界に興味を持ち職業訓練校にてHTML,CSS,JavaScript（React、Next.js）</span>
        <span>などを学んでいます。</span>
      </p>
    </section>
  )
}