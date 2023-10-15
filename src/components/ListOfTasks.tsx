import React from "react";
import styled from "styled-components";
import { SyntheticEvent } from "react";

import { BsPencil, BsTrash } from "react-icons/bs";

interface Task {
  id: number;
  text: string;
}

interface Props {
  tasks: Task[];
  changeValueTask: (id: number, text: string) => void;
  delateTask: (id: number) => void;
  changeEelement: boolean;
  idForChangeElement: number;
  valueOfEditTask: string;
  onChange: (e: SyntheticEvent) => void;
  confirmChange: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
}

const Container = styled.div`
  background-color: #ffffff;
  width: 600px;
  margin: auto;
  height: auto;
  margin-top: 20px;
  color: #423655;
  position: relative;
  border-radius: 30px 30px 0px 0px;
`;

const ListElement = styled.li`
  list-style: none;
  border-bottom: 1px solid #423655;
  padding: 2px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ListContainer = styled.ul`
  margin: 0;
  padding: 0;
  padding-bottom: 100px;
`;

const Space = styled.span`
  margin: 20px;
`;

const InputStyle = styled.input`
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #423655;
  width: 400px;
  height: 20px;
  margin-left: 20px;
  outline: none;
  color: #423655;
  font-size: 15px;
`;

const ListOfTasks = ({
  tasks,
  changeValueTask,
  delateTask,
  changeEelement = false,
  idForChangeElement = 1,
  valueOfEditTask,
  onChange,
  confirmChange
}: Props) => {
  return (
    <div>
      <Container>
        <ListContainer>
          {tasks.map((item) => (
            <ListElement key={item.id}>
              {changeEelement && idForChangeElement == item.id ? (
                <InputStyle
                  value={valueOfEditTask}
                  onChange={onChange}
                  type="text"
                  onKeyPress={confirmChange}
                />
              ) : (
                <Space>{item.text}</Space>
              )}

              <Space>
                <Space>
                  <BsPencil
                    onClick={() => changeValueTask(item.id, item.text)}
                  />
                </Space>
                <Space>
                  <BsTrash onClick={() => delateTask(item.id)} />
                </Space>
              </Space>
            </ListElement>
          ))}
        </ListContainer>
      </Container>
    </div>
  );
};

export default ListOfTasks;
