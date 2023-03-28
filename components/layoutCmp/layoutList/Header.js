//Header コンポーネント
//props.change　pages内の各ページから値を取得
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "@fortawesome/fontawesome-svg-core/styles.css"
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Image from 'next/image';
import Link from 'next/link';

export default function Header(props) {
  return (
    <header className="flex">
      <div className='flex alignCen'>
        <a href="https://twitter.com/s_yosuke1109" target="blank"><FontAwesomeIcon icon={faTwitter} /></a>
        <a href='https://github.com/YosukeSusuki' target='brank'><FontAwesomeIcon icon={faGithub} /></a> 
        <a href="mailto:hit2250.susuki.yosuke@gmail.com"><FontAwesomeIcon icon={faPaperPlane} /></a>
      </div>
      <Link className="flex jusCen" href="/"><Image src="/images/logo.svg" alt="logo" width={90} height={65} /></Link>
      <nav>{props.change()}</nav>
    </header>
  )
}