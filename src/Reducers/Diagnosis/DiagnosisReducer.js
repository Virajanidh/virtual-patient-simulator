import {diagnosisTypes} from '../types'; 
  const initialState = {
    allDignosisQ:[],
    correctDiagnosisQ:[],
    wrongDiagnosisQ:[],
    selectedAnsForDiagnosisQ:[]
  };

  const setCorrectDiagnosisQ=(array1,item)=>{
    
    console.log(array1,initialState.correctDiagnosisQ,item)
    if(array1.length !=0){
        for(let i=0;i<array1.length;i++){
            console.log(array1[i].id,item.id)
            if(array1[i].id==item.id){
                return array1;
            }
        }
        return array1.concat(item)
    }
    else{
        return array1.concat(item)
    }
    
  }

  const setWrongDiagnosisQ=(array2,item)=>{
    
    console.log(array2,initialState.correctDiagnosisQ,item)
    if(array2.length !=0){
        for(let i=0;i<array2.length;i++){
            console.log(array2[i].id,item.id)
            if(array2[i].id==item.id){
                return array2;
            }
        }
        return array2.concat(item)
    }
    else{
        return array2.concat(item)
    }
    
  }

  const setSelectedAnsForDiagnosis =(array3,item)=>{
    if(array3.length !=0){
        for(let i=0;i<array3.length;i++){
            console.log(array3[i].id,item.id)
            if(array3[i].id==item.id){
                array3[i].studentAnswer=item.studentAnswer
                array3[i].correctness=item.correctness
                return array3;
            }
        }
        return array3.concat(item)
    }
    else{
        return array3.concat(item)
    }
  }

  const DiagnosisReducer = (state = initialState, action)=> {
    switch (action.type) {
        case diagnosisTypes.SETDIAGNOSISQ:
            return {
                ...state,
                allDignosisQ : action.data
            
          };
        case diagnosisTypes.SETCORRECTDIAGNOSISQ:
            return {
              ...state,
              correctDiagnosisQ : setCorrectDiagnosisQ(state.correctDiagnosisQ,action.data)
  
            };
        case diagnosisTypes.SETWRONGDIAGNOSISQ:
            return {
              ...state,
              wrongDiagnosisQ : setWrongDiagnosisQ( state.wrongDiagnosisQ,action.data)
                  
                };
        case diagnosisTypes.SELECTEDANSFORDQ:
            return{
                ...state,
              selectedAnsForDiagnosisQ : setSelectedAnsForDiagnosis(state.selectedAnsForDiagnosisQ,action.data)
                  
            };
      
      
      default:
        return state;
    }
  }
export default DiagnosisReducer;

