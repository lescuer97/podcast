const ShowData = (props) => {
  // TODO MAKE SHOW NOTES STIKY TO THE TOP SO ONLY THE ESPISODES SCROLL 
  return (
    <div className="scroll" dangerouslySetInnerHTML={{ __html: props.dat }} />
  );
};

export default ShowData;
