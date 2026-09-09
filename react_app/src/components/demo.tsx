

const Greet = () => {
    const name = "Garv" ;
  return (
    <div>Hello,{name}</div>
  );
};

type UsercardProps= {
  name : string,
  role : string
};

const Usercard = ({name, role}: UsercardProps) => {
  return (
    <div className =  "card">
       <h1>{name} </h1>
       <p>{role} </p>
       </div>
  );
};

export {Greet , Usercard};