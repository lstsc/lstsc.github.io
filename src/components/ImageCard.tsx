interface Props {
  src: string;
  alt?: string;
}

const ImageCard = ({ src, alt }: Props) => {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "15px",
        margin: "5px 0",
      }}
    />
  )
}

export default ImageCard;