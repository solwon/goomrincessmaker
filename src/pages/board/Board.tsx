import BoardHeader from "./BoardHeader";
import CardGroup from "./CardGroup";
import { useEffect, useState } from "react";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL;

const Board = () => {
  const [testData, setTestData] = useState<TestData | null>(null);

  // 처음로드시 데이터가져옴
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/get`);
        setTestData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // 프로젝트 변경로직
  const [projectId, setProjectId] = useState<number>(1);

  useEffect(() => {}, [projectId]);
  // 그룹 이동시 실행
  const [cardGroupId, setCardGroupId] = useState<number | null>(null);
  const [prevGroupOrder, setPrevGroupOrder] = useState<number | null>(null);
  const [cardGroupOrder, setCardGroupOrder] = useState<number>(0);
  const [groupArrange, setGroupArrange] = useState<boolean>(false);

  useEffect(() => {
    // console.log(cardGroupOrder);
    // console.log(prevGroupOrder);
    const fetchData = async () => {
      try {
        if (groupArrange) {
          // console.log(prevGroupOrder);
          // console.log(cardGroupOrder);
          let newGroupOrder;
          if (prevGroupOrder) {
            newGroupOrder = (prevGroupOrder + cardGroupOrder) / 2;
          } else {
            newGroupOrder = cardGroupOrder;
          }

          await axios.put(`${BASE_URL}/api/groupArrange/${cardGroupId}`, {
            order: newGroupOrder,
          });
          const response = await axios.get(`${BASE_URL}/get`);
          setTestData(response.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setGroupArrange(false);
      }
    };

    fetchData();
  }, [groupArrange]);

  // 카드변경시 실행
  /// Card를 받는 카드 스테이트 하나로 통일할 것
  const [cardId, setCardId] = useState<number>(0);
  const [cardOrder, setCardOrder] = useState<number>(0);
  const [cardArrange, setCardArrange] = useState<boolean>(false);
  const [prevCardOrder, setPrevCardOrder] = useState<number>(0);

  const [groupId, setGroupId] = useState<number>(0);
  const [isLeave, setIsLeave] = useState<boolean>(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cardArrange) {
          // console.log(groupId);
          // console.log(cardOrder);
          let newCardOrder;
          if (prevCardOrder) {
            newCardOrder = (prevCardOrder + cardOrder) / 2;
          } else {
            newCardOrder = cardOrder / 2;
          }
          const response = await axios.put(
            `${BASE_URL}/api/testdata/${cardId}`,
            {
              group: groupId,
              order: newCardOrder,
            },
          );

          try {
            const response = await axios.get("http://localhost:3001/get");
            setTestData(response.data);
          } catch (error) {
            console.error(error);
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setCardArrange(false);
      }
    };
    // console.log(cardArrange);
    fetchData();
  }, [cardArrange]);

  if (!testData) {
    return <div>loading</div>;
  }

  const cardGroupForProject = testData.CardGroup.filter(
    (group) => group.project === projectId,
  );
  const sortedGroup = cardGroupForProject.sort((a, b) => a.order - b.order);

  return (
    <div className="">
      <BoardHeader projectId={projectId} setProjectId={setProjectId} />
      <div className="flex flex-row">
        {sortedGroup.map((group, index) => (
          <CardGroup
            key={group.id}
            testData={testData}
            group={group}
            setCardGroupId={setCardGroupId}
            setCardGroupOrder={setCardGroupOrder}
            prevGroupOrder={index > 0 ? sortedGroup[index - 1].order : 1024}
            setPrevGroupOrder={setPrevGroupOrder}
            setGroupArrange={setGroupArrange}
            isLeave={isLeave}
            setIsLeave={setIsLeave}
            // 하위인 카드관련
            cardId={cardId}
            setCardId={setCardId}
            cardOrder={cardOrder}
            setCardOrder={setCardOrder}
            cardArrange={cardArrange}
            setCardArrange={setCardArrange}
            prevCardOrder={prevCardOrder}
            setPrevCardOrder={setPrevCardOrder}
            groupId={groupId}
            setGroupId={setGroupId}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
