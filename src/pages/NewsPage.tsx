import MainLayout from "../layouts/MainLayout";
import ImageCard from "../components/ImageCard";
import NewsCard from "../components/NewsCard";
import Divider from "../components/Divider";

export type NewsType = "event" | "election" | "info" | "other";

export interface News {
  date: string;
  type: NewsType;
  title: string;
  url?: string;
}

const NewsList: News[] = [
    {
    date: "2026-02-01",
    type: "event",
    title: "第十九屆語言學沙龍",
  },
  {
    date: "2025-09-22",
    type: "election",
    title: "第十九屆學生事務委員會 當選名單",
  },
  {
    date: "2025-07-19",
    type: "election",
    title: "台灣語言學學會第19屆學生委員會徵選開跑囉！",
  },
  {
    date: "2025-05-26",
    type: "info",
    title: "台灣語言學學會2025年度最佳博碩士論文獎實施細則",
  },
  {
    date: "2025-05-12",
    type: "info",
    title: "第四場「玉山語言學沙龍」",
  },
  {
    date: "2025-04-17",
    type: "info",
    title: "「認知・文化・應用」跨域對話重磅登場！",
  },
  {
    date: "2025-02-15",
    type: "event",
    title: "第十八屆語言學沙龍",
  },
  {
    date: "2025-01-25",
    type: "info",
    title: "2025國際語言學奧林匹亞競賽志工招募中！",
  },
  {
    date: "2024-09-04",
    type: "election",
    title: "第十八屆學生事務委員會 當選名單",
  },
  {
    date: "2024-07-08",
    type: "election",
    title: "第十八屆學生事務委員會 甄選",
  },
  {
    date: "2024-06-15",
    type: "info",
    title: "台灣語言學學會「2024語言學卓越營」報名倒數一個月",
  },
  {
    date: "2024-01-03",
    type: "event",
    title: "第十七屆語言學沙龍",
  },
  {
    date: "2023-11-24",
    type: "election",
    title: "第十七屆學生事務委員會 當選名單",
  },
  {
    date: "2023-05-06",
    type: "event",
    title: "第十六屆語言學沙龍",
  },
  {
    date: "2022-10-22",
    type: "election",
    title: "第十六屆學生事務委員會 當選名單",
  },
  {
    date: "2021-11-01",
    type: "election",
    title: "第十五屆學生事務委員會 當選名單",
  },
  {
    date: "2020-10-27",
    type: "election",
    title: "第十四屆學生事務委員會 當選名單",
  },
  {
    date: "2019-10-02",
    type: "election",
    title: "第十三屆學生事務委員會 當選名單",
  },
  {
    date: "2019-03-28",
    type: "event",
    title: "第十二屆語言學沙龍",
  },
  {
    date: "2017-08-31",
    type: "election",
    title: "第十一屆學生事務委員會 當選名單",
  },
  {
    date: "2017-08-02",
    type: "election",
    title: "接受「第十一屆台灣語言學學會學生事務委員補選」候選人登記",
  },
  {
    date: "2017-07-04",
    type: "election",
    title: "接受「第十一屆台灣語言學學會學生事務委員」候選人登記",
  },
  {
    date: "2017-04-26",
    type: "info",
    title: "第十屆語言學沙龍下午場將提供手語翻譯服務",
  },
  {
    date: "2016-09-22",
    type: "election",
    title: "第十屆學生事務委員會 當選名單",
  },
  {
    date: "2016-03-12",
    type: "event",
    title: "第九屆語言學沙龍",
  },
  {
    date: "2015-07-17",
    type: "election",
    title: "第九屆學生事務委員會 當選名單",
  },
  {
    date: "2015-02-23",
    type: "event",
    title: "第八屆語言學沙龍 開始報名！",
  },
  {
    date: "2014-06-29",
    type: "election",
    title: "第八屆學生事務委員會 當選名單",
  },
  {
    date: "2013-07-20",
    type: "election",
    title: "第七屆學生事務委員選舉 當選名單",
  },
  {
    date: "2013-07-03",
    type: "election",
    title: "第七屆學生事務委員選舉 當選名單",
  },
  {
    date: "2013-05-29",
    type: "election",
    title: "第七屆台灣語言學學會學生事務委員選舉提名開跑",
  },
  {
    date: "2012-12-15",
    type: "event",
    title: "第六屆語言學沙龍",
  },
  {
    date: "2012-07-06",
    type: "election",
    title: "第六屆學生事務委員選舉 當選名單",
  },
  {
    date: "2012-03-03",
    type: "event",
    title: "第五屆語言學沙龍",
  },
  {
    date: "2011-07-01",
    type: "election",
    title: "第五屆學生事務委員選舉 當選名單",
  },
  {
    date: "2011-03-01",
    type: "election",
    title: "第五屆學生事務委員選舉 候選名單",
  },
  {
    date: "2010-09-25",
    type: "event",
    title: "第四屆語言學沙龍",
  },
  {
    date: "2009-10-17",
    type: "election",
    title: "第四屆學生事務委員選舉結果暨當選公告",
  },
  {
    date: "2009-07-25",
    type: "election",
    title: "第四屆學生事務委員選舉候選名單",
  },
  {
    date: "2009-01-01",
    type: "info",
    title: "Linguists of Tomorrow 徵稿",
  },
]

const NewsPage = () => {
  return (
    <MainLayout>
      <ImageCard src="/images/banners/banner_news.png" />
      <Divider />
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: "5px",
        padding: "5px 0"
      }}>
        {
          NewsList.map((item, idx) => {
            let label: string = "";
            if (item.type === "election") {
              label = "選舉";
            } else if (item.type === "event") {
              label = "活動";
            } else if (item.type === "info") {
              label = "資訊";
            } else {
              label = "其他";
            }

            return (
              <NewsCard to={`/news/${item.date}`} key={item.date + '-' + idx}>
                <div style={{
                  display: 'block',
                  width: '100%',
                  margin: "0px 10px"
                }}>
                  <span>
                    {item.date}【{ label }】{item.title}
                  </span>
                </div>
              </NewsCard>
            );
          })
        }
      </div>
    </MainLayout>
  )
}

export default NewsPage;