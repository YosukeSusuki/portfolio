//pages SkillPageに表示するコンポーネント
import DlList from '@/components/layoutCmp/mainCmp/itemComponens/DlListItems'
import { useEffect, useState } from 'react'
export default function Skill(props) {
  const url = 'http://localhost:3000/jsonList/MySkills.json'
  const [skill,setSkill] = useState({mySkill:[]})

  useEffect (() => {
  fetch(url)
  .then( res => res.json())
  .then( res => setSkill(res))
})

  return (
    <section className='skillWrap dWrap '>
      <h2>Skill</h2>
      <dl>
        {/* MySkills.jsonからファイルを取得してループ処理 */}
        {skill.mySkill.map((value,index) => (
          <DlList key={index} cName="flex" title={value.title} content01={value.content01} content02={value.content02} />
        ))}
      </dl>
    </section>
  )
}