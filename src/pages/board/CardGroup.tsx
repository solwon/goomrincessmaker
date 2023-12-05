import React, { useEffect, useState } from "react";
import Card from "./Card";
import { CardGroup, TestData } from "global";
import axios from "axios";

interface CardGroupProps {
  testData: TestData;

  group: CardGroup;
  setCardGroupId: React.Dispatch<React.SetStateAction<CardGroup["id"] | null>>;
  setCardGroupOrder: React.Dispatch<React.SetStateAction<CardGroup["order"]>>;
  prevGroupOrder: number;
  setPrevGroupOrder: React.Dispatch<
    React.SetStateAction<CardGroup["order"] | null>
  >;
  setGroupArrange: React.Dispatch<React.SetStateAction<boolean>>;
  isLeave: boolean;
  setIsLeave: React.Dispatch<React.SetStateAction<boolean>>;
  // 카드관련
  cardId: number;
  setCardId: React.Dispatch<React.SetStateAction<number>>;
  cardOrder: number;
  setCardOrder: React.Dispatch<React.SetStateAction<number>>;

  prevCardOrder: number;
  setPrevCardOrder: React.Dispatch<React.SetStateAction<number>>;
  groupId: number;
  setGroupId: React.Dispatch<React.SetStateAction<number>>;
  cardArrange: boolean;
  setCardArrange: React.Dispatch<React.SetStateAction<boolean>>;
}
const CardGroup = ({
  testData,
  group,
  setCardGroupId,
  setCardGroupOrder,
  prevGroupOrder,
  setPrevGroupOrder,
  setGroupArrange,
  isLeave,
  setIsLeave,

  cardId,
  setCardId,
  cardOrder,
  setCardOrder,
  cardArrange,
  setCardArrange,
  prevCardOrder,
  setPrevCardOrder,
  groupId,
  setGroupId,
}: CardGroupProps) => {
  const handleDragStartGroup = (e: React.DragEvent<HTMLDivElement>) => {
    setCardGroupId(group.id);
  };
  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    if (isLeave) {
      // setGroupArrange(false);
      setCardArrange(false);
    } else {
      setCardArrange(true);
    }
    setGroupArrange(true);
  };
  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    setPrevGroupOrder(prevGroupOrder);
    setIsLeave(false);

    // console.log(prevGroupOrder);
  };
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    setCardGroupOrder(group.order);
    // console.log(group.order);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setGroupId(group.id);
    setIsLeave(true);
    // console.log(group.id);
  };

  const cardForGroup = testData.Card.filter((card) => card.group === group.id);
  const sortedCard = cardForGroup.sort((a, b) => a.order - b.order);
  return (
    //  handleDragStartGroup을 작동하기위해서 상단탭부분이 필요하다.
    <div
      className="w-fit border-2 border-gray-500 p-4"
      onDragEnter={(e) => handleDragEnter(e)}
      onDragLeave={(e) => handleDragLeave(e)}
    >
      <div
        className="mb-4"
        onDragStart={(e) => handleDragStartGroup(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => handleDrop(e)}
        onDragEnd={(e) => handleDragEnd(e)}
        draggable="true"
      >
        {group.title}
      </div>
      <div>
        {sortedCard.map((card, index) => (
          <Card
            key={card.id}
            card={card}
            groupIdProp={group.id}
            setGroupId={setGroupId}
            setCardIdProp={setCardId}
            setCardOrder={setCardOrder}
            prevOrderProp={index > 0 ? sortedCard[index - 1].order : 1024}
            setPrevCardOrder={setPrevCardOrder}
            setCardArrange={setCardArrange}
          />
        ))}
        <div className="border-t-2 p-2">add card</div>
      </div>
    </div>
  );
};

export default CardGroup;
