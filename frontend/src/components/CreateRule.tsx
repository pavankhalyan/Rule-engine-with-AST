import React, {useState} from "react"; 
import { createRule } from '../apiclient'; 

const createRule : React.FC = () => {
    const  [ruleString, setRuleString] = useState(""); 
    const [createdBy, setCreatedBy] = useState(""); 
    const [message, setMessage] = useState(""); 

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault(); 
        try {
            const response = await createRule(ruleString, createdBy); 
            setMessage(response.data.message); 
        }catch (error) {
            console.error('error creating rule : ',error);
            setMessage("Failed to create rule");
        }
    }
    
    return (
        <div>
      <h2>Create a New Rule</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rule String:</label>
          <input
            type="text"
            value={ruleString}
            onChange={(e) => setRuleString(e.target.value)}
            placeholder="Enter rule string"
            required
            />
        </div>
        <div>
          <label>Created By:</label>
          <input
            type="text"
            value={createdBy}
            onChange={(e) => setCreatedBy(e.target.value)}
            placeholder="Your name"
            required
            />
        </div>
        <button type="submit">Create Rule</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};
 