interface CardProps {
    imgSrc: string;
    imgAlt: string;
    title: string;
    description: string;
    buttonText: string;
    buttonColor?: string;
}

export const Card = ({
  imgSrc,
  imgAlt,
  title,
  description,
  buttonText,
  buttonColor = "bg-blue-600 hover:bg-blue-700",
}: CardProps) => {
  return (
    <div className="bg-gray-100 rounded-xl shadow-sm p-8 flex flex-col items-center text-center">
      <img src={imgSrc} alt={imgAlt} className="w-32 h-32 mb-6" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <button
        className={`${buttonColor} text-white font-semibold py-2 px-6 rounded-full transition`}
      >
        {buttonText}
      </button>
    </div>
  );
};
    

