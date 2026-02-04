import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import MainLayout from "../layouts/MainLayout";
import Heading from "../components/Heading";
import ImageCard from "../components/ImageCard";
import Divider from "../components/Divider";
import { Link } from "react-router-dom";
import { LuArrowLeft } from "react-icons/lu";
import Text from "../components/Text";

interface FrontMatter {
  date?: string;
  title?: string;
  type?: string;
  [key: string]: any;
}

// Simple frontmatter parser (replaces gray-matter for browser compatibility)
const parseFrontMatter = (text: string): { data: FrontMatter; content: string } => {
  const frontMatterRegex = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/;
  const match = text.match(frontMatterRegex);

  if (!match) {
    return { data: {}, content: text };
  }

  const frontMatterText = match[1];
  const content = match[2];
  const data: FrontMatter = {};

  // Simple YAML parser for basic key: value pairs
  frontMatterText.split("\n").forEach((line) => {
    const [key, ...valueParts] = line.split(":");
    if (key && valueParts.length > 0) {
      const value = valueParts.join(":").trim().replace(/^["']|["']$/g, "");
      data[key.trim()] = value;
    }
  });

  return { data, content };
};

// Custom link component with hover effects
const MarkdownLink = ({ href, children }: { href?: string; children: React.ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <a
      href={href || ""}
      style={{
        color: isHovered ? '#1a9b8e' : '#2d829b',
        textDecoration: isHovered ? 'none' : 'none',
        margin: "0px 2px",
        transition: 'all 0.2s ease',
        fontWeight: isHovered ? 600 : 400,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};

const BacktoNewsPage = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        width: "100%",
        height: "auto",
        backgroundColor: isHovered ? "#3ea670" : "#e9eded",
        color: isHovered ? "#fff" : "#3ea670",
        margin: "5px 0",
        border: "none",
        borderRadius: "15px",
        padding: "10px",
        textDecoration: "none",
        cursor: "pointer",
        transition: "all 0.3s ease",
        justifyContent: "center",
        alignItems: "center",
        display: "flex"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to="/news"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          width: "100%",
          fontSize: "1rem",
          fontWeight: 700,
          color: isHovered ? "#fff" : "#348b51",
          fontFamily: "RobotoCondensed Regular",
          textDecoration: "none",
          padding: "0px 10px",
          gap: "10px"
        }}
      >
        <LuArrowLeft /> 回上一頁 Back to News
      </Link>
    </button>
  )
}

const NewsArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const [frontMatter, setFrontMatter] = useState<FrontMatter>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) {
      setError("No article slug provided");
      setLoading(false);
      return;
    }

    const fetchMarkdown = async () => {
      try {
        // Fetch from /news (located in /public/news, copied via scripts/copy-news.js)
        const response = await fetch(`/news/${slug}.md`);

        if (!response.ok) {
          throw new Error(`Article not found (${response.status})`);
        }

        const text = await response.text();
        const { data, content } = parseFrontMatter(text);

        setFrontMatter(data);
        setContent(content);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load article");
      } finally {
        setLoading(false);
      }
    };

    fetchMarkdown();
  }, [slug]);

  if (loading) {
    return (
      <MainLayout>
        <div style={{ textAlign: "center" }}>
          <p>Loading article...</p>
        </div>
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout>
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#999" }}>Error: {error}</p>
          <button
            onClick={() => navigate("/news")}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#3ea2a6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
            }}
          >
            Back to News
          </button>
        </div>
      </MainLayout>
    );
  }

  let label: string = "";

  if (frontMatter.type === "election") {
    label = "選舉";
  } else if (frontMatter.type === "event") {
    label = "活動";
  } else if (frontMatter.type === "info") {
    label = "資訊";
  } else {
    label = "其他";
  }

  return (
    <MainLayout>
      <article
        style={{
          margin: "5px auto",
        }}
      >
        <p>
          {frontMatter.date}
        </p>
        <Heading>【{label}】{frontMatter.title}</Heading>
        <div>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={{
              img: ({ src, alt }) => <ImageCard src={src || ""} alt={alt} />,
              ul: ({ children }) => <ul style={{ marginLeft: '20px' }}>{children}</ul>,
              ol: ({ children }) => <ol style={{ marginLeft: '20px' }}>{children}</ol>,
              li: ({ children }) => <li style={{ margin: '2px' }}>{children}</li>,
              a: ({ href, children }) => <MarkdownLink href={href}>{children}</MarkdownLink>,
              p: ({ children }) => <Text>{children}</Text>,
              strong: ({ children }) => <strong style={{ color: 'white', fontWeight: '800'}}>{children}</strong>,
              hr: () => <Divider />
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
        <BacktoNewsPage />
      </article>
    </MainLayout>
  );
};

export default NewsArticlePage;
