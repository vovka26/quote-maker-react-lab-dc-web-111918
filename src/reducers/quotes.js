export default (state = [], action) => {
  let index;
  let quote;

  switch(action.type){

    case 'ADD_QUOTE':
      return [...state, action.quote];

    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)

    case 'UPVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]

      return [...state.splice(index, 1, { ...quote, votes: quote.votes += 1 })]

    case 'DOWNVOTE_QUOTE':
      index = state.findIndex(quote => quote.id === action.quoteId)
      quote = state[index]
      if (quote.votes > 0) {
        return [...state.splice(index, 1, { ...quote, votes: quote.votes -= 1 })]
      }
      return state;

    default: 
      return state;
  }
  
}
