import React,{ useState, useEffect } from "react";
export default Crud;



function Crud(){
   const [lastname, setLastname] = useState("");
   const [firstname, setFirstname] = useState("");
   const [purpose, setPurpose] = useState("");
   const [date, setDate] = useState("");
   const [visitors, setVisitors] = useState([

     

   ]);


   const addVisitor = () =>{
    const newVisitor = {
        lastname: lastname,
        firstname: firstname,
        purpose:purpose,
        date:date,

    };
    
    setVisitors((prev) => [...prev, newVisitor]);
  }

const handleDelete = (id ) => {
    setVisitors(visitors.filter(i => i.id !== id));
  
};

return(
    <div className="container  m-5  d-flex justify-content-between">
      
            <div className="crud">
          
                <h1 className="">Visitor Entry</h1>
            
            
                <label htmlFor="lastname">Last Name</label> <br />
                <input type="text" name="lastname" id="" required
                onChange={(e) => {
                    setLastname(e.target.value);
                }}/> <br />

                
                <label htmlFor="firstname">First Name</label><br />
                <input type="text" name="firstname" id="" required
                onChange={(e) => {
                    setFirstname(e.target.value);
                }} /> <br />


                <label htmlFor="purpose">Purpose</label><br />
                <input type="text" name="purpose" id="" required
                onChange={(e) => {
                    setPurpose(e.target.value);
                }} /> <br />


                <label htmlFor="date">Date</label><br />
                <input type="date" name="date"
                onChange={(e) => {
                    setDate(e.target.value);
                }}/> <br />
                
                <button className="btn btn-success btn-sm mt-3 w-100" onClick={addVisitor}>Submit</button>
            </div>
        

                <div className="table w-75">
                   <table className="table">
                    <thead className="thead-dark">
                        <th scope="col">Last Name</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Purpose</th>
                        <th scope="col">Date</th>
                        <th scope="col">Delete</th>
                    </thead>
                       <tbody className="text-dark">
                       {visitors.map((visitor, index)=>{
                          return(
                                 <tr key={index}>
                                 <td>{visitor.lastname}</td>
                                 <td>{visitor.firstname}</td>
                                 <td>{visitor.purpose}</td>
                                 <td>{visitor.date}</td>
                                 <td>
                                    <button
                                    className="btn btn-sm bg-danger m-1 w-100 text-white"
                                    onClick={() => handleDelete(visitor.id)}>
                                    Delete
                                    </button>
                                </td>
                            </tr>
                          )
                       })}
                       </tbody>

                   </table>
                </div>
    </div>
   );
}
