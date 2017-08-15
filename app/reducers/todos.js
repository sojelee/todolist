import { ADD,REMOVE,TEXTCHANGE,AUTHORCHANGE,CLEARINPUTS } from '../actions/todos';

const initialState = {
           todos: [
              {text:'Click to remove',author:'Grace'},
              {text:'Learn React Native',author:'Magda'},
              {text:'Write Code',author:'Mwaki'},
              {text:'Ship App',author:'Gasi'},
              {text:'Audit Sales',author:'Kimiti'},
              {text:'Run Unit Tests',author:'Mwakiyao'},
              {text:'Check Time Server',author:'Gasimike'},
              {text:'Check with Grands',author:'Chepino'},
              {text:'Come Home Esther',author:'Mama Mwaki'}
         ],
         author:'',
         text:'',
    };
    
export default(state=initialState, action) =>{
    switch(action.type) {
      case ADD: {
       return {
         ...state,
         todos: [action.payload, ...state.todos],
       }
    }
      case REMOVE:{
      return {
        ...state,
        todos: state.todos.filter((todo, i) => i !== action.payload),
      }
    }

      case TEXTCHANGE:{
        return {
          ...state,
          text: action.payload,
        }
      }

      case AUTHORCHANGE:{
        return {
          ...state,
          author: action.payload,
        }
      }
      case CLEARINPUTS:{
        return{
          ...state,
          text:'',
          author:'',
        }
      }
        default:
          return state;
    }

}
