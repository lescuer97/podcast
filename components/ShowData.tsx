
export default function ShowData (props)  {

  return (
    <div  className="scroll" id="scroll" dangerouslySetInnerHTML={{ __html: props.list }} />
  );
};


