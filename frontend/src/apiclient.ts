import axios  from "axios"; 

const api = axios.create{
    baseURL:"http://localhost:5000/api", 
    headers : {
        "Content-type": "application/json",
    } 
} 

export const createRule = async(ruleString: string, createdBy: string) => {
    return api.post("/rules",{ruleString, createdBy});
}  

export const getRules = async(rulesId: number []) => {
    return api.post("/rules",{rulesId});
} 

export const evaluateRule = async (ruleId: number, data: any) => {
    return api.post('/rules/evaluate', { ruleId, data });
};