
export default function ShowData (props)  {
  // TODO MAKE SHOW NOTES STIKY TO THE TOP SO ONLY THE ESPISODES SCROLL 
  return (
    <div  className="scroll" id="scroll" dangerouslySetInnerHTML={{ __html: props.dat }} />
  );
};


