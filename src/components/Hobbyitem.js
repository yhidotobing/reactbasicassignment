const HobbyItem = (props) => {
  let { hobbies } = props;
  console.log(hobbies);
  return (
    <div className="hobby-item" onClick={() => alert(hobbies.name)}>
      <img src={hobbies.img} alt="" width="200" />
      <h3>{hobbies.name}</h3>
    </div>
  );
};

export default HobbyItem;
