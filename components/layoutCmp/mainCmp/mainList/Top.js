//pages index.js　に表示するコンポーネント
import Si from "../itemComponens/SectionItems"
export default function Top(props) {

  return (
    <div className="topWrap">
      <section className="topPage flexAllCen">
        <h1>Portfolio</h1>
        <p>私の現在のスキルを可視化を目的としてポートフォリオを作成しました。<br />このWebページはReactとNext.jsを使用しています。<br />制作期間：30時間</p>
      </section>
      {/* section & Link を作る物 */}
      <Si id="topProfile" className="topProfile flexAllCen" title="Profile"url="ProfilePage" />
      <Si id="topSkill" className="topSkill flexAllCen" title="Skill"url="SkillPage" />
      <Si id="topHistory" className="topHistory flexAllCen" title="History"url="HistoryPage" />
      <Si id="topProduct" className="topProduct flexAllCen" title="Product"url="ProductPage" />
    </div>
  )
}