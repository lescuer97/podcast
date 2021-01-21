const ShowData = (props) => {
  return (
    <div className="scroll" dangerouslySetInnerHTML={{ __html: props.dat }} />
  );
};

export default ShowData;
