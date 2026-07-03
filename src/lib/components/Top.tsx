import { Button } from "antd";

const Top = () => {
  return (
    <div className=" flex justify-between items-center">
      <div>
        <p>Мини CRUD</p>
        <p>Поиск • Модальные окна • Карточки</p>
      </div>
      <div>
        <p>Всего: 0</p>
        <Button>+ Добавить</Button>
      </div>
    </div>
  );
};

export default Top;
