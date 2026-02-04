import MainLayout from "../layouts/MainLayout";
import ImageCard from "../components/ImageCard";
import EventsCard from "../components/EventsCard";
import Divider from "../components/Divider";

export interface News {
  date: string;
  title: string;
  url?: string;
}

const NewsList: News[] = [
  {
    date: "2026-02-01",
    title: "第十九屆語言學沙龍",
  },
  {
    date: "2025-02-15",
    title: "第十八屆語言學沙龍"
  },
  {
    date: "2024",
    title: "第十七屆語言學沙龍"
  },
  {
    date: "2023",
    title: "第十六屆語言學沙龍"
  },
  {
    date: "2022",
    title: "第十五屆語言學沙龍"
  },
  {
    date: "2021",
    title: "第十四屆語言學沙龍"
  },
  {
    date: "2020",
    title: "第十三屆語言學沙龍"
  },
  {
    date: "2019",
    title: "第十二屆語言學沙龍"
  },
  {
    date: "2018",
    title: "第十一屆語言學沙龍"
  },
  {
    date: "2017",
    title: "第十屆語言學沙龍"
  },
  {
    date: "2016",
    title: "第九屆語言學沙龍"
  },
  {
    date: "2015",
    title: "第八屆語言學沙龍"
  },
  {
    date: "2014",
    title: "第七屆語言學沙龍"
  },
  {
    date: "2013",
    title: "第六屆語言學沙龍"
  },
  {
    date: "2012",
    title: "第五屆語言學沙龍"
  },
  {
    date: "2011",
    title: "第四屆語言學沙龍"
  },
    {
    date: "2010",
    title: "第三屆語言學沙龍"
  },
  {
    date: "2009",
    title: "第二屆語言學沙龍"
  },
  {
    date: "2008",
    title: "第一屆語言學沙龍"
  },
]

const EventsPage = () => {
  return (
    <MainLayout>
      <ImageCard src="/images/banners/banner_events.png" />
      <Divider></Divider>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: "5px",
        padding: "5px 0"
      }}>
        {
          NewsList.map((item, idx) => {
            const year = item.date.slice(0,4)
            return (
              <EventsCard to={`/news/${item.date}`} key={item.date + '-' + idx}>
                <div style={{
                  display: 'block',
                  width: '100%',
                  margin: "0px 10px"
                }}>
                  <span>
                    {year}【活動】{item.title}
                  </span>
                </div>
              </EventsCard>
            );
          })
        }
      </div>
    </MainLayout>
  )
}

export default EventsPage;