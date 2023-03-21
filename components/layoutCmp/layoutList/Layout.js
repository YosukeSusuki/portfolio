import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Main from './Main'


//Head & body 要素の作成コンポーネント
//Header Main Footer コンポーネントを管理　
//props.〇〇にはpagesの各コンテンツから値を指定
export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{props.title}</title>
      </Head>
      <div id='wrapper'>
          <Header change={props.change} />
          <Main contents={props.contents} />
          <Footer />
      </div>
    </div>
  )
}