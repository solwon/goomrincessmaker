import React, { useEffect, useRef, useState } from "react";

const ChangeDetect = () => {
  const initCard: Card = {
    id: 1,
    title: "제목",
    detail: "내용",
    group: 1,
    creator: 1,
    assignee: 1,
    deadline: "2021-10-10",
    order: 1,
  };
  const formRef = useRef<HTMLFormElement>(null);
  const [beforeCard, setBeforeCard] = useState<Card>(initCard);
  const [afterCard, setAfterCard] = useState<Card>(initCard);
  const [changedKey, setChangedKey] = useState<keyof Card | null>(null);
  const [changedValue, setChangedValue] = useState<string>("");

  useEffect(() => {
    let changeKey: keyof Card | "" = "";
    let changeValue: string = "";
    for (const key in beforeCard) {
      if (
        beforeCard.hasOwnProperty(key) &&
        afterCard.hasOwnProperty(key) &&
        beforeCard[key as keyof Card] !== afterCard[key as keyof Card]
      ) {
        changeKey = key as keyof Card;
        changeValue = `${beforeCard[key as keyof Card]} -> ${
          afterCard[key as keyof Card]
        }`;
        break;
      }
    }
    if (!changeKey) return;
    setChangedKey(changeKey);
    setChangedValue(changeValue);
    setBeforeCard(afterCard);
  }, [afterCard]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex w-full border-2">
      <div className="flex w-1/2 flex-col">
        <div className="w-full">현재 카드</div>
        {Object.keys(beforeCard).map((key) => (
          <div key={key} className="w-full">
            {key}: {beforeCard[key as keyof Card]}
          </div>
        ))}
      </div>
      <div className="flex w-1/2 flex-col">
        <div className="w-full">현재 카드</div>
        <form ref={formRef} onSubmit={handleSubmit}>
          {Object.keys(beforeCard).map((key) => (
            <div key={key} className="flex w-full">
              <label htmlFor={key}>{key}</label>
              <input
                id={key}
                type="text"
                className="border"
                onChange={(e) =>
                  setAfterCard({ ...afterCard, [key]: e.target.value })
                }
                defaultValue={beforeCard[key as keyof Card]}
              />
            </div>
          ))}
          <div className="w-full">바뀐 키: {changedKey}</div>
          <div className="w-full">{changedValue}</div>
        </form>
      </div>
    </div>
  );
};

export default ChangeDetect;
