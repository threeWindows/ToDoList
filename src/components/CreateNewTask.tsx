import styled from "styled-components";
import { BsPlusCircle } from "react-icons/bs";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const InputCointainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  width: 560px;
  height: 50px;
  margin: auto;
  border-radius: 10px;
`;

const TypeTextInput = styled.input`
  outline: none;
  border: none;
  color: #423655;
  border-bottom: 1px solid #423655;
  margin-left: 20px;
  width: 300px;
  background-color: #ffffff;
`;

const schema = z.object({
  text: z.string().min(3)
});

type FormData = z.infer<typeof schema>;

interface Props {
  onClick: (data: FormData) => void;
}

const CreateNewTask = ({ onClick }: Props) => {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  return (
    <div>
      <form action="" onSubmit={handleSubmit((data) => onClick(data))}>
        <InputCointainer>
          <BsPlusCircle
            type="submit"
            onClick={handleSubmit((data) => onClick(data))}
            size={30}
            color="#423655"
          />
          <TypeTextInput
            {...register("text")}
            type="text"
            placeholder="Create a new task ... "
          />
        </InputCointainer>
      </form>
    </div>
  );
};

export default CreateNewTask;
