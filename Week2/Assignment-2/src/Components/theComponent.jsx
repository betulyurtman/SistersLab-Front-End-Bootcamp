const theComponent = (props) => {
    console.log(props);
    const { title, person, languages, componentExample } = props;
  
    return (
      <>
        <div>
          Hello {person.name}, your age is {person.age}, welcome!
        </div>
        <div>{title}</div>
        <div>
          <ul>
            {languages.map((hobby, index) => {
              return <li key={index}>{hobby}</li>;
            })}
          </ul>
        </div>
        {componentExample}
      </>
    );
  };
  
  export default theComponent;