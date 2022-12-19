import Image from "next/image";

const ImageWrapper = ({ src, alt, className, height, width, id = "" }) => {
  return (
    <div className={`${className}`} id={id}>
      <Image
        id={id}
        src={src}
        layout="fill"
        alt={alt}
        priority
        sizes="(max-width: 500px)"
        className={className}
      />
    </div>
  );
};

export default ImageWrapper;
