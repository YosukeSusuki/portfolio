//History.js用のコンポーネント　div & dl,p　などを取得するコンポーネント
export default function HistoryItems(props) {
  return (
    <div className="flex">
      <dl>
        <dt>{props.title}</dt>
        <dd>{props.content}</dd>
      </dl>
      <p>{props.date}</p>
    </div>
  )
}