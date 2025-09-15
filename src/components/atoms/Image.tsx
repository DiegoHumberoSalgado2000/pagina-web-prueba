import NextImage, { ImageProps as NextImageProps } from "next/image";

interface ImageProps extends NextImageProps {
  className?: string;
}

export const Image = ({ className = "", ...props }: ImageProps) => {
  return (
    <NextImage
      {...props}
      className={`object-contain ${className}`}
      alt={props.alt || "image"}
    />
  );
};