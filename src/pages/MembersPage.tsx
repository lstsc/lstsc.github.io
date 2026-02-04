import MainLayout from "../layouts/MainLayout";
import ImageCard from "../components/ImageCard";
import Heading from "../components/Heading";
import Text from "../components/Text";

const MembersPage = () => {
  return (
    <MainLayout>
      <ImageCard src="/images/banners/banner_members.png" />
      <Heading>團隊成員 Members</Heading>
      <Text>下方為歷年團隊成員。</Text>
    </MainLayout>
  )
}

export default MembersPage;