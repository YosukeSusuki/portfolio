//nl2brはJsonデータを改行させるライブラリ
//<dl>内にdt,ddを作るコンポーネント
import nl2br from 'react-nl2br';
export default function DlItems(props) {
  return (
    <div className={props.cName}>
      <dt>{props.title}</dt>
      <div>
        <dd>{props.content01}</dd>
        <dd>{nl2br(props.content02)}</dd>
      </div>
    </div>
  )
}