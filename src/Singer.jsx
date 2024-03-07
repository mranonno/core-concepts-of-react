export default function Singer({ singer }) {
    const { id, name, age } = singer;
    
  return (
      <div style={{display:"flex", alignItems:"center", gap:'10px', border:'2px solid tomato',borderRadius:'10px',margin:'5px',paddingLeft:'10px'}}>
          <h3>ID: {id}</h3>
      <h3>Name: {name}</h3>
          <h3>Age: {age}</h3>
    </div>
  );
}
