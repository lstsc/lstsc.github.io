import LinkCard from "./LinkCard";
import FacebookLogo from "./logos/FacebookLogo";
import InstagramLogo from "./logos/InstagramLogo";
import ThreadsLogo from "./logos/ThreadsLogo";
import GithubLogo from "./logos/GithubLogo";
import { LuNewspaper, LuComponent, LuUsers } from "react-icons/lu";

const LinkCardList = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
        width: "100%",
        padding: "5px 0"
      }}
    >
      <LinkCard to="/news"><LuNewspaper /> 最新消息 News</LinkCard>
      <LinkCard to="/events"><LuComponent />最新活動 Events</LinkCard>
      <LinkCard to="/members"><LuUsers />團隊成員 Members</LinkCard>
      <LinkCard to="https://www.facebook.com/profile.php?id=100064023912366"><FacebookLogo color="#2786df" />學會粉專 Facebook</LinkCard>
      <LinkCard to="https://instagram.com/lst_tw/"><InstagramLogo color="#cc0052" />學生事務委員會 Instagram</LinkCard>
      <LinkCard to="https://www.threads.com/@lst_tw"><ThreadsLogo color="#000000" />學生事務委員會 Threads</LinkCard>
      <LinkCard to="https://github.com/lstsc/"><GithubLogo color="#2b093a" />學生事務委員會 Github</LinkCard>
    </div>
  )
}

export default LinkCardList;