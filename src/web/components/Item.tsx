
interface ItemProps {
  title: string;
  body: string;
}

export const Items: React.FC<ItemProps> = ({ title, body }) => {
  return (
    <div className="bg-white rounded-2xl text-black p-6 h-36 max-h-40 px-3 shadow-lg transform transition-transform duration-300 hover:scale-102 hover:shadow-xl">
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-lg">{body}</p>
    </div>
  );
};
