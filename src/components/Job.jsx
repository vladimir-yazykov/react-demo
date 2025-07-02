export const Job = (props) => {
  return (
    <div>
      <div>
        <b>Место работы:</b> {props.title}
      </div>
      <div>
        <b>Должность:</b> {props.post}
      </div>
      <div>
        <b>Чем занимался</b>: {props.description}
      </div>
    </div>
  );
};
