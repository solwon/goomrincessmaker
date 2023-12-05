import { Card } from "global";

interface CardProps {
  card: Card;
  groupIdProp: number;
  setGroupId: React.Dispatch<React.SetStateAction<number>>;
  // setPrevGroupId: React.Dispatch<React.SetStateAction<number>>;
  setCardIdProp: React.Dispatch<React.SetStateAction<Card["id"]>>;
  setCardOrder: React.Dispatch<React.SetStateAction<Card["order"]>>;
  prevOrderProp: number;
  setPrevCardOrder: React.Dispatch<React.SetStateAction<number>>;

  setCardArrange: React.Dispatch<React.SetStateAction<boolean>>;
}

const Card = ({
  card,
  groupIdProp,
  setGroupId,

  setCardIdProp,
  setCardOrder,
  prevOrderProp,
  setPrevCardOrder,

  setCardArrange,
}: CardProps) => {
  const handleDragStartCard = (e: React.DragEvent<HTMLDivElement>) => {
    setCardIdProp(card.id);
    // setPrevGroupId(groupId);
  };

  const handleDragEnd = async (e: React.DragEvent<HTMLDivElement>) => {
    setCardArrange(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    setPrevCardOrder(prevOrderProp);

    // setGroupId(groupId);
    // console.log(groupId);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    setCardOrder(card.order);
    setGroupId(groupIdProp);

    // console.log(groupIdProp);
  };

  return (
    <div
      className=""
      draggable="true"
      onDragStart={(e) => handleDragStartCard(e)}
      onDragEnter={(e) => handleDragEnter(e)}
      onDragOver={(e) => handleDragOver(e)}
      onDrop={(e) => handleDrop(e)}
      onDragEnd={(e) => handleDragEnd(e)}
    >
      {card.title}
    </div>
  );
};
export default Card;
